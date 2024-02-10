package com.eduardo.survey.mapper.vote;

import com.eduardo.survey.dto.request.vote.ReqVoteCreate;
import com.eduardo.survey.dto.response.vote.ResVote;
import com.eduardo.survey.entity.Option;
import com.eduardo.survey.entity.Vote;

public class MapVote {
    public static Vote mapDomain(ReqVoteCreate dtoVote, Option option, String ip) {
        return Vote.builder()
                .ip(ip)
                .username(dtoVote.getUsername())
                .option(option)
                .build();
    }

    public static ResVote mapDto(Vote domainVote) {
        return ResVote.builder()
                .id(domainVote.getId())
                .ip(domainVote.getIp())
                .username(domainVote.getUsername())
                .option(domainVote.getOption().getId())
                .build();
    }
}
