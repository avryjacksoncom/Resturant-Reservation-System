import logo from './logo.svg';
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{ Home } from './parts/HomeSection/Home.js';
import Footer from './parts/FooterSection/Footer.js';

// import Reservation from './parts/ReservationSection';
// import Order from './parts/OrderSect/Footer.js
// import Header from './parts/HeaderSection';
// import Hero from './parts/Herosection';


// import RobertoMain from './pages/RobertoMain'
// import ReservationPage from './pages/ReservationPage';
// import Index from "./pages/Index";
// import AddUser from './pages/AddUser';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
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