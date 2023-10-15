import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        axios.post('http://127.0.0.1:3000/login', { email, password})
        .then(result => {console.log(result)
            if(result.data.status === 'ok'){
                alert('Login Successfull');
                navigate('/transaction-history');
            } else {
                alert('Login Failed');
                console.log(result);
                console.log(password);
            }
        })
        .catch(err => console.log(err));
    };

    return(
        <div className='loginPage'>
            {/* <h1>Welcome to <br />XMI Bank</h1> */}
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='bg-white p-3 rounded w-25'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type='submit' className='btn btn-success w-100 rounded-0'>
                            Login
                        </button>
                    </form>

                    <p>Haven't an Account</p>
                    <Link to='/registration' type='submit' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Login;
