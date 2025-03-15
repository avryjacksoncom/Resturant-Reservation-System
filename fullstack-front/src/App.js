import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import RobertoOrderPage from './pages/RobertoOrderPage';
import RobertoMain from './pages/RobertoMain'
import ReservationPage from './pages/ReservationPage';
import Index from "./pages/Index";
import AddUser from './pages/AddUser';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>

      <Routes>

        <Route exact path="/"element={<RobertoMain/>}/>
        <Route exact path="/order" element={<RobertoOrderPage/>}/>
        <Route exact path="/reservations" element={<ReservationPage/>}/>
        <Route exact path = "/index" element= {<Index/>}/>
        
      </Routes>
      </Router>
     
    

    </div>
  );
}

export default App;
