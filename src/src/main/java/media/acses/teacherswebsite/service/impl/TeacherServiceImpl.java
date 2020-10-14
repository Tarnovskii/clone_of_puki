package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.*;
import media.acses.teacherswebsite.repository.PasswordResetTokenRepository;
import media.acses.teacherswebsite.repository.RoleRepository;
import media.acses.teacherswebsite.repository.TeacherRepository;
import media.acses.teacherswebsite.repository.VerificationTokenRepository;
import media.acses.teacherswebsite.service.MailSenderService;
import media.acses.teacherswebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Service
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final MailSenderService mailSenderService;
    private final VerificationTokenRepository verificationTokenRepository;

    @Autowired
    public TeacherServiceImpl(
            TeacherRepository teacherRepository,
            RoleRepository roleRepository,
            BCryptPasswordEncoder passwordEncoder,
            PasswordResetTokenRepository passwordResetTokenRepository,
            MailSenderService mailSenderService,
            VerificationTokenRepository verificationTokenRepository
    ) {
        this.teacherRepository = teacherRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordResetTokenRepository = passwordResetTokenRepository;
        this.mailSenderService = mailSenderService;
        this.verificationTokenRepository = verificationTokenRepository;
    }

    @Override
    public boolean register(Teacher teacher, HttpServletRequest request) {
        Teacher teacherFromDB = teacherRepository.findByUsername(teacher.getUsername());

        if (teacherFromDB != null) {
            return false;
        }

        Role roleUser = roleRepository.findByName("ROLE_TEACHER");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);

        teacher.setTeacherRoles(userRoles);
        teacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        teacher.setEnabled(false);

        teacherRepository.save(teacher);

        String token = UUID.randomUUID().toString();
        mailSenderService.sendVerificationMail(teacher, token, teacher.getEmail(), request);

        return true;
    }

    @Override
    public void changePassword(String password, String token) {
        PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token);
        Teacher teacher = passwordResetToken.getTeacher();
        teacher.setPassword(password);
        teacherRepository.save(teacher);
        passwordResetTokenRepository.delete(passwordResetToken);
    }

    @Override
    public void activate(String token) {
        VerificationToken verificationToken = verificationTokenRepository.findByToken(token);
        Teacher teacher = verificationToken.getTeacher();
        teacher.setEnabled(true);
        teacherRepository.save(teacher);
        verificationTokenRepository.delete(verificationToken);
    }

    @Override
    public List<Teacher> getAll() {
        List<Teacher> result = teacherRepository.findAll();
        return result;
    }

    @Override
    public Teacher findByUsername(String username) {
        Teacher result = teacherRepository.findByUsername(username);
        return result;
    }

    @Override
    public Teacher findByEmail(String email) {
        Teacher result = teacherRepository.findByEmail(email);
        return result;
    }

    @Override
    public void createPasswordResetToken(Teacher teacher, String token) {
        PasswordResetToken resetToken = new PasswordResetToken(token, teacher);
        resetToken.setExpiryDate(new Date(System.currentTimeMillis() + PasswordResetToken.getExpirationInMilliseconds()));
        passwordResetTokenRepository.save(resetToken);
    }

    @Override
    public Teacher findById(Long id) {
        Teacher result = teacherRepository.findById(id).orElse(null);
        return result;
    }

    @Override
    public boolean delete(Long id) {
        if (teacherRepository.findById(id).isPresent()) {
            teacherRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
