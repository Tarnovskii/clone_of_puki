package media.acses.teacherswebsite.service;

public interface SecurityService {

    String validatePasswordResetToken(String token);

}
