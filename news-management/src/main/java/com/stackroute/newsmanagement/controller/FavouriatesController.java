package com.stackroute.newsmanagement.controller;

import com.stackroute.newsmanagement.intercomm.UserClient;
import com.stackroute.newsmanagement.model.Transaction;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import com.stackroute.newsmanagement.service.FavouriatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class FavouriatesController {

    @Autowired
    private UserClient userClient;

    @Autowired
    private FavouriatesService favouriatesService;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Autowired
    private Environment env;

    @Value("${spring.application.name}")
    private String serviceId;


    @GetMapping("/news/port")
    public String getPort(){
        return "Service is working at port : " + env.getProperty("local.server.port");
    }

    @GetMapping("/news/instances")
    public ResponseEntity<?> getInstances() {
        return ResponseEntity.ok(discoveryClient.getInstances(serviceId));
    }

    @GetMapping("/news/user/{userId}")
    public ResponseEntity<?> findTransactionsOfUser(@PathVariable Long userId){
        return ResponseEntity.ok(favouriatesService.findTransactionsOfUser(userId));
    }

    @GetMapping("/news/all")
    public ResponseEntity<?> findAllNews(){
        return ResponseEntity.ok(favouriatesService.allNews());
    }

    @PostMapping("/news/tag")
    public ResponseEntity<?> saveTransaction(@RequestBody Transaction transaction) {
        transaction.setDateOfIssue(LocalDateTime.now());
        favouriatesService.saveNews(transaction.getNews());
        transaction.setNews(favouriatesService.findNewsById(transaction.getNews().getId()));
        return new ResponseEntity<>(favouriatesService.saveTransaction(transaction), HttpStatus.CREATED);
    }

    @GetMapping("/news/course/{courseId}")
    public ResponseEntity<?> findStudentsOfCourse(@PathVariable Long courseId){
        List<Transaction> transactions = favouriatesService.findTransactionsOfNews(courseId);
        if(CollectionUtils.isEmpty(transactions)){
            return ResponseEntity.notFound().build();
        }
        List<Long> userIdList = transactions.parallelStream().map(t -> t.getUserId()).collect(Collectors.toList());
        List<String> students = userClient.getUserNames(userIdList);
        return ResponseEntity.ok(students);
    }
}
