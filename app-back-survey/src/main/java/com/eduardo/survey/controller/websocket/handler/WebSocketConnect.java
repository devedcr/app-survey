package com.eduardo.survey.controller.websocket.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectEvent;

@Component
public class WebSocketConnect implements ApplicationListener<SessionConnectEvent> {
    public static Logger logger = LoggerFactory.getLogger(WebSocketConnect.class);

    @Override
    public void onApplicationEvent(SessionConnectEvent event) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(event.getMessage());
        logger.info("session connect: " + headerAccessor.getSessionId());
    }
}
