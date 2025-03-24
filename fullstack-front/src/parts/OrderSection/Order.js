import React, {useEffect} from 'react';
import './Order.css';
// import { Link } from "react-router-dom";
// import Home from '../HomeSection/Home.js';
// import Footer from '../FooterSection/Footer.js';
import Sound from '../../Assets/Sounds/knockingDoor.mp3'

//same issue with Home with the double dot thing. In this case since this is an entirely different file
//the double dot thing is even stranger. Anyways to fix this type of issue you gotta '../../Assets/blah/blah.joe'; 

const Order = () => {
    useEffect(() => {
        const timer =setTimeout(() => {
            const audio = new Audio(Sound);
            audio.play().catch(err => console.log("Playback Error: ",err));
    }, 60000);
    return () => clearTimeout(timer);
    },[]);
   return (
        <div className="white-box">
            <header>
                <h1>The Worm</h1>
                <p class="tagline">digging its way to your hearts </p>
            </header>

            <section className="coming-soon">
                <h2>Coming Soon</h2>
                
                <form id="signup-updates">
                    <label for="email">Stay up to date for everyone we dig up</label>
                    <input type="email" name="email" placeholder="Email Here!" required/>
                    <button type="submit-button">Notify me</button>
                </form>
            </section>
        </div>

    )
}

export default Order;
//this is something new but unfortunately when it comes to pages idk why this is correct
//so point of the line is that Home is the only one wihtout an export 