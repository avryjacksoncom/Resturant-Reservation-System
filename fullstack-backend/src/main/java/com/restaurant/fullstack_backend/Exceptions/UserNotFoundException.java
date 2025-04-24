package com.restaurant.fullstack_backend.Exceptions;

public class UserNotFoundException extends RuntimeException{

    public UserNotFoundException(long id){
        super("User with ID " + id + " could not be found.");
    }

}
