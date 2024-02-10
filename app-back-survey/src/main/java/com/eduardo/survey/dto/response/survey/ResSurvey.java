package com.eduardo.survey.dto.response.survey;

import com.eduardo.survey.dto.response.option.ResOption;
import com.eduardo.survey.entity.Option;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Builder
@Data
public class ResSurvey {
    private Long id;
    private String name;
    private Date dateStart;
    private Date dateEnd;
    private Boolean finish;
}
