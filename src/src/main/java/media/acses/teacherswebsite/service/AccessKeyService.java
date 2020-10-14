package media.acses.teacherswebsite.service;

import media.acses.teacherswebsite.model.AccessKey;

public interface AccessKeyService {

    AccessKey findByKey(String key);

}
