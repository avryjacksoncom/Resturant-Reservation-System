import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [users_state, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user");
        console.log(result);
        setUsers(result.data);
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Reservations</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered shadow-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope ="col">ReservationID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Party Size</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users_state.map((user, index) => (
                            <tr key={user.reservationId}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.reservationId}</td>
                                <td>{user.firstName}</td>
                                <td>{user.time}</td>
                                <td>{user.date}</td>
                                <td>{user.partySize}</td>
                                <td>{user.phoneNumber}</td>
                                 <td>
                                    <Link
                                        className="btn btn-primary"
                                        to={`/viewuser/${user.reservation_id}`}
                                    >
                                        Delete
                                    </Link>
                                    
                                    <Link
                                        className="btn btn-primary"
                                        to={`/viewuser/${user.reservation_id}`}
                                    >
                                        Modify
                                    </Link>
                                </td> 
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


// import axios from "axios";
// import React, { useEffect,useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function ViewUser() {
//     const [users_sate, setUsers] = useState([]);

//     const { id } = useParams();
  
//     useEffect(() => {
//       loadUsers();
//     }, []);
  
//     const loadUsers = async () => {
//       const result = await axios.get("http://localhost:8080/user");
//       console.log(result)
//       setUsers(result.data);
//     };
  
//     return (
//       <div className="container">
//         <div className="py-4">
//           <table className="table border shadow">
//             <thead>
//               <tr>
//                 <th scope="col">id</th>
//                 <th scope="col">Name</th>
//                 <th scope="col">time</th>
//                 <th scope="col">date</th>
//                 <th scope="col">party_size</th>
//                 <th scope="col">phone_number</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users_sate.map((users, index) => (
//                 <tr key={users.reservation_id}>
//                   <th scope="row" key={index}>
//                     {index + 1}
//                   </th>
//                   <td>{users.reservation_id}</td>
//                   <td>{users.first_name}</td>
//                   <td>{users.time}</td>
//                   <td>{users.date}</td>
//                   <td>{users.party_size}</td>
//                   <td>{users.phone_number}</td>
//                   <td>
//                     <Link
//                       className="btn btn-primary mx-2"
//                       to={`/viewuser/${users.reservation_id}`}
//                     >
//                       View
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
// }