package media.acses.teacherswebsite.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import media.acses.teacherswebsite.model.Class;
import media.acses.teacherswebsite.model.*;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class RegistrationRequestDto {

    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private String groupName;
    private Class group;
    private AccessKey accessKey;
    private University university;

    public Entity fromDto() {
        Entity entity;
        if (group == null) {
            Teacher teacher = new Teacher();
            teacher.setUsername(username);
            teacher.setFirstName(firstName);
            teacher.setLastName(lastName);
            teacher.setEmail(email);
            teacher.setPassword(password);
            teacher.setPhoneNumber(phoneNumber);
            teacher.setUniversity(university);
            entity = teacher;
        } else {
            Student student = new Student();
            student.setUsername(username);
            student.setFirstName(firstName);
            student.setLastName(lastName);
            student.setEmail(email);
            student.setPassword(password);
            student.setPhoneNumber(phoneNumber);
            student.setGroup(group);
            entity = student;
        }

        return entity;
    }
}
