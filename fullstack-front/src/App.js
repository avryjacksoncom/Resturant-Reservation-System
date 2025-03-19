import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{ Home } from './parts/HomeSection/Home.js';
import Footer from './parts/FooterSection/Footer.js';
import Header from './parts/HeaderSection/Header.js';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
      <Router>

      <Routes>
        <Route exact path = "/" element= {<Home/>}/>
        {/* <Route exact path = "/order" element = {<OrderSection/>}/>
        <Route exact path = "/reservation" element = {<ReservationSection/>}/> */}

        {/* <Route exact path="/page"element={<RobertoMain/>}/>
        <Route exact path="/order" element={<RobertoOrderPage/>}/>
        <Route exact path="/reservations" element={<ReservationPage/>}/> */}
        {/* <Route exact path = "/add-user" element = {<AddUser/>}/> */}

      </Routes>
      <Footer />
      
      </Router>
     
    

    </div>
  );
}

export default App;