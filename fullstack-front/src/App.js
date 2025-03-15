import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import RobertoMain from './pages/RobertoMain'
import ReservationPage from './pages/ReservationPage';
import AddUser from './pages/AddUser';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>

        <Route exact path="/"element={<RobertoMain/>}/>
        
      </Routes>
      </Router>
     
    

    </div>
  );
}

export default App;
