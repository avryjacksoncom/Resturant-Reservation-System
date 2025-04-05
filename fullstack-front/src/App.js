// import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{ Home } from './parts/HomeSection/Home.js';
import Footer from './parts/FooterSection/Footer.js';
import Header from './parts/HeaderSection/Header.js';
// import Hero from './parts/HeroSection/Hero.js';
import Order from './parts/OrderSection/Order';
import Reservation from './parts/ReservationSection/Reservation';
// import ReservationSection from './parts/ReservationSection/Reservation.js';



import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Header/>
     

          <Routes>
          
            <Route exact path = "/" element= {<Home />}/>
            <Route path ="/OrderSection" element={<Order />}/>
            <Route path ="/ReservationSection" element={<Reservation />}/>
           
          
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;