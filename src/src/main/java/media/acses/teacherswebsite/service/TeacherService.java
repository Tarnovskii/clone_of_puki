package media.acses.teacherswebsite.service;

import media.acses.teacherswebsite.model.Teacher;

import java.util.List;

public interface TeacherService {

    boolean register(Teacher teacher);

    void changePassword(String password, String token);

    List<Teacher> getAll();

    Teacher findByUsername(String username);

    Teacher findByEmail(String email);

    void createPasswordResetToken(Teacher teacher, String token);

    Teacher findById(Long id);

    boolean delete(Long id);

}
