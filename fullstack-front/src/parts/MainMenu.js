import React from "react";

import { Link } from "react-router-dom"; 
import "./style.css";

export default function mainMenu() {
    return (
        <div>
        <section id="homepage-hero">
          <div classname="hero-content">
            <h2>Welcome to The Worm</h2>
            <p>Enjoy the food... or else we eat you :</p>
            <link to="/order" />
            <button classname="order-button">Order Now</button>
            <link to="/reservations" />
            <button classname="reservation-button">Reservations</button>
          </div>
        </section>
        <header>
          <h1>The Worm</h1>
          <nav>
            <a href="#Appetizers">Appetizers</a>
            <a href="#Entrées">Entrées</a>
            <a href="#Deserts">Deserts</a>
            <a href="#Drinks">Drinks</a>
            <link to="/order" />
            Order
            <link to="/reservations" />
            Reservations
          </nav>
        </header>
        <main>
          <section id="Appetizers" classname="menu-select">
            <h2>Appetizers</h2>
            <div classname="menu-grid">
              <div classname="menu-item">
                <h3>Grass Shavings</h3>
                <p classname="description">
                  Freshly cut lawn grass that puts a grassy spin on any restaurant
                  experience.
                </p>
                <span classname="price">$40</span>
              </div>
              <div classname="menu-item">
                <h3>Air</h3>
                <p classname="description">
                  All good things are free... but what if they aren't? Pay us for
                  the air you breathe!
                </p>
                <span classname="price">$1 per breath</span>
              </div>
            </div>
          </section>
        </main>
      </div>
      );
}