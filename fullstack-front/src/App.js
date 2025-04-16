import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import RobertoOrderPage from './pages/RobertoOrderPage';
import ReservationPage from './pages/ReservationPage';
import Index from "./pages/Index";
import EditReservation from "./pages/EditReservation";
import ViewUser from './pages/ViewUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ReservationLookup from './pages/ReservationLookup';




function App() {
  return (
    <div className="App">
      <Router>

      <Routes>

        {/* <Route exact path="/order" element={<RobertoOrderPage/>}/> */}
        <Route exact path="/reservations" element={<ReservationPage/>}/>
        <Route exact path = "/" element= {<Index/>}/>
        <Route exact path ="/view" element= {<ViewUser/>}/>
        <Route exact path ="/look-up" element={<ReservationLookup/>}/>
        <Route exact path = "editreservation/:id" element={<EditReservation/>}/>
        
      </Routes>
      </Router>
     
    

    </div>
  );
}

export default App;
