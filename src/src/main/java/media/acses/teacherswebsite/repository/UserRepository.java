package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String name);
}
