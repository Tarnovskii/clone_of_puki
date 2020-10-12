package media.acses.teacherswebsite.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @OneToMany(mappedBy = "group", fetch = FetchType.LAZY)
    private Set<Student> students;

    @JsonIgnore
    @ManyToMany(mappedBy = "teacherClasses", fetch = FetchType.LAZY)
    private Set<Teacher> teachers;

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
