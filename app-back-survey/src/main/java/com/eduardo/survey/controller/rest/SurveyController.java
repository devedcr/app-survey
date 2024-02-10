package com.eduardo.survey.controller.rest;

import com.eduardo.survey.constant.ApiRoute;
import com.eduardo.survey.dto.request.survey.ReqSurveyCreate;
import com.eduardo.survey.mapper.survey.MapSurvey;
import com.eduardo.survey.service.IOptionService;
import com.eduardo.survey.util.response.ApiResponse;
import com.eduardo.survey.util.response.Response;
import com.eduardo.survey.service.ISurveyService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = ApiRoute.SURVEY)
@CrossOrigin(origins = "*")
public class SurveyController {
    public static Logger logger = LoggerFactory.getLogger(SurveyController.class);
    @Autowired
    private ISurveyService isurveyService;
    @Autowired
    private IOptionService ioptionService;

    @GetMapping(path = "/list")
    public ResponseEntity<Response> list() {
        var surveys = isurveyService.list();
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.succesResponse(MapSurvey.mapDto(surveys)));
    }

    @PostMapping(path = "/create")
    public ResponseEntity<Response> create(@RequestBody ReqSurveyCreate body) {
        var survey = isurveyService.create(body);
        ioptionService.createBatch(body.getOptions(), survey);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.succesResponse(MapSurvey.mapDto(survey)));
    }

    @GetMapping(path = "/{surveyId}")
    public ResponseEntity<Response> findById(@PathVariable("surveyId") Long surveyId) {
        var survey = isurveyService.findById(surveyId);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.succesResponse(MapSurvey.mapDto(survey)));
    }
}
