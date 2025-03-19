import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReservationList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
      };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col"># ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">More</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                users.map((user, index)=>(
                                <tr>
                                    <th scope="row" key = {index}>{index+1}</th>
                                    <td>{user.reservationId}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.phoneNUmber}</td>
                                    <td>
                                    <button className="btn btn-primary mx-2">Edit</button>
                                    <button className="btn btn-danger mx-2">Delete</button>
                                    </td>
                                </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
