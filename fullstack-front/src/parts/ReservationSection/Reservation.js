import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Reservation.css";

export default function ReservationPage() {
	let navigate = useNavigate();
	
	const [user, setUser] = useState({
		firstName: "",
		phoneNumber: "",
		timeOf: "",
	});
	const { firstName, phoneNumber, timeOf } = user;
	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value});	
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post("https://localhost:8080/user", user);
		navigate("/");
	};
return (
<section className="content">
	<div className="box-with-content">
		<form id="reservationForm" onSubmit={onSubmit}>
			<h1>Reserve a seat</h1>
			<h5>Please fill out this form to reserve your seat</h5>

			<div className="form-group">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeOf">Time:</label>
            <input
              type="text"
              id="timeOf"
              name="timeOf"
              value={timeOf}
              onChange={onInputChange}
              required
            />
          </div>

			<button type="submit">Submit</button>
		</form>
		<div id="confetti-canvas"></div>
	</div>
</section>
)
}

// export default Reservation;