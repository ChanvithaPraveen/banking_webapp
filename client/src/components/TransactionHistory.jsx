import './TransactionHistory.css';
import React, { useState } from 'react';
import logo from '../assets/logo.png';


const TransactionHistory = () => {
    //create function to see transaction History
    return(
        <div>
            <h1>Transaction History</h1>
            <img src={logo} alt="logo" />
        </div>
    )

};

export default TransactionHistory;

