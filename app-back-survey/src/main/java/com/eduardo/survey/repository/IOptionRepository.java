package com.eduardo.survey.repository;

import com.eduardo.survey.entity.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IOptionRepository extends JpaRepository<Option, Long> {
    @Query(value = "SELECT * FROM option WHERE option.survey_id = :surveyId", nativeQuery = true)
    List<Option> findOptionOfSurvey(@Param("surveyId") Long surveyId);
}
