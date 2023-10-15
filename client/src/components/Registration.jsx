// import './Registration.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/registration', {name, email, password})
        .then(result => {console.log(result)
            if(result.request.status === 200){
                alert('Registration Successfull');
                navigate('/login');
            } else {
                alert('Registration Failed');
            }
        })
        .catch(err => console.log(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='name'>
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete='off'
                            className='form-control rounded-0'
                            name='email'
                            onChange={(e) => setName(e.target.value)}
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
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                </form>
                    <p>Already have an Account</p>
                    <Link to='/login' type='submit' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </Link>
                

            </div>
        </div>
    );
};

export default Registration;
