import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export default function ReservationList() {

    const [users, setUsers] = useState([])

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`)
        loadUsers();
    }

    return (
        <div className='container'>
            <a href="/">Return to Menu</a>
            <div className='py-4'>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col"># ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Group Number</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.reservationId}</td>
                                <td>{user.firstName}</td>
                                <td>{user.guestAmount}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.reservationDate}</td>
                                <td>
                                    <button className="btn btn-primary mx-2">Edit</button>
                                    <button className="btn btn-danger mx-2"
                                        onClick={() => deleteUser(user.reservationId)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
