package com.eduardo.survey.util.response;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

public class ApiResponse {
    public static Response succesResponse(Object data) {
        return Response.builder()
                .status(true)
                .data(data)
                .build();
    }

    public static Response succesResponse() {
        return Response.builder()
                .status(true)
                .build();
    }

    public static Response failResponse(List<Object> errors) {
        return Response.builder()
                .status(false)
                .errors(errors)
                .build();
    }

    public static Response failResponse(String message) {
        return Response.builder()
                .status(false)
                .errors(Arrays.asList(message))
                .build();
    }
}
