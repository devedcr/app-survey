package com.eduardo.survey.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vote")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String ip;
    @Column
    private String username;
    @ManyToOne
    @JoinColumn(name = "option_id", referencedColumnName = "id")
    private Option option;
}
