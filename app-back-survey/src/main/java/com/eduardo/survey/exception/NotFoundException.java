package com.eduardo.survey.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException() {
        super("Not Found Resource");
    }

    public NotFoundException(String message) {
        super(message);
    }
}
