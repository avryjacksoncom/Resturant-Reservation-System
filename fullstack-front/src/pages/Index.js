import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import bgVideo from "./background-video.mp4";
import bgVideo2 from "./background-video2.mp4";


export default function Index() {
  return (
    <div>
      <section id="homepage-hero">
        <div className = "video-container">
        <video autoPlay muted loop id="hero-video"  src= {bgVideo}>
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="hero-content">
          <h2>Welcome to The Worm</h2>
          <p>Enjoy the food... or else we eat you :</p>
          <Link to="/order">
            <button className="order-button">Order Now</button>
          </Link>
          <Link to="/reservations">
            <button className="reservation-button">Reservations</button>
          </Link>
        </div>
      </section>

      <header>
        <h1>The Worm</h1>
        <nav>
          <a href="#Appetizers">Appetizers</a>
          <a href="#Entrées">Entrées</a>
          <a href="#Deserts">Deserts</a>
          <a href="#Drinks">Drinks</a>
          <Link to="/order">Order</Link>
          <Link to="/reservations">Reservations</Link>
        </nav>
      </header>

      <main>
        <section id="Appetizers" className="menu-select">
          <h2>Appetizers</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Grass Shavings</h3>
              <p className="description">Freshly cut lawn grass that would put a grassy spin on any restaurant experience</p>
              <span className="price">$40</span>
            </div>
            <div className="menu-item">
              <h3>Air</h3>
              <p className="description">All good things are free... well, what if they aren't?</p>
              <span className="price">$1 each breath</span>
            </div>
          </div>
        </section>

        <section id="Entrées" className="menu-select">
          <h2>Entrées</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Cigarettes</h3>
              <p className="description">Ever wanted to lose weight but hate doing anything?</p>
              <span className="price">$Dont Sue Us &lt;3</span>
            </div>
            <div className="menu-item">
              <h3>Worm</h3>
              <p className="description">We have a wide selection of human worms to choose from.</p>
              <span className="price">$5</span>
            </div>
          </div>
        </section>

        <section id="Deserts" className="menu-select">
          <h2>Deserts</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Ice Cream</h3>
              <p className="description">You should definitely try it.</p>
              <span className="price">$5</span>
            </div>
          </div>
        </section>

        <section id="Drinks" className="menu-select">
          <h2>Drinks</h2>
          <div className="menu-grid">
            <div className="menu-item">
              <h3>Water</h3>
              <p className="description">Also found outside in this puddle I found!</p>
              <span className="price">Free with any meal</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Created by: <Link to="/nothing">The Worm</Link> © 2025</p>
        <p><Link to="/reservationlist">login</Link></p>
      </footer>
    </div>
  );
}