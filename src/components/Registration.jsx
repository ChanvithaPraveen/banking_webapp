import './Registration.css';
import React, { useState } from 'react';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send a POST request with username and password to your backend
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, passwordConfirm }),
        });

        if (response.status === 200) {
            // Redirect to the account balances page
            window.location.href = '/account-balances';
        } else {
            // Handle login error
            alert('Incorrect username or password');
        }
    };

    return (
        <div className='registrationPage'>
            <form onSubmit={handleSubmit}>
                <input className="textFeild" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="textFeild" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="textFeild" type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;
