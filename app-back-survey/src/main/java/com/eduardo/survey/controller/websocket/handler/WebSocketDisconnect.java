package com.eduardo.survey.controller.websocket.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

@Component
public class WebSocketDisconnect implements ApplicationListener<SessionDisconnectEvent> {
    public static Logger logger = LoggerFactory.getLogger(WebSocketDisconnect.class);

    @Override
    public void onApplicationEvent(SessionDisconnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        logger.info("session disconnect: " + headerAccessor.getSessionId());
    }
}
