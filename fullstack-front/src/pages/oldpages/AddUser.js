// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function AddUser() {
//   let navigate = useNavigate();

//   // Adjusted user object based on backend entity
//   const [user, setUser] = useState({
//     firstName: "",
//     phoneNumber: "",
//   });

//   const { firstName, phoneNumber } = user;

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/user", user); // Corrected URL
//     navigate("/"); // Navigate after submission
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">Register User</h2>

//           <form onSubmit={(e) => onSubmit(e)}>
//             <div className="mb-3">
//               <label htmlFor="FirstName" className="form-label">
//                 First Name
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your first name"
//                 name="firstName"
//                 value={firstName}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="PhoneNumber" className="form-label">
//                 Phone Number
//               </label>
//               <input
//                 type={"text"}
//                 className="form-control"
//                 placeholder="Enter your phone number"
//                 name="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => onInputChange(e)}
//               />
//             </div>
//             <button type="submit" className="btn btn-outline-primary">
//               Submit
//             </button>
//             <Link className="btn btn-outline-danger mx-2" to="/">
//               Cancel
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
