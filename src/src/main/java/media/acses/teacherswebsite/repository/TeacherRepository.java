package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    Teacher findByUsername(String username);

    Teacher findByEmail(String email);

}
