import { React, useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./SideBar";
import "./Home.css";
import { Link, useParams, useLocation  } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHome } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/logo.png';
import TopBar from "./TopBar";

const Home = () => {

    return (
        <div className='homePage'>

            <Sidebar />

            <TopBar />

            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='p-4 rounded w-90'>
                    <div className="row">
                        <div className="col-6 text-start">
                            {/* <Link to="/" className="btn btn-primary">
                                <FontAwesomeIcon icon={faHome} /> Home
                            </Link> */}
                            <img src={logo} alt="" />
                        </div>
                        <div className="col-6 text-end">
                            <Link to='/registration' className="btn btn-success">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;