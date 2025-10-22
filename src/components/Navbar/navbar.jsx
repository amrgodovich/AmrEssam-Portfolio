import React from "react";
import "./navbar.css";
import logo from "../../assets/logo2.png";

const Navbar = () => {
    return (
     <div className="navbar">
        <img src={logo} alt="Logo" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Contact Me</div>
     </div>)
    }

export default Navbar;