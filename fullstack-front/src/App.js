// import logo from './logo.svg';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {Home} from "./parts/HomeSection/Home";
// import Index from "./pages/Index";     This is acting like the Home Page 

import Footer from './parts/FootSection/Footer.js';
// The footer is backed into the Index page here so its whatever

import Header from "./parts/HeaderSection/Header";
// The Header is also backed into the Index

import Order from './parts/OrderSection/Order';
//import RobertoOrderPage from './pages/RobertoOrderPage';  Mine has more content so I win :)

// import RobertoMain from './pages/RobertoMain'  This is a bit redundant so its outta here

import ReservationPage from './pages/ReservationPage';
import AddUser from './pages/AddUser';
import ReservationList from "./pages/ReservationList";
import EditReservation from "./pages/EditReservation";
import ViewUser from './pages/ViewUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ReservationLookup from './pages/ReservationLookup';


function App() {
  return (
    <div className="App">
      <Router>

        <Header/>

      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/reservationlist" element={<ReservationList />} />
          <Route path="/editreservation" element={<EditReservation />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/view" element={<ViewUser />} />
          <Route path="/look-up" element={<ReservationLookup />} />

          {/* Fallback route for undefined paths */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
  
      </Routes>

      <Footer/>

      </Router>
     
    

    </div>
  );
}

export default App;
