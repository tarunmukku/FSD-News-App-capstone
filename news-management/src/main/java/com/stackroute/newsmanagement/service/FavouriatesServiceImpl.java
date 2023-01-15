package com.stackroute.newsmanagement.service;

import com.stackroute.newsmanagement.model.News;
import com.stackroute.newsmanagement.model.Transaction;
import com.stackroute.newsmanagement.repository.NewsRepository;
import com.stackroute.newsmanagement.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavouriatesServiceImpl implements FavouriatesService {

    @Autowired
    private NewsRepository newsRepository;

    @Autowired
    private TransactionRepository transactionRepository;
    @Override
    public List<News> allNews() {
        return newsRepository.findAll();
    }

    @Override
    public News findNewsById(Long newsId) {
        return newsRepository.findById(newsId).orElse(null);
    }

    @Override
    public List<Transaction> findTransactionsOfUser(Long userId) {
        return transactionRepository.findAllByUserId(userId);
    }

    @Override
    public List<Transaction> findTransactionsOfNews(Long newsId) {
        return transactionRepository.findAllByNewsId(newsId);
    }

    @Override
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public News saveNews(News news) {
        return newsRepository.save(news);
    }
}
