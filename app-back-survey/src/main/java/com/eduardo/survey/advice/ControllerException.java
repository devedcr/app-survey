package com.eduardo.survey.advice;

import com.eduardo.survey.exception.NotFoundException;
import com.eduardo.survey.util.response.ApiResponse;
import com.eduardo.survey.util.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ControllerException {
    @ExceptionHandler(value = {NotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public Response NotFoundException(NotFoundException ex) {
        return ApiResponse.failResponse(ex.getMessage());
    }
}
