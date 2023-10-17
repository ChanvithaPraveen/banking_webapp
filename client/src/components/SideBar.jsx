import React from "react";
import { useState } from "react";
import './SideBar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  
    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <nav id="sidebar" className={collapsed ? "active" : ""}>
        <div className="sidebar-header">
          <button
            type="button"
            id="sidebarCollapse"
            onClick={toggleSidebar}
            className="btn btn-info"
          >
            <FontAwesomeIcon icon={collapsed ? faArrowLeft : faArrowRight} />
          </button>

        </div>

        <ul className={`list-unstyled components ${collapsed ? "right-aligned" : ""}`}>
          {collapsed ? (
            <div className="sidebar-links">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/fund-transfer">Fund Transfer</a>
                </li>
                <li>
                    <a href="/bill-payment">Bill Payment</a>
                </li>
                <li>
                    <a href="/account-balances">Account Balances</a>
                </li>
                <li>
                    <a href="/transaction-history">Transaction History</a>
                </li>
                <li>
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <a href="/services">Services</a>
                </li>
                <li>
                    <a href="/contact">Contact Us</a>
                </li>
            </div>
            ) : (
            <div>

            </div>)
          }
        </ul>
      </nav>
    );
  };
  
  export default Sidebar;
  