package com.eduardo.survey.repository;

import com.eduardo.survey.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
public interface IVoteRepository extends JpaRepository<Vote, Long> {
}
