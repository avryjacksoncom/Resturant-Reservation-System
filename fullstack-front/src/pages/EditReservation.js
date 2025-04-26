import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



export default function EditReservation() {
  let navigate = useNavigate();
  const {id} = useParams();

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

  // Backend intializing for our table user.
  const { firstName, phoneNumber, date, time, partySize,email,tableId } = user;

  // Initializing the user input from the frontend to the backend.
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // useEffect ensures that loadUser runs only once when the component mounts.
  // This prevents multiple unnecessary API calls and ensures user data is loaded correctly.
  useEffect(()=>{
    loadUser()
  }, []);

  // This is our onSubimt compnent. Grabs the data from the frontend, checks if fields
  // are filled or not, and then sends all the data to the backend with the user's own
  // reservationId.
  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!firstName || !phoneNumber || !date || !time || !partySize || !tableId) {
      alert("Please fill all fields!");
      return;
    }
    
    try 
    {
      // Send data to the backend using POST request
      await axios.put(`http://localhost:8080/user/${id}`, user); 
      navigate("/view"); // Navigate after submission
    } catch (error) 
    {
      console.error("There was an error editing the user!", error);
      // alert("Error editing user. Please try again.");
    }
  };

  // loadUser function gets all of our data using the primary key reservationId.
  // We put this function into the useEffect to allow only one run of the API.
  const loadUser = async() => {

    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);

  }

  // Start of our frontend application.
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Reservation</h2>

          <form onSubmit={onSubmit}>
          <div className="mb-3">
              <label htmlFor="TableId" className="form-label">
                Table Number
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter table id"
                name="tableId"
                value={tableId}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
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
                type="text"
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
                className="form-control"
                name="time"
                value={time}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
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
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="text"
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
            <Link className="btn btn-outline-danger mx-2" to="/view">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}