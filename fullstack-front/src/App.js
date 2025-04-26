import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {Home} from "./parts/HomeSection/Home";
// import Index from "./pages/Index";     This is acting like the Home Page 

import Footer from './parts/FootSection/Footer.js';
// The footer is backed into the Index page here so its whatever

import Header from "./parts/HeaderSection/Header";
// The Header is also backed into the Index

import Order from './parts/OrderSection/Order';
// The Order is also backed into the Index

import ReservationPage from './parts/res/ReservationPage.js';
import EditReservation from "./pages/EditReservation";
import ViewUser from './pages/ViewUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/OrderSection" element={<Order />} />
          <Route path="/ReservationPage" element={<ReservationPage />} />
          <Route path="/view" element={<ViewUser />} />
          <Route exact path = "editreservation/:id" element={<EditReservation/>}/>
          {/* this is for a deadend page. 404 error*/}
          <Route path="*" element={<h1>404 - Page Not Found! Lol, try again</h1>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
