package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.AccessKey;
import media.acses.teacherswebsite.repository.AccessKeyRepository;
import media.acses.teacherswebsite.service.AccessKeyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccessKeyServiceImpl implements AccessKeyService {

    private final AccessKeyRepository accessKeyRepository;

    @Autowired
    public AccessKeyServiceImpl(AccessKeyRepository accessKeyRepository) {
        this.accessKeyRepository = accessKeyRepository;
    }

    @Override
    public AccessKey findByKey(String key) {
        AccessKey result = accessKeyRepository.findByKey(key);
        return result;
    }
}
