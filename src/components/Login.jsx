import './Login.css';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request with username and password to your backend
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.status === 200) {
      // Redirect to the account balances page
      window.location.href = '/account-balances';
        // navigate('/account-balances');
    } else {
      // Handle login error
      alert('Incorrect username or password');
    // window.location.href = '/account-balances';
    }
  };

  return (
    <div className='loginPage'>
      <form onSubmit={handleSubmit}>
        <input className="textFeild" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="textFeild" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
