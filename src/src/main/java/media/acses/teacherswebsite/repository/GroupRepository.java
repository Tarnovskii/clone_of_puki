package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findByName(String name);
}
