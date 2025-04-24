import { useState,useEffect } from "react";
import axios from "axios";
import { Form, Link, useNavigate,useParams } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import "./style.css";


//  SO WHAT WE SAID ABOUT HOW TO  FIC THE ISSUE IS TO LIKE EITHER
// FIND A WAY TO NOT USE AN INPUT BOX WITH THE ON SUBIMT BUTTON Form
// OR WE USE THE WORK AROUND METHOD AS A LAST ReservationPage. THE 
// DATE WILL JUST BE AUTO FILLED. FAKE FILLED when they hit SubmitEvent
// and then after the submint grab that date, and post to database.
export default function ReservationPage(){
  const [unformatedDate, setDate] = useState(new Date());
  const [dateYearFormat,setDateYearFormat] = useState(new Date());
  const [emailInput, setEmailInput] = useState('');
  
  const [userLoad,setUserLoad] = useState([]);
  const [users_state, setUsers] = useState([]);

  const [timeButton, setTimeButton] = useState('');

  // phone number filter
  const [phoneInput, setPhoneInput] = useState('');

  const {reservationId} = useParams()
    useEffect(() => {
    loadUsers();
  }, []);

    // Adjusted user object based on backend entityx
    const [user, setUser] = useState({
      firstName: "",
      phoneNumber: "",
      date: "",
      time: "",
      partySize: "",
      email:"",
      // email:"",
    });

    const { firstName, phoneNumber, date, time, partySize,email} = user;
    const onInputChange = (e) => 
    {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

   
    const onClickButtonChange = (timeString) =>
    {
        setTimeButton(timeString)
    };


    const onSubmit = async (e) => 
      {
        e.preventDefault();
        const matchedUserEmail = users_state.find(user => user.email === emailInput);
        // Validate input fields
        if (!firstName || !phoneNumber || !partySize || !date || !time) 
          {
          alert("Please fill all fields!");
          
          return;
        }
        // if (!matchedUserEmail)
        //   {
        //       console.log("email invalid")
        //       alert("Email not found in system!");
        //   }
        //   else
        //   {
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
    
              // navigate("/"); // Navigate after submission
            } catch (error) 
            {
              console.error("There was an error adding the user!", error);
              alert("Error adding user. Please try again.");
            }
          // }
       
    };
    // const matchedUserEmail = users_state.find(user => user.email === emailInput);



    const loadUsers = async () => 
    {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

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


    return(
      <form onSubmit={onSubmit}>
            <p>Selected date: {unformatedDate.toDateString()}</p>
           <div className = "calendar-container">
            <ReactCalendar onChange={onChange}/>
              {/* <p>Selected date: {unformatedDate}</p> */}
          
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

        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    )
}