import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";

const ButtonContainer = ({ children }) => (
    <div style={{ display: 'flex', gap: '10px' }}>{children}</div>
);


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(result => {
                console.log(result);
                setUsers(result.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className='bg-white p-3 rounded w-90'>
                <Link to='/registration' className="btn btn-success">+Add</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>NIC</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                <tr>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.nic}</td>
                                    <td>
                                    <ButtonContainer>
                                        <Link to='/update-user' className="btn btn-success">Update</Link>
                                        <Link to='/delete-user' className="btn btn-danger">Delete</Link>
                                    </ButtonContainer>
                                    </td>
                                </tr> 
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
