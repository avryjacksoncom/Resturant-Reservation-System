import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import "./ViewTable.css";

export default function ViewTables() {
    const [users_state, setUsers] = useState([]);
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const { id } = useParams();


     // Adjusted user object based on backend entityx
     const [user, setUser] = useState({
        firstName: "",
        phoneNumber: "",
        date: "",
        time: "",
        partySize: "",
        email:"",
        tableId:"",
        // email:"",
      });
  
      const { firstName, phoneNumber, date, time, partySize,email,tableId} = user;

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

    const [unformatedDate, setDate] = useState(new Date());
    const [dateYearFormat,setDateYearFormat] = useState(new Date());
    
    const [userLoad,setUserLoad] = useState([]);
  
    
      useEffect(() => {
      loadUsers();
    }, []);
    const matchedUserPhone = users_state.find(user => user.phoneNumber === phoneInput);
    const matchedUserEmail = users_state.find(user => user.email === emailInput);


    const onChange = async (newDate) => 
        {
            
            const result = await axios.get("http://localhost:8080/user");
            setDate(newDate)
            const formattedDate = format(newDate,'yyyy-MM-dd');
            setUserLoad(result.data);
            setDateYearFormat(formattedDate)
        };
        
      const filteredDataDateAvailable = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
      };
      const filteredUsersOpen = filteredDataDateAvailable(dateYearFormat)
  
      const filteredDataDate = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
      };
      const filteredUsers = filteredDataDate(dateYearFormat)

      
      const deleteUser = async (id) => 
        
    {
        try {
           
         
            await axios.post(`http://127.0.0.1:5000/signal2`, { signal2: "run-stuff", reservationId: id });
    
            console.log("Reservation ID sent");
        } catch (error) {
            console.error("Error sending ID", error);
        }

        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();


    
    };



    return (
        <div className = "container">
        <h2>Restaurant Table Reservation</h2>
        <h2 className="text-center mb-4">Employee View</h2>
            <p>Selected date: {unformatedDate.toDateString()}</p>
           <div className = "calendar-container">
            <ReactCalendar onChange={onChange}/>
              {/* <p>Selected date: {unformatedDate}</p> */}
            
          </div>
        <form>
          <label for="date">Select Date:</label>
          <input type="date" id="date" />
        </form>
      
        <div class="container">
          <div class="tables">
            <h3>Available Tables</h3>
            <div id="tableContainer"></div>
          </div>
          <div class="queue">
            <h3>Reservation Queue</h3>
            <ul id="reservationQueue"></ul>
          </div>
        </div>
      </div>
    );
}




