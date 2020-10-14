package media.acses.teacherswebsite.service.impl;

import media.acses.teacherswebsite.model.University;
import media.acses.teacherswebsite.repository.UniversityRepository;
import media.acses.teacherswebsite.service.UniversityService;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UniversityServiceImpl implements UniversityService, BeanFactoryAware {

    public static BeanFactory CONTEXT;

    private final UniversityRepository universityRepository;

    @Autowired
    public UniversityServiceImpl(UniversityRepository universityRepository) {
        this.universityRepository = universityRepository;
    }

    @Override
    public List<University> getAll() {
        List<University> result = universityRepository.findAll();
        return result;
    }

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        CONTEXT = beanFactory;
    }

    public static Object getBean(String s) {
        return CONTEXT.getBean(s);
    }
}
