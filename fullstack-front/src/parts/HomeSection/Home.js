import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import Footer from '../FooterSection/Footer.js';
import Header from '../HeaderSection/Header.js';
// import Hero from '../HeroSection/Hero.js';
import Video from '../../Assets/Videos/background-video.mp4';




export const Home = () => {
  return (
    <div>
      {/* <main> */}
        
        <section id="homepage-hero">
          <video autoPlay muted loop id="hero-video" src={Video}>
            {/* <source src='Assets/Videos/background-video.mp4' type="video/mp4" /> */}
            Your video does not support this video tag, LOL.
          </video>
          <div className="hero-content">
            <h2>Welcom to The WORM</h2>
            <p>Enjoy the food... or else</p>

            <Link to="/Order"><button className="order-button">Order Now!</button></Link>
            <Link to="/Reservation"> <button className="reservation-button">Reserve A Spot!</button></Link>


          </div>
        </section>
        <section id="Appetizers" className="menu-select">
          <h2>Appetizers</h2>
          <div className="menu-grid">
            {/* Menu Items for Appetizers */}
            <div className="menu-item">
              <h3>Grass Shavings</h3>
              <p className="description">
                Freshly cut lawn grass that would put a grassy spin to any
                restaurant experience
              </p>
              <span className="price">$40</span>
            </div>
            <div className="menu-item">
              <h3>Air</h3>
              <p className="description">
                All good things are free... well, what if they aren't and this is
                why we would love for you to pay us for the air you breathe
              </p>
              <span className="price">$1 each breath</span>
            </div>
            <div className="menu-item">
              <h3>Eye Candy</h3>
              <p className="description">
                This is a new innovative food that we have created with ancient
                techniques of marketing. Food is for the body, mind, and soul, why
                not also feed different aspects of our existence. Such as our
                bottom-line
              </p>
              <span className="price">$all</span>
            </div>
          </div>
        </section>
        <section id="Entrées" className="menu-select">
          <h2>Entrées</h2>
          <div className="menu-grid">
            {/* Menu Items for Entrées */}
            <div className="menu-item">
              <h3>Cigarettes</h3>
              <p className="description">
                Ever wanted to lose weight but hate having to do anything? Well,
                luckily enough we have unearthed an old art of smoking. With the use
                of these beautifully crafted Cigarettes, you would easily lose
                weight in a single breath!
              </p>
              <span className="price">$Dont Sue Us &lt;3</span>
            </div>
            <div className="menu-item">
              <h3>Worm</h3>
              <p className="description">
                We have a wide selection of human worms to choose from. We have the
                young, the old, the thick, the thin, the tall, the short, the smart,
                the dumb, the rich, the poor, the happy, the sad, the angry, the
                calm, the alive, and the one you'll eat
              </p>
              <span className="price">$5</span>
            </div>
            <div className="menu-item">
              <h3>Sandwich</h3>
              <p className="description">
                A dish typically consisting variously of meat, cheese, sauces, and
                vegetables used as a filling between slices of bread, or placed atop
                a slice of bread
              </p>
              <span className="price">$12</span>
            </div>
          </div>
        </section>
        <section id="Desserts" className="menu-select">
          <h2>Desserts</h2>
          <div className="menu-grid">
            {/* Menu Items for Deserts */}
            <div className="menu-item">
              <h3>Ice Cream</h3>
              <p className="description">
                Idk where it comes from but it's yummy. You should definitely try it
              </p>
              <span className="price">$5</span>
            </div>
            <div className="menu-item">
              <h3>Chocolate Frog</h3>
              <p className="description">
                A frog but dipped in chocolate. I don't think you should eat this.
              </p>
              <span className="price">$8</span>
            </div>
            <div className="menu-item">
              <h3>You</h3>
              <p className="description">
                You're a delight, so why not be on the menu
              </p>
              <span className="price">$10</span>
            </div>
          </div>
        </section>
        <section id="Drinks" className="menu-select">
          <h2>Drinks</h2>
          <div className="menu-grid">
            {/* Menu Items for Drinks */}
            <div className="menu-item">
              <h3>Water</h3>
              <p className="description">
                Water is a transparent, tasteless, odorless, and nearly colorless
                chemical substance, which is the main constituent of Earth's
                hydrosphere and the fluids of all known living organisms. Also found
                outside in this puddle I found!
              </p>
              <span className="price">Free with any meal</span>
            </div>
            <div className="menu-item">
              <h3>Pilk Milk</h3>
              <p className="description">
                Either pickled milk, Pepsi and milk, or... uhm *cough*...
              </p>
              <span className="price">$3</span>
            </div>
            <div className="menu-item">
              <h3>Apple Juice</h3>
              <p className="description">
                We confused the corn oil, gasoline for our kitchen, and apple juice.
                Try at your own discretion
              </p>
              <span className="price">$13</span>
            </div>
          </div>
        </section>
      {/* </main> */}
    </div>

  );
}

// holy crap it works now
//this is a bit of a sanity check to make sure this part of the app still