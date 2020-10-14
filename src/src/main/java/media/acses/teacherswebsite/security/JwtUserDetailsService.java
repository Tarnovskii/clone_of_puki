package media.acses.teacherswebsite.security;

import media.acses.teacherswebsite.model.Student;
import media.acses.teacherswebsite.model.Teacher;
import media.acses.teacherswebsite.security.jwt.JwtStudent;
import media.acses.teacherswebsite.security.jwt.JwtStudentFactory;
import media.acses.teacherswebsite.security.jwt.JwtTeacher;
import media.acses.teacherswebsite.security.jwt.JwtTeacherFactory;
import media.acses.teacherswebsite.service.StudentService;
import media.acses.teacherswebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    private final TeacherService teacherService;

    private final StudentService studentService;

    @Autowired
    public JwtUserDetailsService(TeacherService teacherService, StudentService studentService) {
        this.teacherService = teacherService;
        this.studentService = studentService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Student student = studentService.findByUsername(username);
        if (student != null) {
            JwtStudent jwtStudent = JwtStudentFactory.create(student);
            return jwtStudent;
        } else  {
            Teacher teacher = teacherService.findByUsername(username);
            if (teacher != null) {
                JwtTeacher jwtTeacher = JwtTeacherFactory.create(teacher);
                return jwtTeacher;
            } else {
                throw new UsernameNotFoundException("User with username: " + username + " not found");
            }
        }
    }
}
