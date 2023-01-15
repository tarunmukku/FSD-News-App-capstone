package com.stackroute.usermanagementservice.service;

import com.stackroute.usermanagementservice.model.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {
    User save(User user);

    User findByUsername(String username);

    List<String> findUsers(List<Long> idList);
}
