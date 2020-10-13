package media.acses.teacherswebsite.security.jwt;

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
            if (token != null && jwtTokenProvider.validateToken(token)) {
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

}
