package media.acses.teacherswebsite.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "classes")
@Data
public class Class extends BaseEntity {

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    private Set<Student> students;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Class aClass = (Class) o;
        return Objects.equals(name, aClass.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name);
    }
}
