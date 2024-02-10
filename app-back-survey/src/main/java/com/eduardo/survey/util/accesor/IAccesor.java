package com.eduardo.survey.util.accesor;

import org.springframework.messaging.simp.SimpMessageHeaderAccessor;

public interface IAccesor {
    <T> T getSessionAttribute(SimpMessageHeaderAccessor accessor, String attributeName, Class<T> attributeType);
}
