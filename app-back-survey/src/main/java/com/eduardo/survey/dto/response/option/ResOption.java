package com.eduardo.survey.dto.response.option;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ResOption {
    private Long id;
    private String name;
    private Long votes;
}
