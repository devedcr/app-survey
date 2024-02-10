package com.eduardo.survey.util.response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class Response {
    private Boolean status;
    private Object data;
    private List<Object> errors;
}
