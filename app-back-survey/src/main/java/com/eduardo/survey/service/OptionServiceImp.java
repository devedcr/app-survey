package com.eduardo.survey.service;

import com.eduardo.survey.dto.request.option.ReqOptionCreate;
import com.eduardo.survey.entity.Option;
import com.eduardo.survey.entity.Survey;
import com.eduardo.survey.exception.NotFoundException;
import com.eduardo.survey.mapper.option.MapOption;
import com.eduardo.survey.repository.IOptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OptionServiceImp implements IOptionService {
    @Autowired
    private IOptionRepository ioptionRepository;

    public Option create(ReqOptionCreate optionDto, Survey survey) {
        var option = MapOption.mapDomain(optionDto, survey);
        ioptionRepository.save(option);
        return option;
    }

    @Override
    public List<Option> createBatch(List<ReqOptionCreate> optionsDto, Survey survey) {
        return optionsDto.stream()
                .map((optionDto) -> this.create(optionDto, survey))
                .collect(Collectors.toList());
    }

    @Override
    public List<Option> list(Survey survey) {
        return ioptionRepository.findOptionOfSurvey(survey.getId());
    }

    @Override
    public Option findById(Long optionId) {
        return ioptionRepository.findById(optionId).orElseThrow(NotFoundException::new);
    }
}
