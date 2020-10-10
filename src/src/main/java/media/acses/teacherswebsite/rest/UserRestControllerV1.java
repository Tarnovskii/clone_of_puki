package media.acses.teacherswebsite.rest;

import media.acses.teacherswebsite.service.MailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/user/")
public class UserRestControllerV1 {

//    private final UserService userService;
//
//    private final MailSenderService mailSenderService;
//
//    @Autowired
//    public UserRestControllerV1(UserService userService, MailSenderService mailSenderService) {
//        this.userService = userService;
//        this.mailSenderService = mailSenderService;
//    }
//
//    @PostMapping("resetPassword")
//    public ResponseEntity resetPassword(@RequestParam("email") String email) {
//        User user = userService.findByEmail(email);
//        if (user == null) {
//            throw new UsernameNotFoundException("User with email: " + email + " not found");
//        }
//
//        String token = UUID.randomUUID().toString();
//        userService.createPasswordResetToken(user, token);
//
//
//
//
//
//
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
