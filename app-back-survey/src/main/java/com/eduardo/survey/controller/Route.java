package com.eduardo.survey.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

public class Route {
    @Controller
    public class RouteController {
        @RequestMapping(value = "/{path:[^\\.]*}")
        public String redirect() {
            return "forward:/";
        }
    }
}
