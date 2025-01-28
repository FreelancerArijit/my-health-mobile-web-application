// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item"><img src="./images/Group 7.png" alt="" className="src" /></NavLink>
      <NavLink to="/care" className="nav-item"><img src="./images/Group 8.png" alt="" className="src" /></NavLink>
      <NavLink to="/my-records" className="nav-item"><img src="./images/Group 9.png" alt="" className="src" /></NavLink>
      <NavLink to="/account" className="nav-item"><img src="./images/Group 10.png" alt="" className="src" /></NavLink>
    </nav>
  );
}

export default Navbar;
