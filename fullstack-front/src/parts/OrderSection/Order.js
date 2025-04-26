import React, {useEffect,useState,} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import './Order.css';
import Sound from '../../Assets/Sounds/knockingDoor.mp3'

//same issue with Home with the double dot thing. In this case since this is an entirely different file
//the double dot thing is even stranger. Anyways to fix this type of issue you gotta '../../Assets/blah/blah.joe'; 

const Order = () => {
    let navigate = useNavigate();
    const [emailInput, setEmailInput] = useState('');

    useEffect(() => {

        const timer =setTimeout(() => 
          {
            const audio = new Audio(Sound);
            audio.play().catch(err => console.log("Playback Error: ",err));
          }, 60000);

        return () => clearTimeout(timer);
    
      },[]);
    
    
      // Gets the users email input to be put on the emailing list.
    const onInputChange = (e) => 
        {
           setEmailInput(e.target.value)
        };
    
    // Python flask backend. Sends user an email to be put on the mailing list.
    // I explained this a bit more in ViwUser.js I think. 
    // And or look at the python file main.py!
    const onSubmit = async (e) => 
        {
          e.preventDefault();

              try 
              {
                // Send data to the backend using POST request
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
                  navigate("/");
              } catch (error) 
              {
                console.error("There was an error sending email!", error);
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