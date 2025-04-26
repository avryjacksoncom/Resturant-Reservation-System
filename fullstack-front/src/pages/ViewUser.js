import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import worm from "./A_Worm.webp"
import "./style.css";

export default function ViewUser() {
    // Grabing the users from the backend.
    const [users_state, setUsers] = useState([]);

    // For the phone lookup.
    const [phoneInput, setPhoneInput] = useState('');

    // For the email lookup.
    const [emailInput, setEmailInput] = useState('');

    // id is used for the backend.
    const { id } = useParams();

    // useEffect function same as in our EditReservation Page.
    // useEffect runs loadUser  only once when the component mounts.
    // This prevents multiple API calls and ensures user data is loaded correctly.
    useEffect(() => {
        loadUsers();
    }, []);

    // loadUser function gets all of our data using the primary key reservationId.
    // We put this function into the useEffect to allow only one run of the API.
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

    // This is the date that is clicked when you click on the react-calendar.
    const [unformatedDate, setDate] = useState(new Date());

    // This useState we transfrom the unformmated date to a date the user can
    // easiy understand.
    const [dateYearFormat,setDateYearFormat] = useState(new Date());
    
    // Really cool function I thought of here. - Avry
    // The userLoad here only gets the result from the onChange method.
    // We setUserLoad to the result that we get from the backend, however,
    // the onCange only grabs info from the certain date.

    // So using the userLoad in the useEffect it will pull up the buttons of
    // available tables while only selecting the dat that is picked from the 
    // calendar.
    const [userLoad,setUserLoad] = useState([]);

    // These are to hide the tables that are already taken on the particular day.
    const [hiddenButtons, setHiddenButtons] = useState([]);
    
    //   useEffect(() => {
    //   loadUsers();
    // }, []);

    // useEffect that combines the hidden feature and the onChange feature with userLoad.
    useEffect(() => {
        const hidden = filteredUsersOpen
          .map(user => user.tableId);
        setHiddenButtons(hidden);
      }, [userLoad]); // update when these change, which when the date changes.
    
    // Used to match up user Phone Number.
    const matchedUserPhone = users_state.find(user => user.phoneNumber === phoneInput);
    // Used to match up user email.
    const matchedUserEmail = users_state.find(user => user.email === emailInput);

    // This onChange is the one I talked about previously before. We both format the date
    // add the users that are only on the selected date, and output the formatted date
    // to the users for readabliliy.

    const onChange = async (newDate) => 
        {
            
            const result = await axios.get("http://localhost:8080/user");
            setDate(newDate)
            const formattedDate = format(newDate,'yyyy-MM-dd');
            setUserLoad(result.data);
            setDateYearFormat(formattedDate)
        };
        
      // To match the user date clicked on by the calendar.
      const filteredDataDateAvailable = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
      };

      // Fitlers by the dateYearFormat.
      // Used as a map in the frontend aspect below.
      const filteredUsersOpen = filteredDataDateAvailable(dateYearFormat)
      
      // Helps with filtering users by date. using the actual useState variable to
      // update componenent renders.
      const filteredUsers = users_state.filter(user => user.date === dateYearFormat);


      // The amount of tables available by the restuarant.
      // Theres a small error here. The array starts at 0 and not one, but our
      // Tables start at 1 in the front end to ensure readability.
      const buttons = Array.from({ length: 20 }, (_, index) => `Table ${index + 1}`);


      //This function allows for users to be deleted in the backend, and let's say
      //A customer wants to delete a reservation, An employee can go into the backend
      // push the delelte button and will also send the user an email confirmation that
      // their reservation is canceled.

      // This is all used with python flask. Which is a server that can deal with http calls.
      const deleteUser = async (id) => 
        
      {
        try 
        {
            await axios.post(`http://127.0.0.1:5000/signal2`, { signal2: "run-stuff", reservationId: id });
    
            console.log("Reservation ID sent");
        } catch (error) {
            console.error("Error sending ID", error);
        }
        
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    
      };


    // Start of our frontend application.
    return (
        <div className="container my-5">
          

          <h2 className="text-center mb-4">Employee View</h2>

            <div className ="container-flex">

              <div className = "center-look-up">
                  <h2>Look Up By Phone</h2>
                  <div className = "input">
                  <input
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                        />
                        
                    </div>
              <div className = "input">
              {matchedUserPhone ? (
                    <div key={matchedUserPhone.reservationId}>
                          <h2>Reservation Found</h2>
                          <p>Name: {matchedUserPhone.firstName}</p>
                          <p>Date: {matchedUserPhone.date}</p>
                          <p>Time: {matchedUserPhone.time}</p>
                          <p>Reservation ID: {matchedUserPhone.reservationId}</p>
                          <p>TableID: {matchedUserPhone.reservationId}</p>
                      </div>
                        ) : (
                          null
                         )}
                </div>
              <div/>

          </div>
          <div className = "container-flex">

                         <img src = {worm}></img>
          </div>
            <div className ="container-flex">
                <div className = "center-look-up">
                <h2>Look Up By Email</h2>
            <div className = "input">
            <input
      type = "text"
        className="form-control"
        placeholder="Enter your email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
 
            </div>
        <div className = "input">
        {matchedUserEmail ? (
          <div key={matchedUserEmail.reservationId}>
            <h2>Reservation Found</h2>
            <p>Name: {matchedUserEmail.firstName}</p>
            <p>Date: {matchedUserEmail.date}</p>
            <p>Time: {matchedUserEmail.time}</p>
            <p>Reservation ID: {matchedUserEmail.reservationId}</p>
            <p>TableID: {matchedUserEmail.reservationId}</p>
          </div>
        ) : (
            
            null
        )}
        </div>

                </div>
            </div>
    
      </div>
            
            <p>Selected date: {unformatedDate.toDateString()}</p>
           <div className = "calendar-container">
            <ReactCalendar onChange={onChange}/>
              {/* <p>Selected date: {unformatedDate}</p> */}
            
          </div>

        <div>
        {buttons.map((buttonText, index) => (
              
              !hiddenButtons.includes(index + 1) &&(
            <button 
            className = "button-table"
            type="button"
            key={index}
            id={`button-${index + 1}`}
            // onClick={() => onChangeButton(index + 1)}
            >{buttonText}</button>
            )))}
          
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
                            <th scope="col">TableID</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
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