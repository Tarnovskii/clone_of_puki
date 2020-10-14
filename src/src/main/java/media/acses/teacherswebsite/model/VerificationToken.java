package media.acses.teacherswebsite.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.persistence.Entity;
import java.util.Date;

@Entity
@Table(name = "verification_token")
@Data
@NoArgsConstructor
public class VerificationToken extends BaseEntity {
    private static final long EXPIRATION_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

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

    public VerificationToken(String token, Student student) {
        this.token = token;
        this.student = student;
    }

    public VerificationToken(String token, Teacher teacher) {
        this.token = token;
        this.teacher = teacher;
    }

    public static long getExpirationInMilliseconds() {
        return EXPIRATION_IN_MILLISECONDS;
    }
}
