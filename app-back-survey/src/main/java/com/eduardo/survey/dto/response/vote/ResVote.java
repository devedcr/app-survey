package com.eduardo.survey.dto.response.vote;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ResVote {
    private Long id;
    private String ip;
    private String username;
    private Long option;
}
