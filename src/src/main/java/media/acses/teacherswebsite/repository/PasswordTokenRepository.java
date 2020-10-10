package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.PasswordResetToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordTokenRepository extends JpaRepository<PasswordResetToken, Long> {

}
