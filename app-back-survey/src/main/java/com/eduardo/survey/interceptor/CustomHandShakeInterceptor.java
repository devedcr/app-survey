package com.eduardo.survey.interceptor;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import java.util.Map;
import java.util.Objects;

public class CustomHandShakeInterceptor implements HandshakeInterceptor {
    public static String HEADER_FORWARDED = "X-Forwarded-For";
    public static String USER_IP = "userIp";

    private String getHeaderIp(ServletServerHttpRequest serverHttpRequest) {
        HttpServletRequest request = serverHttpRequest.getServletRequest();
        if (Objects.nonNull(request.getHeader(HEADER_FORWARDED)))
            return request.getHeader(HEADER_FORWARDED);
        return request.getRemoteAddr();
    }

    @Override
    public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
        if (request instanceof ServletServerHttpRequest)
            attributes.put(USER_IP, getHeaderIp((ServletServerHttpRequest) request));
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {
    }
}
