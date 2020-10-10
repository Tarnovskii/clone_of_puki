package media.acses.teacherswebsite.service;

public interface MailSenderService {

    void sendMail(String sendTo, String subject, String message);

}
