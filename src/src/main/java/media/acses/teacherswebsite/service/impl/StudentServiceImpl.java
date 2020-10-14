package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.PasswordResetToken;
import media.acses.teacherswebsite.model.Role;
import media.acses.teacherswebsite.model.Student;
import media.acses.teacherswebsite.model.VerificationToken;
import media.acses.teacherswebsite.repository.PasswordResetTokenRepository;
import media.acses.teacherswebsite.repository.RoleRepository;
import media.acses.teacherswebsite.repository.StudentRepository;
import media.acses.teacherswebsite.repository.VerificationTokenRepository;
import media.acses.teacherswebsite.service.MailSenderService;
import media.acses.teacherswebsite.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final MailSenderService mailSenderService;
    private final VerificationTokenRepository verificationTokenRepository;

    @Autowired
    public StudentServiceImpl(
            StudentRepository studentRepository,
            RoleRepository roleRepository,
            BCryptPasswordEncoder passwordEncoder,
            PasswordResetTokenRepository passwordResetTokenRepository,
            MailSenderService mailSenderService,
            VerificationTokenRepository verificationTokenRepository
    ) {
        this.studentRepository = studentRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordResetTokenRepository = passwordResetTokenRepository;
        this.mailSenderService = mailSenderService;
        this.verificationTokenRepository = verificationTokenRepository;
    }

    @Override
    public boolean register(Student student, HttpServletRequest request) {
        Student studentFromDB = studentRepository.findByUsername(student.getUsername());

        if (studentFromDB != null) {
            return false;
        }

        Role roleUser = roleRepository.findByName("ROLE_STUDENT");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);

        student.setStudentRoles(userRoles);
        student.setPassword(passwordEncoder.encode(student.getPassword()));
        student.setEnabled(false);

        studentRepository.save(student);

        String token = UUID.randomUUID().toString();
        mailSenderService.sendVerificationMail(student, token, student.getEmail(), request);

        return true;
    }

    @Override
    public void changePassword(String password, String token) {
        PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token);
        Student student = passwordResetToken.getStudent();
        student.setPassword(password);
        studentRepository.save(student);
        passwordResetTokenRepository.delete(passwordResetToken);
    }

    @Override
    public void activate(String token) {
        VerificationToken verificationToken = verificationTokenRepository.findByToken(token);
        Student student = verificationToken.getStudent();
        student.setEnabled(true);
        studentRepository.save(student);
        verificationTokenRepository.delete(verificationToken);
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
        PasswordResetToken resetToken = new PasswordResetToken(token, student);
        resetToken.setExpiryDate(new Date(System.currentTimeMillis() + PasswordResetToken.getExpirationInMilliseconds()));
        passwordResetTokenRepository.save(resetToken);
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
