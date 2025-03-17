import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ReservationPage from './parts/ReservationPage';
import AddUser from './pages/AddUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <mainMenu /> */}

      <Router>

      <Routes>

        <Route exact path="/"element={<MainMenu/>}/>
        
      </Routes>
      </Router>
     
    

    </div>
  );
}

export default App;
