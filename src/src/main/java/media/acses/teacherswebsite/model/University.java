package media.acses.teacherswebsite.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "universities")
@Data
public class University extends BaseEntity {

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "university", fetch = FetchType.LAZY)
    private Set<AccessKey> accessKeys;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        University that = (University) o;
        return Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name);
    }

    @Override
    public String toString() {
        return "University{" +
                "name='" + name + '\'' +
                "} " + super.toString();
    }
}
