package com.eduardo.survey.service;

import com.eduardo.survey.dto.request.survey.ReqSurveyCreate;
import com.eduardo.survey.entity.Survey;
import com.eduardo.survey.exception.NotFoundException;
import com.eduardo.survey.mapper.survey.MapSurvey;
import com.eduardo.survey.repository.IOptionRepository;
import com.eduardo.survey.repository.ISurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveyServiceImp implements ISurveyService {
    @Autowired
    private ISurveyRepository isurveyRepository;
    @Autowired
    private IOptionRepository ioptionRepository;

    @Override
    public Survey create(ReqSurveyCreate surveyDto) {
        var survey = MapSurvey.mapDomain(surveyDto);
        isurveyRepository.save(survey);
        return survey;
    }

    @Override
    public List<Survey> list() {
        return isurveyRepository.findAll();
    }

    @Override
    public Survey findById(Long surveyId) {
        return isurveyRepository.findById(surveyId).orElseThrow(NotFoundException::new);
    }

    @Override
    public Short countIpSurvey(Long surveyId, String ip) {
        return isurveyRepository.countIpSurvey(surveyId, ip);
    }
}
