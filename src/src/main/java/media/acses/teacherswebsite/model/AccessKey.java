package media.acses.teacherswebsite.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "access_keys")
@Data
public class AccessKey extends BaseEntity {

    @Column(name = "key")
    private String key;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "university_id", nullable = false)
    private University university;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        AccessKey accessKey = (AccessKey) o;
        return Objects.equals(key, accessKey.key);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), key);
    }
}
