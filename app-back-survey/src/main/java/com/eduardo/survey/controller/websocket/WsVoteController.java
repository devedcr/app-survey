package com.eduardo.survey.controller.websocket;

import com.eduardo.survey.dto.request.vote.ReqVoteCreate;
import com.eduardo.survey.mapper.vote.MapVote;
import com.eduardo.survey.service.IOptionService;
import com.eduardo.survey.service.ISurveyService;
import com.eduardo.survey.service.IVoteService;
import com.eduardo.survey.util.accesor.IAccesor;
import com.eduardo.survey.util.response.ApiResponse;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class WsVoteController {
    public static Logger logger = LoggerFactory.getLogger(WsVoteController.class);
    private final IVoteService ivoteService;
    private final IOptionService ioptionService;
    private final ISurveyService isurveyService;
    private final IAccesor iaccesor;
    private final SimpMessagingTemplate messagingTemplate;

    public void handlerRepeatedVote(Long surveyId, String clientIp) {
        if (isurveyService.countIpSurvey(surveyId, clientIp) > 0)
            messagingTemplate.convertAndSend("/votes/" + surveyId, ApiResponse.succesResponse("Usted ya voto!!!"));
    }

    @MessageMapping("/vote/create")
    public void create(@Payload ReqVoteCreate voteDto, SimpMessageHeaderAccessor accessor) {
        var option = ioptionService.findById(voteDto.getOption());
        var clientIp = iaccesor.getSessionAttribute(accessor, "userIp", String.class);
        if (isurveyService.countIpSurvey(option.getSurvey().getId(), clientIp) > 0) {
            messagingTemplate.convertAndSend("/votes/" + option.getSurvey().getId(), ApiResponse.failResponse("Usted ya voto!!!"));
            return;
        }
        var vote = MapVote.mapDomain(voteDto, option, clientIp);
        ivoteService.create(vote);
        messagingTemplate.convertAndSend("/votes/" + option.getSurvey().getId(), ApiResponse.succesResponse(MapVote.mapDto(vote)));
    }
}
