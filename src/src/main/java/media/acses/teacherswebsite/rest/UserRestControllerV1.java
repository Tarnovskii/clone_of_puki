package media.acses.teacherswebsite.rest;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import media.acses.teacherswebsite.security.jwt.JwtAuthenticationException;
import media.acses.teacherswebsite.security.jwt.JwtTeacher;
import media.acses.teacherswebsite.security.jwt.JwtTokenProvider;
import media.acses.teacherswebsite.service.MailSenderService;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
import java.util.*;

@RestController
@RequestMapping("/api/v1/user/")
public class UserRestControllerV1 {

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public UserRestControllerV1(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

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

    @GetMapping("isLogin")
    public ResponseEntity isLogin(HttpServletRequest request) {
        Claims claims = jwtTokenProvider.getBody(jwtTokenProvider.resolveToken(request));

        Map<String, Object> response = new HashMap<>();
        response.put("roles", claims.get("roles"));

        return ResponseEntity.ok(response);
    }
}
