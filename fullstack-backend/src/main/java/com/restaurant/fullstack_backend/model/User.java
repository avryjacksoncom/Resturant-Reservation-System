package com.restaurant.fullstack_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long reservationId; // primarykey

    private String firstName, lastName, phoneNumber, customerEmail, reservationDate;
    private int guestAmount, tableNumber;

    // Getters and setters

    public Long getReservationId() {
        return reservationId;
    }

    public void setReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setlastName(String lastName)
    {
        this.lastName = lastName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setguestAmount(int guestAmount)
    {
        this.guestAmount = guestAmount;
    }

    public int getguestAmount()
    {
        return guestAmount;
    }

    public void setcustomerEmail(String customerEmail)
    {
        this.customerEmail = customerEmail;
    }

    public String getcustomerEmail()
    {
        return customerEmail;
    }

    public void settableNumber(int tableNumber)
    {
        this.tableNumber = tableNumber;
    }

    public int gettableNumber()
    {
        return tableNumber;
    }

    public void setreservationDate(String reservationDate)
    {
        this.reservationDate = reservationDate;
    }

    public String getreservationDate()
    {
        return reservationDate;
    }
}

