package media.acses.teacherswebsite.service;

import media.acses.teacherswebsite.model.Student;

import java.util.List;

public interface StudentService {

    boolean register(Student student);

    List<Student> getAll();

    Student findByUsername(String username);

    Student findByEmail(String email);

    void createPasswordResetToken(Student student, String token);

    Student findById(Long id);

    boolean delete(Long id);

}
