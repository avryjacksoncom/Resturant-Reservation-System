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
        const result = await axios.get("http://localhost:8080/user");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
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
                            <th scope="col">Group Size</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Extra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}> {index + 1} </th>
                                <td>{user.firstName}</td>
                                <td>{user.partySize}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.time}</td>
                                <td>{user.date}</td>
                                <td>
                                    <Link className="btn btn-outline-primary mx-2"
                                        to={`/editreservation/${user.reservationId}`}> Edit </Link>

                                    <button className="btn btn-outline-danger mx-2"
                                        onClick={() => deleteUser(user.reservationId)}>
                                        Delete
                                    </button>
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
