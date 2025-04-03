import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';


export default function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [dateYearFormat,setDateYearFormat] = useState(new Date());

  const [userLoad,setUserLoad] = useState([]);
  const [users_state, setUsers] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  
    useEffect(() => {
    loadUsers();
    
  }, []);

    const loadUsers = async () => 
    {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

    const onChange = async (newDate) => {
        const result = await axios.get("http://localhost:8080/user");
        console.log("THIS IS MY DATA  ",result);
        setDate(newDate)
        const formattedDate = format(date,'yyyy-MM-dd');
        setUserLoad(result.data);
        setDateYearFormat(formattedDate)
  
    };

    const filteredDataDate = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
    };
    const filteredUsers = filteredDataDate(dateYearFormat)
    console.log("TIHS IS MY DATE",date)
  return (
    <div className="container">
        <div className = "calendar-container">
          <ReactCalendar onChange={onChange}/>
     
          <p>Selected date: {date.toDateString()}</p>
          <div>
          <h1>not available</h1>
      {filteredUsers.map(user => (
        <div key={user.reservationId}>
          {user.firstName}
           ({user.date} reservationDate)
           ({user.time} rservationTime)
           </div>
      ))}
    </div>
        </div>
        <div>
          <h1>available</h1>
          
        </div>

        <div>
          <tr>
                            <th scope="col">#</th>
                            <th scope ="col">ReservationID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Party Size</th>
                            <th scope="col">Phone Number</th>
                        </tr>
            <tbody>
                                  {userLoad.map((user, index) => (
                                      <tr key={user.reservation_id}>
                                          <th scope="row">{index + 1}</th>
                                          <td>{user.reservationId}</td>
                                          <td>{user.firstName}</td>
                                          <td>{user.time}</td>
                                          <td>{user.date}</td>
                                          <td>{user.partySize}</td>
                                          <td>{user.phoneNumber}</td>

                                          
                                      </tr>
                                  ))}
                              </tbody>
        </div>
     
    </div>
  );
}
 