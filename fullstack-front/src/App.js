import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ReservationPage from './pages/ReservationPage';
import AddUser from './pages/AddUser';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CalendarPage from './pages/CalendarPage';
import ViewUser from './pages/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>

        <Route exact path="/"element={<AddUser/>}/>
        <Route exact path="/calendar"element={<CalendarPage/>}/>
        <Route exact path = "/view" element ={<ViewUser/>}/>
        
      </Routes>
      </Router>
     
    

    </div>
  );
}

export default App;
