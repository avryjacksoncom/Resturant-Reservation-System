//this is the header from my HTML mock up
import React from 'react';
import './Header.css';

const Header =() =>{
    return (
        <header className= "Header">
            <h1>
                The Worm
            </h1>
            <nav>
                <a href ="Appetizers">Appetizers</a>
                <a href ="Entrees">Entrees</a>
                <a href ="Desserts">Desserts</a>
                <a href ="Drinks">Drinks</a>
                <a href ="Order">Order Now</a>
                <a href ="Reservation">Reservations</a>
            </nav>
        </header>
    )
}



export default Header;