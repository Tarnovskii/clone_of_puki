package media.acses.teacherswebsite.rest;

import io.jsonwebtoken.Claims;
import media.acses.teacherswebsite.model.Student;
import media.acses.teacherswebsite.model.Teacher;
import media.acses.teacherswebsite.security.jwt.JwtStorage;
import media.acses.teacherswebsite.security.jwt.JwtTokenProvider;
import media.acses.teacherswebsite.service.MailSenderService;
import media.acses.teacherswebsite.service.SecurityService;
import media.acses.teacherswebsite.service.StudentService;
import media.acses.teacherswebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/user/")
public class UserRestControllerV1 {

    private final JwtTokenProvider jwtTokenProvider;
    private final StudentService studentService;
    private final TeacherService teacherService;
    private final MailSenderService mailSenderService;
    private final SecurityService securityService;

    @Autowired
    public UserRestControllerV1(
            JwtTokenProvider jwtTokenProvider,
            StudentService studentService,
            TeacherService teacherService,
            MailSenderService mailSenderService,
            SecurityService securityService
    ) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.studentService = studentService;
        this.teacherService = teacherService;
        this.mailSenderService = mailSenderService;
        this.securityService = securityService;
    }

    @PostMapping("resetPassword")
    public ResponseEntity resetPassword(@RequestParam("email") String email, HttpServletRequest request) {
        Teacher teacher = teacherService.findByEmail(email);
        if (teacher == null) {
            Student student = studentService.findByEmail(email);
            if (student == null) {
                throw new UsernameNotFoundException("user with email: " + email + " not found");
            } else {
                //student
                String token = UUID.randomUUID().toString();
                studentService.createPasswordResetToken(student, token);
                mailSenderService.sendResetPasswordMessage(token, email, student.getUsername(),"s", request);
                return ResponseEntity.ok("mail send");
            }
        } else {
            //teacher
            String token = UUID.randomUUID().toString();
            teacherService.createPasswordResetToken(teacher, token);
            mailSenderService.sendResetPasswordMessage(token, email, teacher.getUsername(),"t", request);
            return ResponseEntity.ok("mail send");
        }
    }

    @PostMapping("confirmPassword")
    public ResponseEntity changePassword(@RequestParam("user") String user,
                                         @RequestParam("password") String password,
                                         @RequestParam("token") String token) {
        String result = securityService.validatePasswordResetToken(token);
        if (result == null) {
            if (user.equals("s")) {
                studentService.changePassword(password, token);
                return new ResponseEntity("password changed", HttpStatus.OK);
            }
            if (user.equals("t")) {
                teacherService.changePassword(password, token);
                return new ResponseEntity("password changed", HttpStatus.OK);
            }
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        } else {
            return new ResponseEntity("token is " + result, HttpStatus.FORBIDDEN);
        }
    }

    @PostMapping("activate")
    public ResponseEntity activate(@RequestParam("user") String user, @RequestParam("token") String token) {
        String result = securityService.validateVerificationToken(token);
        if (result == null) {
            if (user.equals("s")) {
                studentService.activate(token);
                return new ResponseEntity("account activated", HttpStatus.OK);
            }
            if (user.equals("t")) {
                teacherService.activate(token);
                return new ResponseEntity("account activated", HttpStatus.OK);
            }
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        } else {
            return new ResponseEntity("token is " + result, HttpStatus.FORBIDDEN);
        }
    }

    @GetMapping("isLogin")
    public ResponseEntity isLogin(HttpServletRequest request) {
        Claims claims = jwtTokenProvider.getBody(jwtTokenProvider.resolveToken(request));

        Map<String, Object> response = new HashMap<>();
        response.put("roles", claims.get("roles"));

        return ResponseEntity.ok(response);
    }

    @PostMapping("logout")
    public ResponseEntity logout(HttpServletRequest request) {
        String token = jwtTokenProvider.resolveToken(request);
        if (JwtStorage.containsToken(token)) {
            JwtStorage.removeToken(token);
            return new ResponseEntity("logged out", HttpStatus.OK);
        } else {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
    }
}
