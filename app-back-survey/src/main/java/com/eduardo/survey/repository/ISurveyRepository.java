package com.eduardo.survey.repository;

import com.eduardo.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISurveyRepository extends JpaRepository<Survey, Long> {
    final String QueryCountIpSurvey = "" +
            "select count(v.id)  \n" +
            "from survey s,option o, vote v \n" +
            "where s.id = :surveyId and s.id = o.survey_id and o.id = v.option_id and v.ip = :ip ";
    @Query(value = QueryCountIpSurvey, nativeQuery = true)
    Short countIpSurvey(@Param("surveyId") Long surveyId, @Param("ip") String ip);
}
