package media.acses.teacherswebsite.repository;

import media.acses.teacherswebsite.model.AccessKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccessKeyRepository extends JpaRepository<AccessKey, Long> {

    AccessKey findByKey(String key);

}
