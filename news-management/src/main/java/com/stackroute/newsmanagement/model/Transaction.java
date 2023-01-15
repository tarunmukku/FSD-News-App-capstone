package com.stackroute.newsmanagement.model;


import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.io.Serializable;
@Data
@Entity
@Table(name ="transaction")
public class Transaction implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="news_id",referencedColumnName = "id")
    private News news;

    @Column(name="user_id")
    private Long userId;

    @Column(name="date_of_issue")
    private LocalDateTime dateOfIssue;

}
