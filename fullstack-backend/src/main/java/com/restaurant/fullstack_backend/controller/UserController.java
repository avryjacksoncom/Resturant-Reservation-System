package com.restaurant.fullstack_backend.controller;

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

import com.restaurant.fullstack_backend.Exceptions.UserNotFoundException;
import com.restaurant.fullstack_backend.model.User;
import com.restaurant.fullstack_backend.repository.UserRepository;

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
<<<<<<< Updated upstream
        user.setEmail(newUser.getEmail());
        user.setTableId(newUser.getTableId());
=======
        // user.setEmail(newUser.getEmail());
>>>>>>> Stashed changes
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