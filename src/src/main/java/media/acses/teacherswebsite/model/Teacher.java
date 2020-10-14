package media.acses.teacherswebsite.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@javax.persistence.Entity
@Table(name = "teachers")
@Data
public class Teacher extends BaseEntity implements Entity {

    @Column(name = "username")
    private String username;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "university_id", nullable = false)
    private University university;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "teachers_classes",
            joinColumns = {@JoinColumn(name = "teacher_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "class_id", referencedColumnName = "id")})
    private Set<Class> teacherClasses;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "teacher_roles",
            joinColumns = {@JoinColumn(name = "teacher_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")})
    private Set<Role> teacherRoles;

    @Column(name = "enabled")
    private boolean enabled;

}
