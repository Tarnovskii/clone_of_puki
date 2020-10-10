package media.acses.teacherswebsite.security.jwt;

import media.acses.teacherswebsite.model.Role;
import media.acses.teacherswebsite.model.Student;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class JwtStudentFactory {

    public JwtStudentFactory() {
    }

    public static JwtStudent create(Student student) {
        return new JwtStudent(
                student.getId(),
                student.getUsername(),
                student.getFirstName(),
                student.getLastName(),
                student.getEmail(),
                student.getPassword(),
                mapToGrantedAuthorities(new HashSet<>(student.getStudentRoles())),
                student.getPhoneNumber(),
                student.getGroup()
        );
    }

    private static List<GrantedAuthority> mapToGrantedAuthorities(Set<Role> userRoles) {
        return userRoles.stream()
                .map(role ->
                        new SimpleGrantedAuthority(role.getName())
                ).collect(Collectors.toList());
    }
}
