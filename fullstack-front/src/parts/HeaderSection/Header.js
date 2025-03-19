//this is the header from my HTML mock up
import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header =() =>{
    return (
        <header className= "Header">
            <h1>
                The Worm
            </h1>
            <nav>
                <a href ="#Appetizers">Appetizers</a>
                <a href ="#Entrées">Entrées</a>
                <a href ="#Desserts">Desserts</a>
                <a href ="#Drinks">Drinks</a>
                
                <Link to ="/OrderSection">OrderPage</Link>
                <Link to ="/ReservationSection">Reservation</Link>
            </nav>
        </header>
    )
}



export default Header;