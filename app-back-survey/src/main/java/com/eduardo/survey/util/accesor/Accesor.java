package com.eduardo.survey.util.accesor;

import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Component;

@Component
public class Accesor implements IAccesor {
    @Override
    public <T> T getSessionAttribute(SimpMessageHeaderAccessor accessor, String attributeName, Class<T> attributeType) {
        return attributeType.cast(accessor.getSessionAttributes().get(attributeName));
    }
}
