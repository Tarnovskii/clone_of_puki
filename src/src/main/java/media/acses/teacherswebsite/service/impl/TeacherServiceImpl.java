package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.Role;
import media.acses.teacherswebsite.model.Teacher;
import media.acses.teacherswebsite.repository.PasswordTokenRepository;
import media.acses.teacherswebsite.repository.RoleRepository;
import media.acses.teacherswebsite.repository.TeacherRepository;
import media.acses.teacherswebsite.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class TeacherServiceImpl implements TeacherService {

    private final TeacherRepository teacherRepository;
    private final RoleRepository roleRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PasswordTokenRepository passwordTokenRepository;

    @Autowired
    public TeacherServiceImpl(
            TeacherRepository teacherRepository,
            RoleRepository roleRepository,
            BCryptPasswordEncoder passwordEncoder,
            PasswordTokenRepository passwordTokenRepository
    ) {
        this.teacherRepository = teacherRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.passwordTokenRepository = passwordTokenRepository;
    }

    @Override
    public boolean register(Teacher teacher) {
        Teacher teacherFromDB = teacherRepository.findByUsername(teacher.getUsername());

        if (teacherFromDB != null) {
            return false;
        }

        Role roleUser = roleRepository.findByName("ROLE_TEACHER");
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(roleUser);

        teacher.setTeacherRoles(userRoles);
        teacher.setPassword(passwordEncoder.encode(teacher.getPassword()));

        teacherRepository.save(teacher);

        return true;
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
//        PasswordResetToken resetToken = new PasswordResetToken(token, teacher);
//        passwordTokenRepository.save(resetToken);
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
