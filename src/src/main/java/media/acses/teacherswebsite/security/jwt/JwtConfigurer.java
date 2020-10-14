package media.acses.teacherswebsite.security.jwt;

import media.acses.teacherswebsite.hadnler.JwtAuthenticationFailureHandler;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtConfigurer extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    private JwtTokenProvider jwtTokenProvider;

    private JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler;

    public JwtConfigurer(JwtTokenProvider jwtTokenProvider, JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.jwtAuthenticationFailureHandler = jwtAuthenticationFailureHandler;
    }

    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {
        JwtTokenFilter jwtTokenFilter = new JwtTokenFilter(jwtTokenProvider, jwtAuthenticationFailureHandler);
        httpSecurity.addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
