package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.PasswordResetToken;
import media.acses.teacherswebsite.model.VerificationToken;
import media.acses.teacherswebsite.repository.PasswordResetTokenRepository;
import media.acses.teacherswebsite.repository.VerificationTokenRepository;
import media.acses.teacherswebsite.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;

@Service
public class SecurityServiceImpl implements SecurityService {

    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final VerificationTokenRepository verificationTokenRepository;

    @Autowired
    public SecurityServiceImpl(
            PasswordResetTokenRepository passwordResetTokenRepository,
            VerificationTokenRepository verificationTokenRepository
    ) {
        this.passwordResetTokenRepository = passwordResetTokenRepository;
        this.verificationTokenRepository = verificationTokenRepository;
    }

    @Override
    public String validatePasswordResetToken(String token) {
        final PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token);

        return !isTokenFound(passwordResetToken) ? "invalid"
                : isTokenExpired(passwordResetToken) ? "expired"
                : null;
    }

    @Override
    public String validateVerificationToken(String token) {
        final VerificationToken verificationToken = verificationTokenRepository.findByToken(token);

        return !isTokenFound(verificationToken) ? "invalid"
                : isTokenExpired(verificationToken) ? "expired"
                : null;
    }

    private boolean isTokenFound(PasswordResetToken passwordResetToken) {
        return passwordResetToken != null;
    }

    private boolean isTokenExpired(PasswordResetToken passwordResetToken) {
        final Calendar calendar = Calendar.getInstance();
        return passwordResetToken.getExpiryDate().before(calendar.getTime());
    }

    private boolean isTokenFound(VerificationToken verificationToken) {
        return verificationToken != null;
    }

    private boolean isTokenExpired(VerificationToken verificationToken) {
        final Calendar calendar = Calendar.getInstance();
        return verificationToken.getExpiryDate().before(calendar.getTime());
    }
}
