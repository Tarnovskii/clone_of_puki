package media.acses.teacherswebsite.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "password_reset_token")
@Data
@NoArgsConstructor
public class PasswordResetToken extends BaseEntity {

    private static final int EXPIRATION = 60 * 24;

    private String token;

//    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
//    @JoinColumn(nullable = false, name = "user_id")
//    private User user;

    private Date expiryDate;

//    public PasswordResetToken(String token, User user) {
//        this.token = token;
//        this.user = user;
//    }
}
