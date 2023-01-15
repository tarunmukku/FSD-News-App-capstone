package com.stackroute.newsmanagement.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
@Table(name="news")
public class News implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="author")
    private String author;

    @Column(name="description")
    private String description;

    @Column(name="content")
    private String content;

    @Column(name="url_to_image")
    private String urlToImage;

    @Column(name="url")
    private String url;

    @Column(name="publish_date")
    private LocalDate publishedAt;

}
