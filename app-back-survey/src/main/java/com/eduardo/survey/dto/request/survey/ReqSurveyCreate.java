package com.eduardo.survey.dto.request.survey;


import com.eduardo.survey.dto.request.option.ReqOptionCreate;
import com.eduardo.survey.dto.response.option.ResOption;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class ReqSurveyCreate {
    private String name;
    private Date dateStart;
    private Date dateEnd;
    private List<ReqOptionCreate> options;
}
