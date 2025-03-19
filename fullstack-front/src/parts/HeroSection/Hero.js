import React from 'react';
import './Hero.css';
import {Link} from "react-router-dom";
import Order from '../OrderSection/Order.js';
// import Reservation from './parts/ReservationSection/Reservation.js';

const Hero =() =>{
    return(
        <section id="homepage-hero">
            <video autoPlay muted loop id="hero-video">
                <source src="/Assets/Video/background-video.mp4" type="video/mp4"/>
                Your video does not support this video tag, LOL.
            </video>
            <div className="hero-content">
                <h2>Welcom to The WORM</h2>
                <p>Enjoy the food... or else</p>

                <Link to= "/OrderSection"><button className="order-button">Order Now!</button></Link>
               <Link to="/ReservationSection"> <button className="reservation-button">Reserve A Spot!</button></Link>

                {/* <Link to "/PageYouWant"><button className="reservation-button">Reservation</button></Link> */}


            </div>
        </section>
    )
}

export default Hero;