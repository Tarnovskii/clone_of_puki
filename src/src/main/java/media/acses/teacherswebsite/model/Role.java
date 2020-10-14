package media.acses.teacherswebsite.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "roles")
@Data
public class Role extends BaseEntity {

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "studentRoles", fetch = FetchType.LAZY)
    private Set<Student> students;

    @ManyToMany(mappedBy = "teacherRoles", fetch = FetchType.LAZY)
    private Set<Teacher> teachers;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Role role = (Role) o;
        return Objects.equals(name, role.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name);
    }
}
