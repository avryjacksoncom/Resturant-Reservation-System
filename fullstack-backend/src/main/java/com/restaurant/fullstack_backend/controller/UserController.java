package com.restaurant.fullstack_backend.controller;

import com.restaurant.fullstack_backend.Exceptions.UserNotFoundException;
import com.restaurant.fullstack_backend.model.User;
import com.restaurant.fullstack_backend.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/user")
    List<User> getAllUsers()
    {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable Long id){
        return userRepository.findById(id).map(user -> {
        user.setReservationId(newUser.getReservationId());
        user.setFirstName(newUser.getFirstName());
        user.setPartySize(newUser.getPartySize());
        user.setPhoneNumber(newUser.getPhoneNumber());
        user.setDate(newUser.getDate());
        return userRepository.save(user);}).orElseThrow(() -> new UserNotFoundException(id));
}

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){

        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "Group #"+ id +" have been deleted.";
    }

}