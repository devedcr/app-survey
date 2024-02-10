package com.eduardo.survey.mapper.option;

import com.eduardo.survey.dto.request.option.ReqOptionCreate;
import com.eduardo.survey.dto.response.option.ResOption;
import com.eduardo.survey.entity.Option;
import com.eduardo.survey.entity.Survey;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class MapOption {
    public static Option mapDomain(ReqOptionCreate optionDto, Survey surveyDomain) {
        return Option.builder()
                .name(optionDto.getName())
                .survey(surveyDomain)
                .build();
    }

    public static ResOption mapDto(Option optionDomain) {
        long countVotes = Objects.isNull(optionDomain.getVotes()) ? 0 : optionDomain.getVotes().size();
        return ResOption.builder()
                .id(optionDomain.getId())
                .name(optionDomain.getName())
                .votes(countVotes)
                .build();
    }

    public static List<ResOption> mapDto(List<Option> optionsDomain) {
        return optionsDomain.stream()
                .map(MapOption::mapDto)
                .collect(Collectors.toList());
    }
}
