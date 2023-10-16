import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";
import "./Users.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faUserPlus, faHome } from "@fortawesome/free-solid-svg-icons";


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
        <div className='usersPage'>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className='p-4 rounded w-90'>
                <div className="row">
                    <div className="col-6 text-start">
                        <Link to="/" className="btn btn-primary">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </div>
                    <div className="col-6 text-end">
                        <Link to='/registration' className="btn btn-success">
                            <FontAwesomeIcon icon={faUserPlus} /> Add
                        </Link>
                    </div>
                </div>
                    <br/><br/>
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

                        <br/>

                        <tbody>
                            {
                                users.map((user) => {
                                    return (
                                    <tr>
                                        <td><strong>{user.firstName}</strong></td>
                                        <td><strong>{user.lastName}</strong></td>
                                        <td><strong>{user.email}</strong></td>
                                        <td><strong>{user.phone}</strong></td>
                                        <td><strong>{user.gender}</strong></td>
                                        <td><strong>{user.nic}</strong></td>
                                        <td>
                                        <ButtonContainer>
                                            <Link to={`/update-user/${user._id}`} className="btn btn-success">
                                                <FontAwesomeIcon icon={faEdit} /> Update
                                            </Link>
                                            <Link to='/delete-user' className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrash} /> Delete
                                            </Link>
                                        </ButtonContainer>
                                        </td>
                                    </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
