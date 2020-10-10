package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.Role;
import media.acses.teacherswebsite.model.Student;
import media.acses.teacherswebsite.repository.PasswordTokenRepository;
import media.acses.teacherswebsite.repository.RoleRepository;
import media.acses.teacherswebsite.repository.StudentRepository;
import media.acses.teacherswebsite.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PasswordTokenRepository passwordTokenRepository;

    @Autowired
    public StudentServiceImpl(
            StudentRepository studentRepository,
            RoleRepository roleRepository,
            BCryptPasswordEncoder passwordEncoder,
            PasswordTokenRepository passwordTokenRepository
    ) {
        this.studentRepository = studentRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordTokenRepository = passwordTokenRepository;
    }

    @Override
    public boolean register(Student student) {
        Student studentFromDB = studentRepository.findByUsername(student.getUsername());

        if (studentFromDB != null) {
            return false;
        }

        Role roleUser = roleRepository.findByName("ROLE_STUDENT");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);

        student.setStudentRoles(userRoles);
        student.setPassword(passwordEncoder.encode(student.getPassword()));

        studentRepository.save(student);

        return true;
    }

    @Override
    public List<Student> getAll() {
        List<Student> result = studentRepository.findAll();
        return result;
    }

    @Override
    public Student findByUsername(String username) {
        Student result = studentRepository.findByUsername(username);
        return result;
    }

    @Override
    public Student findByEmail(String email) {
        Student result = studentRepository.findByEmail(email);
        return result;
    }

    @Override
    public void createPasswordResetToken(Student student, String token) {
//        PasswordResetToken resetToken = new PasswordResetToken(token, student);
//        passwordTokenRepository.save(resetToken);
    }

    @Override
    public Student findById(Long id) {
        Student result = studentRepository.findById(id).orElse(null);
        return result;
    }

    @Override
    public boolean delete(Long id) {
        if (studentRepository.findById(id).isPresent()) {
            studentRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
