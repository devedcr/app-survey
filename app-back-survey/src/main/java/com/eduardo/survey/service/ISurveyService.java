package com.eduardo.survey.service;

import com.eduardo.survey.dto.request.survey.ReqSurveyCreate;
import com.eduardo.survey.entity.Survey;

import java.util.List;

public interface ISurveyService {
    Survey create(ReqSurveyCreate surveyDto);

    List<Survey> list();

    Survey findById(Long surveyId);

    Short countIpSurvey(Long surveyId, String ip);

}
