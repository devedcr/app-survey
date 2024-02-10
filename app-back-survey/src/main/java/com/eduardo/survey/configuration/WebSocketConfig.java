package com.eduardo.survey.configuration;

import com.eduardo.survey.interceptor.CustomHandShakeInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.server.HandshakeInterceptor;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/votes");
        registry.setApplicationDestinationPrefixes("/survey");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/appSurvey").addInterceptors(handshakeInterceptor()).setAllowedOrigins("http://localhost:5173/");
    }

    @Bean
    public HandshakeInterceptor handshakeInterceptor() {
        return new CustomHandShakeInterceptor();
    }
}
