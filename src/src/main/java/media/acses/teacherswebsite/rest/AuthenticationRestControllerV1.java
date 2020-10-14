package media.acses.teacherswebsite.rest;

import media.acses.teacherswebsite.dto.AuthenticationRequestDto;
import media.acses.teacherswebsite.dto.RegistrationRequestDto;
import media.acses.teacherswebsite.exception.UserExistsException;
import media.acses.teacherswebsite.model.Class;
import media.acses.teacherswebsite.model.*;
import media.acses.teacherswebsite.security.jwt.JwtStorage;
import media.acses.teacherswebsite.security.jwt.JwtTokenProvider;
import media.acses.teacherswebsite.service.AccessKeyService;
import media.acses.teacherswebsite.service.ClassService;
import media.acses.teacherswebsite.service.StudentService;
import media.acses.teacherswebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping(value = "/api/v1/auth/")
public class AuthenticationRestControllerV1 {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final TeacherService teacherService;
    private final StudentService studentService;
    private final AccessKeyService accessKeyService;
    private final ClassService classService;

    @Autowired
    public AuthenticationRestControllerV1(
            AuthenticationManager authenticationManager,
            JwtTokenProvider jwtTokenProvider,
            TeacherService teacherService,
            StudentService studentService,
            AccessKeyService accessKeyService,
            ClassService classService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.teacherService = teacherService;
        this.studentService = studentService;
        this.accessKeyService = accessKeyService;
        this.classService = classService;
    }

    @PostMapping("login")
    public ResponseEntity login(@RequestBody AuthenticationRequestDto authenticationRequestDto, HttpServletRequest request) {
        try {
            String username = authenticationRequestDto.getUsername();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, authenticationRequestDto.getPassword()));
            Teacher teacher = teacherService.findByUsername(username);
            Set<Role> roles;
            Map<Object, Object> response = new HashMap<>();

            if (teacher == null) {
                Student student = studentService.findByUsername(username);
                if (student == null) {
                    throw new UsernameNotFoundException("User with username: " + username + " not found");
                } else {
                    //student
                    roles = student.getStudentRoles();
                    response.put("username", student.getUsername());
                    response.put("email", student.getEmail());
                    response.put("phone_number", student.getPhoneNumber());
                    response.put("first_name", student.getFirstName());
                    response.put("last_name", student.getLastName());
                    response.put("group", student.getGroup());
                }
            } else {
                //teacher
                roles = teacher.getTeacherRoles();
                response.put("username", teacher.getUsername());
                response.put("email", teacher.getEmail());
                response.put("phone_number", teacher.getPhoneNumber());
                response.put("groups", teacher.getTeacherClasses());
            }

            String token = jwtTokenProvider.createToken(username, roles);
            JwtStorage.addToken(token, request.getRemoteAddr());

            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("invalid username or password");
        }
    }

    @PostMapping("register")
    public ResponseEntity register(@RequestBody RegistrationRequestDto requestDto, HttpServletRequest request) throws UserExistsException {
        if (studentService.findByUsername(requestDto.getUsername()) != null ||
            teacherService.findByUsername(requestDto.getUsername()) != null) {
            throw new UserExistsException("user with username: " + requestDto.getUsername() + " already exists");
        }

        if (requestDto.getAccessKey() != null) {
             University university = getUniversityByAccessKey(requestDto.getAccessKey().getKey());
            requestDto.setUniversity(university);
        }

        if (requestDto.getGroupName() != null) {
            Class group = classService.findByName(requestDto.getGroupName());
            requestDto.setGroup(group);
        }

        Entity entity = requestDto.fromDto();

        if (entity instanceof Teacher) {
            if (teacherService.register((Teacher) entity, request)) {
                return new ResponseEntity("confirm account on email", HttpStatus.OK);
            }
        } else {
            if (studentService.register((Student) entity, request)) {
                return new ResponseEntity("confirm account on email", HttpStatus.OK);
            }
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);

    }

    private University getUniversityByAccessKey(String key) {
        if (key == null) {
            return null;
        }
        AccessKey accessKey = accessKeyService.findByKey(key);
        University result = accessKey.getUniversity();
        return result;
    }
}
