package media.acses.teacherswebsite.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import media.acses.teacherswebsite.model.Class;
import media.acses.teacherswebsite.model.User;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RegistrationRequestDto {

    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String phoneNumber;
    private Class group;

    public User fromDto() {
        User user = new User();
        user.setUsername(username);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setPassword(password);
        user.setPhoneNumber(phoneNumber);
        user.setGroup(group);

        return user;
    }

    public static RegistrationRequestDto toDto(User user) {
        RegistrationRequestDto userDto = new RegistrationRequestDto();
        userDto.setUsername(user.getUsername());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setGroup(user.getGroup());

        return userDto;
    }
}
