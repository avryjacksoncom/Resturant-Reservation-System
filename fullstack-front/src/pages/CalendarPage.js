import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';


export default function CalendarPage() {
  const [unformatedDate, setDate] = useState(new Date());
  const [dateYearFormat,setDateYearFormat] = useState(new Date());
  const [toDateDataType,setToDateDataType] = useState(new Date());
  const [timeButton, setTimeButton] = useState('');
  const [userLoad,setUserLoad] = useState([]);

  const [users_state, setUsers] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  const [inputValue, setInputValue] = useState('');

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
        // console.log("THIS IS MY DATA  ",result);
        setDate(newDate)
        //SELECTED DATE

        // unformmatedDate is basically the dare we change for setDate
        // in other words when we do setDate, the newDate variable is the one thats onchanging
        //when we click the calemdar.
        //so these our differnt.
        //what i was trying to do is that these onchanges are the same. i should seperate tem.

        // IS THE FORMATTED DATE then we put that formatted date in the setDate
        // year function
        const formattedDate = format(newDate,'yyyy-MM-dd');
        // i just use setuserLoad to reload api data for the filetered data
        setUserLoad(result.data);

        // setdate year fomrmat what this does is it takes the formatteddate and just sets it in that variable
        // const [dateYearFormat,setDateYearFormat] = useState(new Date());
        
        // THIS IS JUS
        setDateYearFormat(formattedDate)
  
    };
    
    // const filterNotAvailableDate = (exactDateAvailable) => { return userLoad.filter(user => user.date !== exactDate)
    // };


    const filteredDataDateAvailable = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
    };
    const filteredUsersOpen = filteredDataDateAvailable(dateYearFormat)


    const filteredDataDate = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
    };
    const filteredUsers = filteredDataDate(dateYearFormat)

    console.log("TIHS IS MY DATE",dateYearFormat)

    // Adjusted user object based on backend entityx
    const [user, setUser] = useState({
      firstName: "",
      phoneNumber: "",
      date: "",
      time: "",
      partySize: "",
    });

    const { firstName, phoneNumber, date, time, partySize } = user;

    // const onDateChangeInput = (e) => {
    //   const { name, value } = e.target;
    
    //   if (name === 'date') {
    //     // Format the date before setting it in state
    //     const formattedDateChange = new Date(value); // Convert to a Date object
    //     setUser({ ...user, [name]: formattedDateChange }); // Update the date field
    //   }
    // };

    const onInputChange = (e) => {
      const { name, value } = e.target;
    
      if (name === 'date') {
        // Update the user object with the selected date
        setUser({ ...user, [name]: value });
      } else {
        // For other fields, update the user object normally
        setUser({ ...user, [name]: value });
      }
    };
//    const onInputChange = (e) => {
//   const { name, value } = e.target;

//   if (name === 'date') 
//     {
//     // If the field is date, call onDateChangeInput separately
//     onDateChangeInput(e);
//   } else 
//   {
//     // For other fields, update the user state normally
//     setUser({ ...user, [name]: value });
//   }
// };

// const onInputChange = (e) => {
      
      
//   setUser({ ...user, [e.target.name]: e.target.value });
// };


    const onClickButtonChange = (e) =>
    {
        setTimeButton(e)
    };

    console.log("THIS IS MY BUTTON")

    const onSubmit = async (e) => {
      e.preventDefault();

      // Validate input fields
      if (!firstName || !phoneNumber || !partySize) {
        alert("Please fill all fields!");
        return;
      }

      try 
      {
        // Send data to the backend using POST request
        await axios.post("http://localhost:8080/user", user); 
        // navigate("/"); // Navigate after submission
      } catch (error) 
      {
        console.error("There was an error adding the user!", error);
        alert("Error adding user. Please try again.");
      }
    };

    console.log("date data type   ", toDateDataType)

  return (
    <div className="container">
          <div className="row">
              <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Reservation</h2>
    
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="FirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={firstName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="PhoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      // type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Time" className="form-label">
                      Time
                    </label>
                    <input
                      type="time"
                      // type="text"
                      className="form-control"
                      name="time"
                      value={time}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Date" className="form-label">
                      Date Enter "yyyy-mm-dd"to confirm 
                    </label>
                    <p>Selected date: {unformatedDate.toDateString()}</p>
               
                    {/* <p>Selected date: {dateYearFormat}</p> */}
                    <input
                      // type="date"
                      type="text"
                      className="form-control"
                      name="date"
                      value={date}
                      placeholder="yyyy-mm-dd" 
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="PartySize" className="form-label">
                      Party Size
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter your party size"
                      name="partySize"
                      value={partySize}
                      onChange={onInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                  <Link className="btn btn-outline-danger mx-2" to="/">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
        <div className = "calendar-container">
          <ReactCalendar onChange={onChange}/>
          <p>Selected date: {unformatedDate.toDateString()}</p>
          
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
    <div>
          <h1>available</h1>
      {filteredUsersOpen.map(user => (
        <div key={user.reservationId}>
          {user.firstName}
           ({user.date} reservationDate)
           ({user.time} rservationTime)
           </div>
      ))}
    </div>
        </div>
        <div>
        <h2>Please Select your preferred slot</h2> 
      {/* Slot Buttons */}
          <div className="btns">
            <div className="grid-button">
              <button value="10:00" onClick={(e) => onClickButtonChange(e.target.value)}>10:00</button>
            </div>
            <div className="grid-button">
              <button value="10:30" onClick={(e) => onClickButtonChange(e.target.value)}>10:30</button>
            </div>
            <div className="grid-button">
              <button value="11:00" onClick={(e) => onClickButtonChange(e.target.value)}>11:00</button>
            </div>
            <div className="grid-button">
              <button value="11:30" onClick={(e) => onClickButtonChange(e.target.value)}>11:30</button>
            </div>
            <div className="grid-button">
              <button value="12:00" onClick={(e) => onClickButtonChange(e.target.value)}>12:00</button>
            </div>
            <div className="grid-button">
              <button value="12:30" onClick={(e) => onClickButtonChange(e.target.value)}>12:30</button>
            </div>
            <div className="grid-button">
              <button value="13:00" onClick={(e) => onClickButtonChange(e.target.value)}>13:00</button>
            </div>
            <div className="grid-button">
              <button value="13:30" onClick={(e) => onClickButtonChange(e.target.value)}>13:30</button>
            </div>
            <div className="grid-button">
              <button value="14:00" onClick={(e) => onClickButtonChange(e.target.value)}>14:00</button>
            </div>
            <div className="grid-button">
              <button value="14:30" onClick={(e) => onClickButtonChange(e.target.value)}>14:30</button>
            </div>
            <div className="grid-button">
              <button value="15:00" onClick={(e) => onClickButtonChange(e.target.value)}>15:00</button>
            </div>
            <div className="grid-button">
              <button value="15:30" onClick={(e) => onClickButtonChange(e.target.value)}>15:30</button>
            </div>
            <div className="grid-button">
              <button value="16:00" onClick={(e) => onClickButtonChange(e.target.value)}>16:00</button>
            </div>
            <div className="grid-button">
              <button value="16:30" onClick={(e) => onClickButtonChange(e.target.value)}>16:30</button>
            </div>
            <div className="grid-button">
              <button value="17:00" onClick={(e) => onClickButtonChange(e.target.value)}>17:00</button>
            </div>
            <div className="grid-button">
              <button value="17:30" onClick={(e) => onClickButtonChange(e.target.value)}>17:30</button>
            </div>
            <div className="grid-button">
              <button value="18:00" onClick={(e) => onClickButtonChange(e.target.value)}>18:00</button>
            </div>
            <div className="grid-button">
              <button value="18:30" onClick={(e) => onClickButtonChange(e.target.value)}>18:30</button>
            </div>
          </div>
          <div className="grid-button7">
            <button value="19:00" onClick={(e) => onClickButtonChange(e.target.value)}>19:00</button>
          </div>
          <br />
          <br />
      <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
          
        </div>

        <div>
  
        </div>
     
    </div>
  );
}
 