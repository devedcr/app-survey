package com.eduardo.survey.service;

import com.eduardo.survey.dto.request.option.ReqOptionCreate;
import com.eduardo.survey.entity.Option;
import com.eduardo.survey.entity.Survey;

import java.util.List;

public interface IOptionService {
    Option create(ReqOptionCreate optionDto, Survey survey);

    List<Option> createBatch(List<ReqOptionCreate> optionsDto, Survey survey);

    List<Option> list(Survey survey);

    Option findById(Long optionId);
}
