package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.Class;
import media.acses.teacherswebsite.repository.ClassRepository;
import media.acses.teacherswebsite.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassServiceImpl implements ClassService {

    private final ClassRepository classRepository;

    @Autowired
    public ClassServiceImpl(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    @Override
    public Class findByName(String name) {
        Class result = classRepository.findByName(name);
        return result;
    }
}
