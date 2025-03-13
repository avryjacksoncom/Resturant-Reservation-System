import axios from "axios";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import './DayTime.css';

export default function DayTime() {

  // Adjusted user object based on backend entity
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("12:00");

  const handleTimeChange = (e) =>{
    setTime(e.target.value);
  };
  const handleSubmit = async () => {
    const selectDateTime = new Date(date);
    const [hours, mintues] = time.split(":");
    selectDateTime.setHours(hours);
    selectDateTime.setMinutes(mintues);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Enter Day and Time</h2>
            
            <div className="mb-4">
                <CalendarComponent onChange={setDate} value={date}></CalendarComponent>
                <p className="text-center mt-3">
                    <strong>Selected Date:</strong> {date.toDateString()}
                </p>
            </div>

            <div className="mb-4">
                <label htmlFor="time" className="form-label">
                    Select Time:
                </label>
                <input
                    type="time"
                    id="time"
                    className="form-control"
                    value={time}
                    onChange={handleTimeChange}
                />
            </div>

            <div className="d-grid">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}