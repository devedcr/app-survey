package com.eduardo.survey.mapper.survey;

import com.eduardo.survey.dto.request.survey.ReqSurveyCreate;
import com.eduardo.survey.dto.response.survey.ResSurvey;
import com.eduardo.survey.entity.Survey;

import java.util.List;
import java.util.stream.Collectors;

public class MapSurvey {
    public static Survey mapDomain(ReqSurveyCreate dto) {
        return Survey.builder()
                .name(dto.getName())
                .dateStart(dto.getDateStart())
                .dateEnd(dto.getDateEnd())
                .finish(false)
                .build();
    }

    public static List<ResSurvey> mapDto(List<Survey> surveys) {
        return surveys.stream()
                .map(MapSurvey::mapDto)
                .collect(Collectors.toList());
    }

    public static ResSurvey mapDto(Survey survey) {
        return ResSurvey.builder()
                .id(survey.getId())
                .name(survey.getName())
                .dateStart(survey.getDateStart())
                .dateEnd(survey.getDateEnd())
                .finish(survey.getFinish())
                .build();
    }
}
