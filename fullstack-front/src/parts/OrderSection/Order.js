import React, {useEffect} from 'react';
import './Order.css';
import { Link } from "react-router-dom";
import Home from '../HomeSection/Home.js';
import Footer from '../FooterSection/Footer.js';
import Sound from '../../Assets/Sounds/knockingDoor.mp3'

//same issue with Home with the double dot thing. In this case since this is an entirely different file
//the double dot thing is even stranger. Anyways to fix this type of issue you gotta '../../Assets/blah/blah.joe'; 

const Order = () => {
    useEffect(() => {
        const timer =setTimeout(() => {
            const audio = new Audio(Sound);
            audio.play();
    }, 180000);
    return () => clearTimeout(timer);
    },[]);
   return (
        <div className="box">
            <header>
                <h1>The Worm</h1>
                <p className="tagline">Online odering feature coming soon!</p>
            </header>
            <section id="content">
                <h2>BEING LAZY WOULD SOON BE EVEN BETTER WITH THE WORM!!!</h2>
                <p>We are in the middle of capturing a bed of worms to bring the AMAZING grub we make directly to your home.
                    We know where you live...
                </p>
                <form id="singup-form">
                    <label htmlFor="email">Sign up for Updates!</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email here!"
                        required=""
                    />
                    <button type="submit">Lemme Know What Y'all Dig UP!!!</button>
                </form>

            </section>
        </div>
    )
}

export default Order;
//this is something new but unfortunately when it comes to pages idk why this is correct
//so point of the line is that Home is the only one wihtout an export 