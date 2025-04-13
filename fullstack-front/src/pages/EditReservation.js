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
  });

  const { firstName, phoneNumber, date, time, partySize } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadUser()
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!firstName || !phoneNumber || !date || !time || !partySize) {
      alert("Please fill all fields!");
      return;
    }

    try 
    {
      // Send data to the backend using POST request
      await axios.put(`http://localhost:8080/user/${id}`, user); 
      navigate("/reservationlist"); // Navigate after submission
    } catch (error) 
    {
      console.error("There was an error editing the user!", error);
      alert("Error editing user. Please try again.");
    }
  };

  const loadUser = async() => {

    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Reservation</h2>

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
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/reservationlist">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
