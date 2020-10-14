package media.acses.teacherswebsite.service;

import media.acses.teacherswebsite.model.Entity;

import javax.servlet.http.HttpServletRequest;

public interface MailSenderService {

    void sendMail(String sendTo, String subject, String message);

    void sendResetPasswordMessage(String token, String email, String username, String userType, HttpServletRequest request);

    void sendVerificationMail(Entity entity, String token, String email, HttpServletRequest request);

}
