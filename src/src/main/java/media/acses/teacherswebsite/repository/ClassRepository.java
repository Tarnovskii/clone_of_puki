package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepository extends JpaRepository<Class, Long> {
    Class findByName(String name);
}
