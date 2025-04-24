package com.restaurant.fullstack_backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.fullstack_backend.model.User;


public interface UserOrderRepository extends JpaRepository<User,Long> {
    
}

