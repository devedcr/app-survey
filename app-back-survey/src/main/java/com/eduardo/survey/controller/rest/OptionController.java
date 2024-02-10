package com.eduardo.survey.controller.rest;

import com.eduardo.survey.constant.ApiRoute;
import com.eduardo.survey.mapper.option.MapOption;
import com.eduardo.survey.service.IOptionService;
import com.eduardo.survey.service.ISurveyService;
import com.eduardo.survey.util.response.ApiResponse;
import com.eduardo.survey.util.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = ApiRoute.OPTION)
@CrossOrigin(origins = {"*"})
public class OptionController {
    @Autowired
    private IOptionService ioptionService;
    @Autowired
    private ISurveyService isurveyService;

    @GetMapping(path = "/list/{surveyId}")
    public ResponseEntity<Response> list(@PathVariable("surveyId") Long surveyId) {
        var survey = isurveyService.findById(surveyId);
        var options = ioptionService.list(survey);
        return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.succesResponse(
                MapOption.mapDto(options)
        ));
    }
}
