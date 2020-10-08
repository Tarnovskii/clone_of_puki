package media.acses.teacherswebsite.rest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainRest {

    @GetMapping("/")
    public ResponseEntity main() {
        return new ResponseEntity(HttpStatus.OK);
    }
}
