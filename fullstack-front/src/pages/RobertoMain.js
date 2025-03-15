import React from "react";

import { Link } from "react-router-dom"; 
import "./style.css";

export default function RobertoMain() {
    return (
        <div>
            <section id="homepage-hero">
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
                            <p className="description">
                                Freshly cut lawn grass that puts a grassy spin on any restaurant experience.
                            </p>
                            <span className="price">$40</span>
                        </div>
                        <div className="menu-item">
                            <h3>Air</h3>
                            <p className="description">
                                All good things are free... but what if they aren't? Pay us for the air you breathe!
                            </p>
                            <span className="price">$1 per breath</span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}



