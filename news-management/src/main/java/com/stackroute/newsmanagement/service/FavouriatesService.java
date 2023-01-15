package com.stackroute.newsmanagement.service;

import com.stackroute.newsmanagement.model.News;
import com.stackroute.newsmanagement.model.Transaction;

import java.util.List;

public interface FavouriatesService {


        List<News> allNews();

        News findNewsById(Long newsId);

        List<Transaction> findTransactionsOfUser(Long userId);

        List<Transaction> findTransactionsOfNews(Long newsId);

        Transaction saveTransaction(Transaction transaction);

        News saveNews(News news);
}
