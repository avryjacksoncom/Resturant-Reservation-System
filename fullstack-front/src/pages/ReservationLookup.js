import React, { useState,useEffect } from 'react';
import axios from 'axios';

const ReservationLookup = () => {
const [phoneInput, setPhoneInput] = useState('');
const [emailInput, setEmailInput] = useState('');
const [users_state, setUsers] = useState([]);
// const [user, setUser] = useState({
//     firstName: "",
//     phoneNumber: "",
//     date: "",
//     time: "",
//     partySize: "",
//   });
//   const [users_state, setUsers] = useState([]);


    useEffect(() => {
    loadUsers();
  }, []);


  const loadUsers = async () => 
    {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

  // const hasPartialPhone = (phoneInput,users) =>
  // {
  //   return users.find(user => user.phoneNumber.includes(phoneInput));
  // }
  // Filter users based on the phone number entered
  const matchedUser = users_state.find(user => user.phoneNumber === phoneInput);
  const matchedUserEmail = users_state.find(user => user.email === emailInput);
// send a POST request to the Flask server

const logic = async (e) =>
  
  {
     const matchedUserEmail = users_state.find(user => user.email === emailInput);
     setEmailInput(e.target.value)
     
     if(matchedUserEmail == e.target.value)
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

  };
  
  
const handleButtonClick = async () => {
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
  };

  return (
    <div>
      <input
        className="form-control"
        placeholder="Enter your phone number"
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
      />

      <div>
        {matchedUser ? (
          <div key={matchedUser.reservationId}>
            <h2>Reservation Found</h2>
            <p>Name: {matchedUser.firstName}</p>
            <p>Date: {matchedUser.date}</p>
            <p>Time: {matchedUser.time}</p>
            <p>Reservation ID: {matchedUser.reservationId}</p>
          </div>
        ) : (
          <h1>Not Available</h1>
        )}
      </div>
      <input
        className="form-control"
        placeholder="Enter your email"
        value={emailInput}
      />
      <button 
      className = "signal-button"
      onClick={handleButtonClick}>
        Send to Email

      </button>
      <div>
        {matchedUserEmail ? (
          <div key={matchedUserEmail.reservationId}>
            <h2>Reservation Found</h2>
            <p>Name: {matchedUserEmail.firstName}</p>
            <p>Date: {matchedUserEmail.date}</p>
            <p>Time: {matchedUserEmail.time}</p>
            <p>Reservation ID: {matchedUserEmail.reservationId}</p>
          </div>
        ) : (
          <h1>Not Available</h1>
        )}
      </div>

    </div>
  );
};

export default ReservationLookup;