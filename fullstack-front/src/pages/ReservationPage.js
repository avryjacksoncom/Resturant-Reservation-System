import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import "./style.css";

export default function ReservationPage(){
  const [unformatedDate, setDate] = useState(new Date());
  const [dateYearFormat,setDateYearFormat] = useState(new Date());
  
  const [userLoad,setUserLoad] = useState([]);
  const [users_state, setUsers] = useState([]);

  const [timeButton, setTimeButton] = useState('');
  
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
    });

    const { firstName, phoneNumber, date, time, partySize } = user;
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
        
        // Validate input fields
        if (!firstName || !phoneNumber || !partySize || !date || !time) 
          {
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
            <option>1</option>
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