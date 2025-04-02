import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  let navigate = useNavigate();

  const [value, onChange] = useState(new Date());
  // Adjusted user object based on backend entity
  const [user, setUser] = useState({
    firstName: "",
    phoneNumber: "",
  });

  const { firstName, phoneNumber } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user); // Corrected URL
    navigate("/"); // Navigate after submission
  };

  return (
    <div className="container">
        <div className = "calendar-container">
          <ReactCalendar onChange={onChange} value={value} />
        </div>
     
    </div>
  );
}
 