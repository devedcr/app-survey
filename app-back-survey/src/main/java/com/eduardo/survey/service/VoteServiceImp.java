package com.eduardo.survey.service;

import com.eduardo.survey.entity.Vote;
import com.eduardo.survey.repository.IVoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VoteServiceImp implements IVoteService {
    @Autowired
    private IVoteRepository ivoteRepository;

    @Override
    public void create(Vote vote) {
        ivoteRepository.save(vote);
    }
}
