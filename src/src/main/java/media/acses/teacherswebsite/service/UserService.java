package media.acses.teacherswebsite.service;

import media.acses.teacherswebsite.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    boolean register(User user);

    List<User> getAll();

    User findByUsername(String username);

    User findById(Long id);

    boolean delete(Long id);
}
