import React from "react";
import { NavLink } from "react-router-dom";  // <-- change here
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">MedBook</h3>

      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            end  // <-- exact match for root path
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/signup" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
