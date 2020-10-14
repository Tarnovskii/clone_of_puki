package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.Entity;
import media.acses.teacherswebsite.model.Student;
import media.acses.teacherswebsite.model.Teacher;
import media.acses.teacherswebsite.model.VerificationToken;
import media.acses.teacherswebsite.repository.VerificationTokenRepository;
import media.acses.teacherswebsite.service.MailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.UUID;

@Service
public class MailSenderServiceImpl implements MailSenderService {

    private final JavaMailSender mailSender;
    private final VerificationTokenRepository verificationTokenRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Value("${spring.mail.username}")
    private String sender;

    @Autowired
    public MailSenderServiceImpl(
            JavaMailSender mailSender,
            VerificationTokenRepository verificationTokenRepository,
            BCryptPasswordEncoder passwordEncoder
    ) {
        this.mailSender = mailSender;
        this.verificationTokenRepository = verificationTokenRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void sendMail(String sendTo, String subject, String message) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setFrom(sender);
        mailMessage.setTo(sendTo);
        mailMessage.setSubject(subject);
        mailMessage.setText(message);

        mailSender.send(mailMessage);
    }

    @Override
    public void sendResetPasswordMessage(String token, String email, String username, String userType, HttpServletRequest request) {
        String newPassword = UUID.randomUUID().toString().substring(0, 8);
        String encodedPassword = passwordEncoder.encode(newPassword);
        StringBuilder url = new StringBuilder();
        url.append("http://koliada.in.ua/confirm?u=");
        url.append(userType + UUID.randomUUID().toString().substring(0, 8));
        url.append("&p1=" + encodedPassword.substring(0, encodedPassword.length() / 2));
        url.append("&p1=" + encodedPassword.substring(encodedPassword.length() / 2));
        url.append("&t=" + token);
        String message = "Login: " + username + "\nNew password: " + newPassword + "\nConfirm new password change via link:";
        String result = message + " \r\n" + url.toString();

        sendMail(email, "Reset Password", result);
    }

    @Override
    public void sendVerificationMail(Entity entity, String token, String email, HttpServletRequest request) {
        VerificationToken verificationToken = null;
        String userType = null;
        if (entity instanceof Student) {
            verificationToken = new VerificationToken(token, (Student) entity);
            userType = "s";
        }
        if (entity instanceof Teacher) {
            verificationToken = new VerificationToken(token, (Teacher) entity);
            userType = "t";
        }
        verificationToken.setExpiryDate(new Date(System.currentTimeMillis() + VerificationToken.getExpirationInMilliseconds()));
        verificationTokenRepository.save(verificationToken);
        sendMail(email, "Activate Account", getVerificationMessage(request, userType, token));
    }

    private String getVerificationMessage(HttpServletRequest request, String userType, String token) {
        StringBuilder url = new StringBuilder();
        url.append("http://koliada.in.ua/activate?u=");
        url.append(userType);
        url.append("&o=DJA43kkjkrfnk");
        url.append("&t=" + token);
        url.append("&h=nvjdfnjyyt56");
        String message = "Activate your account via link\n";
        return message + url;
    }


}
