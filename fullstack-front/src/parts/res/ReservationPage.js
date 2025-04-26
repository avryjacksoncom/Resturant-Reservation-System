import { useState,useEffect } from "react";
import axios from "axios";
import { Form, Link, useNavigate,useParams } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
// import "./style.css";  
import "./thingy.css";


//  SO WHAT WE SAID ABOUT HOW TO  FIx THE ISSUE IS TO LIKE EITHER
// FIND A WAY TO NOT USE AN INPUT BOX WITH THE ON SUBIMT BUTTON Form
// OR WE USE THE WORK AROUND METHOD AS A LAST ReservationPage. THE 
// DATE WILL JUST BE AUTO FILLED. FAKE FILLED when they hit SubmitEvent
// and then after the submint grab that date, and post to database.

// Fast forward to now i didn't add this maybe I will later whenever I
// keep developing this.




// I explained a lot on how these functions work on
// Reservation Page and the View page. But ill add
// the comments here anyway.

export default function ReservationPage(){
  // Allows us to get the date from the user with the react calendar.
  const [unformatedDate, setDate] = useState(new Date());

  // We format the date to make it more readable for the user.
  const [dateYearFormat,setDateYearFormat] = useState(new Date());

  // Allows us to navigate when a user submits a reservation.
  const navigate = useNavigate(); 

  // Used to set the backend users and to be used to be rendered.
  const [users_state, setUsers] = useState([]);

  // Used to set the backend users and to be used to be rendered.
  // This is used with the button function.
  const [userLoad,setUserLoad] = useState([]);

  // Used for the table componeont. To show users if tables
  // are available or not.
  const [hiddenButtons, setHiddenButtons] = useState([]);

  // id for the backend if we use it.
  const {reservationId} = useParams()

     // useEffect function same as in our EditReservation Page.
    // useEffect runs loadUser  only once when the component mounts.
    // This prevents multiple API calls and ensures user data is loaded correctly.
    useEffect(() => {
    loadUsers();
  }, []);

    // Really cool function I thought of here. - Avry
    // The userLoad here only gets the result from the onChange method.
    // We setUserLoad to the result that we get from the backend, however,
    // the onCange only grabs info from the certain date.

    // So using the userLoad in the useEffect it will pull up the buttons of
    // available tables while only selecting the dat that is picked from the 
    // calendar.

    // useEffect that combines the hidden feature and the onChange feature with userLoad.
  useEffect(() => {
    const hidden = filteredUsersOpen
      .map(user => user.tableId); // tableId matches button index
    setHiddenButtons(hidden);
  }, [userLoad]); // update when these change, which when the user clicks a date and it changes.

    // Adjusted user object based on backend entity
    const [user, setUser] = useState({
      firstName: "",
      phoneNumber: "",
      date: "",
      time: "",
      partySize: "",
      email:"",
      tableId:"",
    });

    // Used for backend to and frontend. To iniralize the user with all the details.
    const { firstName, phoneNumber, date, time, partySize,email,tableId} = user;

    // When user puts all their information and hits the submit button.
    // The data is put in the backend.
    const onInputChange = (e) => 
    {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    // The onsubmit allows the user to submit all their info into the backend
    // as a reservation. This submit button is at the end and checks input fields
    // if anything is missing.
    const onSubmit = async (e) => 
      {
        e.preventDefault();
    
      
        // Validate input fields
        if (!firstName || !phoneNumber || !partySize || !date || !time || !tableId) 
          {
          alert("Please fill all fields!");
          
          return;
        }
            try 
            {
              // Send data to the backend using POST request
              await axios.post("http://localhost:8080/user", user); 
              try {
                const response = await fetch("http://127.0.0.1:5000/signal", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ signal: "run-stuff" })
                });
              
                const data = await response.json();
                console.log(data);  // Handle the response from Flask
                } catch (error) {
                console.error("Error sending signal:", error);
                }
    
              navigate("/"); // Navigate after submission
            } catch (error) 
            {
              console.error("There was an error adding the user!", error);
              alert("Error adding user. Please try again.");
            }
       
    };

    // loadUser function gets all of our data using the primary key reservationId.
    // We put this function into the useEffect to allow only one run of the API.
    const loadUsers = async () => 
    {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

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

    // Used to filter by date with the users.
    const filteredDataDateAvailable = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
    };
    const filteredUsersOpen = filteredDataDateAvailable(dateYearFormat)

    const filteredDataDate = (exactDate) => { return userLoad.filter(user => user.date === exactDate)
    };
    const filteredUsers = filteredDataDate(dateYearFormat)
    
    // The amount of tables available by the restuarant.
    // Theres a small error here. The array starts at 0 and not one, but our
    // Tables start at 1 in the front end to ensure readability.

    const buttons = Array.from({ length: 20 }, (_, index) => `Table ${index + 1}`);

    return(
      <form onSubmit={onSubmit}>
            <p>Selected date: {unformatedDate.toDateString()}</p>
           <div className = "calendar-container">
            <ReactCalendar onChange={onChange}/>
              {/* <p>Selected date: {unformatedDate}</p> */}
          
          </div>
            <div className="button-grid-container">
              
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
          
          <div class="form-group">
          <label for="exampleFormControlInput1">Table Number</label>
          <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Table Number"
                      name="tableId"
                      value={tableId}
                      onChange={onInputChange}
                    />
        </div>

               <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your first name"
                      name="firstName"
                      value={firstName}
                      onChange={onInputChange}
                    />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Phone Number</label>
          <input
                      // type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={onInputChange}
            />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Time</label>
          <input
                      type="time"
                      // type="text"
                      className="form-control"
                      name="time"
                      value={time}
                      placeholder={time}
                      onChange={onInputChange}
            />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Date</label>
          <p>Selected date: {unformatedDate.toDateString()}</p>
                    <input
                      type="date"
                      // type="text"
                      className="form-control"
                      name="date"
                      value={date}
                      placeholder="yyyy-mm-dd" 
                      onChange={onInputChange}
                    />
        </div>
        <div className="form-group">
          <label for="partySize">Party Size</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter party size"
              name="partySize"
              value={partySize}
              onChange={onInputChange}
            />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
            <input
              // type = "text"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onInputChange}
            />
        </div>

        <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
      </form>
    )
}