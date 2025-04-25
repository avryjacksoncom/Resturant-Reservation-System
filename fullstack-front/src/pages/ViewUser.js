import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import "./style.css";

export default function ViewUser() {
    const [users_state, setUsers] = useState([]);
    const [phoneInput, setPhoneInput] = useState('');
    const [emailInput, setEmailInput] = useState('');

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
        <div className="container my-5">
            
            <h2 className="text-center mb-4">Employee View</h2>
            <p>Selected date: {unformatedDate.toDateString()}</p>
           <div className = "calendar-container">
            <ReactCalendar onChange={onChange}/>
              {/* <p>Selected date: {unformatedDate}</p> */}
            
          </div>
          <div>
      <input
        className="form-control"
        placeholder="Enter your phone number"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
      />

      <div>
        <h2>Look Up By Phone</h2>
        {matchedUserPhone ? (
          <div key={matchedUserPhone.reservationId}>
            <h2>Reservation Found</h2>
            <p>Name: {matchedUserPhone.firstName}</p>
            <p>Date: {matchedUserPhone.date}</p>
            <p>Time: {matchedUserPhone.time}</p>
            <p>Reservation ID: {matchedUserPhone.reservationId}</p>
<<<<<<< HEAD
=======
            <p>TableID: {matchedUserPhone.reservationId}</p>
>>>>>>> avry-3
          </div>
        ) : (
          null
        )}
      </div>
      <input
      type = "text"
        className="form-control"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <div>
      <h2>Look Up By Email</h2>
        {matchedUserEmail ? (
          <div key={matchedUserEmail.reservationId}>
            <h2>Reservation Found</h2>
            <p>Name: {matchedUserEmail.firstName}</p>
            <p>Date: {matchedUserEmail.date}</p>
            <p>Time: {matchedUserEmail.time}</p>
            <p>Reservation ID: {matchedUserEmail.reservationId}</p>
<<<<<<< HEAD
=======
            <p>TableID: {matchedUserEmail.reservationId}</p>
>>>>>>> avry-3
          </div>
        ) : (
            null
        )}
      </div>

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
                            <th scope="col">Email</th>
<<<<<<< HEAD
=======
                            <th scope="col">TableID</th>
>>>>>>> avry-3
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
                                <td>{user.email}</td>
                                <td>{user.tableId}</td>
                                 <td>
                                 <button className="btn btn-outline-danger mx-2"
                                        onClick={() => deleteUser(user.reservationId)}>
                                        Delete
                                    </button>
                                    
                                    <Link className="btn btn-outline-primary mx-2"
                                        to={`/editreservation/${user.reservationId}`}>
                                        Edit
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
                            <th scope="col">Email</th>
                            <th scope="col">TableID</th>
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
                                <td>{user.email}</td>
                                <td>{user.tableId}</td>
                                 <td>
                                 <button className="btn btn-outline-danger mx-2"
                                        onClick={() => deleteUser(user.reservationId)}>
                                        Delete
                                    </button>
                                    
                                    <Link className="btn btn-outline-primary mx-2"
                                        to={`/editreservation/${user.reservationId}`}> Edit </Link>
                                </td> 
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}