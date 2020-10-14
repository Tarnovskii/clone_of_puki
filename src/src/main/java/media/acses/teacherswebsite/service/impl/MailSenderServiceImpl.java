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
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

@Service
public class MailSenderServiceImpl implements MailSenderService {

    private final JavaMailSender mailSender;
    private final VerificationTokenRepository verificationTokenRepository;

    @Value("${spring.mail.username}")
    private String sender;

    @Autowired
    public MailSenderServiceImpl(JavaMailSender mailSender, VerificationTokenRepository verificationTokenRepository) {
        this.mailSender = mailSender;
        this.verificationTokenRepository = verificationTokenRepository;
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
        String url = request.getContextPath() + "/api/v1/user/activate?user=" + userType + "&token=" + token;
        String message = "Activate your account via link\n";
        return message + url;
    }


}
