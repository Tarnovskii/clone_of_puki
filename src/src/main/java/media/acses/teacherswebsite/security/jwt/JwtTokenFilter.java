package media.acses.teacherswebsite.security.jwt;

import media.acses.teacherswebsite.exception.JwtAuthenticationException;
import media.acses.teacherswebsite.hadnler.JwtAuthenticationFailureHandler;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtTokenFilter extends GenericFilterBean {

    private JwtTokenProvider jwtTokenProvider;

    private JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler;

    public JwtTokenFilter(JwtTokenProvider jwtTokenProvider, JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.jwtAuthenticationFailureHandler = jwtAuthenticationFailureHandler;
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain)
            throws IOException, ServletException {

        String token = jwtTokenProvider.resolveToken((HttpServletRequest) req);
        try {
            String remoteAddr = getClientIp((HttpServletRequest) req);
            if (token != null && jwtTokenProvider.validateToken(token, remoteAddr)) {
                Authentication auth = jwtTokenProvider.getAuthentication(token);
                if (auth != null) {
                    SecurityContextHolder.getContext().setAuthentication(auth);
                }
            }
        } catch (JwtAuthenticationException e) {
            jwtAuthenticationFailureHandler.onAuthenticationFailure((HttpServletRequest) req, (HttpServletResponse) res, e);
        }
        filterChain.doFilter(req, res);
    }

    private String getClientIp(HttpServletRequest request) {
        String remoteAddr = "";
        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || "".equals(remoteAddr)) {
                remoteAddr = request.getRemoteAddr();
            }
        }
        return remoteAddr;
    }

}
