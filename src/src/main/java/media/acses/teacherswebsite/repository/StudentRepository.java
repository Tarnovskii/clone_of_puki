package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findByUsername(String username);

    Student findByEmail(String email);

}
