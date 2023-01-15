package com.stackroute.newsmanagement.repository;

import com.stackroute.newsmanagement.model.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News,Long >{


}
