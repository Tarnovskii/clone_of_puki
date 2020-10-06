package media.acses.teacherswebsite.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "groups")
@Data
public class Group extends BaseEntity {

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "groups", fetch = FetchType.LAZY)
    private Set<User> users;
}
