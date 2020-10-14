package media.acses.teacherswebsite.config;

import media.acses.teacherswebsite.hadnler.JwtAuthenticationFailureHandler;
import media.acses.teacherswebsite.hadnler.LogoutSuccessHandler;
import media.acses.teacherswebsite.security.jwt.JwtConfigurer;
import media.acses.teacherswebsite.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;
    private final JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler;
    private final LogoutSuccessHandler logoutSuccessHandler;

    private static final String ADMIN_ENDPOINT = "/api/v1/admin/**";
    private static final String AUTH_ENDPOINT = "/api/v1/auth/**";
    private static final String RESET_PASSWORD_ENDPOINT = "/api/v1/user/resetPassword";
    private static final String CONFIRM_PASSWORD_ENDPOINT = "/api/v1/user/confirmPassword";
    private static final String ACTIVATE_ENDPOINT ="/api/v1/user/activate";

    @Autowired
    public SecurityConfig(
            JwtTokenProvider jwtTokenProvider,
            JwtAuthenticationFailureHandler jwtAuthenticationFailureHandler,
            LogoutSuccessHandler logoutSuccessHandler
    ) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.jwtAuthenticationFailureHandler = jwtAuthenticationFailureHandler;
        this.logoutSuccessHandler = logoutSuccessHandler;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(
                        AUTH_ENDPOINT,
                        RESET_PASSWORD_ENDPOINT,
                        CONFIRM_PASSWORD_ENDPOINT,
                        ACTIVATE_ENDPOINT
                ).permitAll()
                .antMatchers(ADMIN_ENDPOINT).hasRole("ADMIN")
                .anyRequest().authenticated()
                .and()
                .apply(new JwtConfigurer(jwtTokenProvider, jwtAuthenticationFailureHandler));
    }
}
