package media.acses.teacherswebsite.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "password_reset_token")
@Data
@NoArgsConstructor
public class PasswordResetToken extends BaseEntity {

    private static final long EXPIRATION_IN_MILLISECONDS = 15 * 60 * 1000;

    @Column(name = "token")
    private String token;

    @OneToOne(targetEntity = Student.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "student_id")
    private Student student;

    @OneToOne(targetEntity = Teacher.class, fetch = FetchType.EAGER)
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @Column(name = "expiry_date")
    private Date expiryDate;

    public PasswordResetToken(String token, Student student) {
        this.token = token;
        this.student = student;
    }

    public PasswordResetToken(String token, Teacher teacher) {
        this.token = token;
        this.teacher = teacher;
    }

    public static long getExpirationInMilliseconds() {
        return EXPIRATION_IN_MILLISECONDS;
    }
}
