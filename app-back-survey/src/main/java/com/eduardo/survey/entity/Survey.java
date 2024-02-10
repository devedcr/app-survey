package com.eduardo.survey.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "survey")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column(name = "date_start")
    private Date dateStart;
    @Column(name = "date_end")
    private Date dateEnd;
    @Column
    private Boolean finish;
    @OneToMany(mappedBy = "survey")
    private List<Option> option;
}
