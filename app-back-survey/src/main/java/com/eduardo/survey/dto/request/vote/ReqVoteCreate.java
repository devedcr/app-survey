package com.eduardo.survey.dto.request.vote;

import lombok.Data;

@Data
public class ReqVoteCreate {
    private String username;
    private Long option;
}
