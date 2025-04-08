package com.restaurant.fullstack_backend.model;
import com.restaurant.fullstack_backend.model.User;
// import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

// try this later
// @ManyToOne
// @JoinColumns({
//      @JoinColumn(name="id_brand", referencedColumnName="id1"),
//      @JoinColumn(name="id_brand2", referencedColumnName="id2")
// })
// private Brand brand;

@Entity
public class UserOrders {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private Long orderId;

    @ManyToOne
    @JoinColumn(name = "reservationId", nullable = false)
    private User user;

    private int userId;
    private double total;
    private int numberOfItems;
    private int quantity;
    private String itemName;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
    public int getNumberOfItems() {
        return numberOfItems;
    }
    public void setNumberOfItems(int numberOfItems) {
        this.numberOfItems = numberOfItems;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public String getItemName() {
        return itemName;
    }
    public void setItemName(String itemName) {
        this.itemName = itemName;
    }





}
