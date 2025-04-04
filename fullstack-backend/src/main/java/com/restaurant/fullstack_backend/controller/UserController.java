package com.restaurant.fullstack_backend.controller;

import com.restaurant.fullstack_backend.model.User;
import com.restaurant.fullstack_backend.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser)
    {
        return userRepository.save(newUser);
    }

    // @PostMapping("/userarr")
    // public ResponseEntity<?> addUsers(@RequestBody List<User> users)
    // {
    //     userRepository.saveAll(users);
    //     return ResponseEntity.ok("Users saved successfully");
    // }

    @GetMapping("/user")
    List<User> getAllUsers()
    {
        return userRepository.findAll();
    }
}