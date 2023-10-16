import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        
    };

    return (
        <div className='registrationPage'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-white p-3 rounded w-90'>
                    <h2>Update User</h2>
                    <form onSubmit={handleSubmit} className="row">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <div className='mb-3'>
                                <label htmlFor="fname" className='fname'>
                                    <strong>First Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name "
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='fname'
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="phone" className='phone'>
                                    <strong>Phone</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your phone"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="gender" className='gender'>
                                    <strong>Gender</strong>
                                </label>
                                <select
                                    className='form-select rounded-0'
                                    name='gender'
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="password" className='password'>
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='password'
                                    onChange={(e) => setPassword(bcrypt.hashSync(e.target.value, 10))}
                                />
                            </div>

                            
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <div className='mb-3'>
                                <label htmlFor="lastName" className='lastName'>
                                    <strong>Last Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='lastName'
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="email" className='email'>
                                    <strong>Email</strong>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="nic" className='nic'>
                                    <strong>NIC</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your NIC"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='nic'
                                    onChange={(e) => setNic(e.target.value)}
                                />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="rePassword" className='rePassword'>
                                    <strong>Re-Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Re-Enter your password"
                                    autoComplete='off'
                                    className='form-control rounded-0'
                                    name='rePassword'
                                    // onChange={(e) => setRePassword(bcrypt.hashSync(e.target.value, 10))}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </div>

                        </div>

                        <button type='submit' className='btn btn-success w-80 rounded-0'>
                            Update
                        </button>
                    </form>
                
                </div>
            </div>
        </div>
    );

};

export default UpdateUser;