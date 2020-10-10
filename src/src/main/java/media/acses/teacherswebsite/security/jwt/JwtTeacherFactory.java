package media.acses.teacherswebsite.security.jwt;

import media.acses.teacherswebsite.model.Role;
import media.acses.teacherswebsite.model.Teacher;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class JwtTeacherFactory {

    public JwtTeacherFactory() {
    }

    public static JwtTeacher create(Teacher teacher) {
        return new JwtTeacher(
                teacher.getId(),
                teacher.getUsername(),
                teacher.getFirstName(),
                teacher.getLastName(),
                teacher.getEmail(),
                teacher.getPassword(),
                mapToGrantedAuthorities(new HashSet<>(teacher.getTeacherRoles())),
                teacher.getPhoneNumber(),
                teacher.getUniversity()
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(Set<Role> userRoles) {
        return userRoles.stream()
                .map(role ->
                        new SimpleGrantedAuthority(role.getName())
                ).collect(Collectors.toList());
    }
}
