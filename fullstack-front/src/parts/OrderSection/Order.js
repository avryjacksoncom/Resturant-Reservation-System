import React, {useEffect,useState} from 'react';
import './Order.css';
// import { Link } from "react-router-dom";
// import Home from '../HomeSection/Home.js';
// import Footer from '../FooterSection/Footer.js';
import Sound from '../../Assets/Sounds/knockingDoor.mp3'

//same issue with Home with the double dot thing. In this case since this is an entirely different file
//the double dot thing is even stranger. Anyways to fix this type of issue you gotta '../../Assets/blah/blah.joe'; 

const Order = () => {

    const [emailInput, setEmailInput] = useState('');

    useEffect(() => {
        const timer =setTimeout(() => {
            const audio = new Audio(Sound);
            audio.play().catch(err => console.log("Playback Error: ",err));
    }, 60000);
    return () => clearTimeout(timer);
    },[]);

    const onInputChange = (e) => 
        {
           setEmailInput(e.target.value)
        };
    

    const onSubmit = async (e) => 
        {
          e.preventDefault();
        //   const matchedUserEmail = users_state.find(user => user.email === emailInput);
          // Validate input fields
        //   if (!firstName || !phoneNumber || !partySize || !date || !time) 
        //     {
        //     alert("Please fill all fields!");
            
        //     return;
        //   }
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
                // await axios.post("http://localhost:8080/user", user); 
                try {
                  const response = await fetch("http://127.0.0.1:5000/signal3", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ signal3: "run-stuff", email: emailInput })
                  });
                
                  const data = await response.json();
                  console.log(data);  // Handle the response from Flask
                  } catch (error) {
                  console.error("Error sending signal:", error);
                  }
      
                // navigate("/"); // Navigate after submission
              } catch (error) 
              {
                console.error("There was an error sending email!", error);
                alert("Error sending email. Please try again.");
              }
            // }
         
      };

   return (
        <div className="white-box">
            <header>
                <h1>The Worm</h1>
                <p class="tagline">digging its way to your hearts </p>
            </header>

            <section className="coming-soon">
                <h2>Coming Soon</h2>
                <form id="signup-updates"
                 onSubmit={onSubmit}>
                    {/* <label for="email">Stay up to date for everyone we dig up</label> */}
                    <label >Stay up to date for everyone we dig up</label>
                    <input 
                    className = "form-control"
                    name="email" 
                    placeholder="Email Here!" 
                    onChange={onInputChange}
                    required/>
                    <button type="submit">Notify me</button>
                </form>
            </section>
        </div>

    )
}

export default Order;
//this is something new but unfortunately when it comes to pages idk why this is correct
//so point of the line is that Home is the only one wihtout an export 