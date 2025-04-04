import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import "./style.css";

export default function ViewUser() {
    const [users_state, setUsers] = useState([]);

    const { id } = useParams();

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

      
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Employee View</h2>
            <p>Selected date: {unformatedDate.toDateString()}</p>
           <div className = "calendar-container">
            <ReactCalendar onChange={onChange}/>
              {/* <p>Selected date: {unformatedDate}</p> */}
            
          </div>
            <h2 className="text-center mb-4">Selected Reservations On Days</h2>
            <p>Selected date: {unformatedDate.toDateString()}</p>
            <div className="table-responsive">
                <table className="table table-striped table-bordered shadow-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope ="col">ReservationID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Party Size</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsersOpen.map((user, index) => (
                            <tr key={user.reservationId}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.reservationId}</td>
                                <td>{user.firstName}</td>
                                <td>{user.time}</td>
                                <td>{user.date}</td>
                                <td>{user.partySize}</td>
                                <td>{user.phoneNumber}</td>
                                 <td>
                                    <Link
                                        className="btn btn-primary"
                                        to={`/viewuser/${user.reservation_id}`}
                                    >
                                        Delete
                                    </Link>
                                    
                                    <Link
                                        className="btn btn-primary"
                                        to={`/viewuser/${user.reservation_id}`}
                                    >
                                        Modify
                                    </Link>
                                </td> 
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="table-responsive">
            <h2 className="text-center mb-4">All Reservations</h2>
                <table className="table table-striped table-bordered shadow-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope ="col">ReservationID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Party Size</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users_state.map((user, index) => (
                            <tr key={user.reservationId}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.reservationId}</td>
                                <td>{user.firstName}</td>
                                <td>{user.time}</td>
                                <td>{user.date}</td>
                                <td>{user.partySize}</td>
                                <td>{user.phoneNumber}</td>
                                 <td>
                                    <Link
                                        className="btn btn-primary"
                                        to={`/viewuser/${user.reservation_id}`}
                                    >
                                        Delete
                                    </Link>
                                    
                                    <Link
                                        className="btn btn-primary"
                                        to={`/viewuser/${user.reservation_id}`}
                                    >
                                        Modify
                                    </Link>
                                </td> 
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}
