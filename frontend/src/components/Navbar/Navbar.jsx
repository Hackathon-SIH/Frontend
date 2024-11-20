import React from 'react';
import Logo from "../../images/Logo.png";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={Logo} alt='logo'></img>
            </div>
            <div className="nav-links">
                <a href="#">Internship</a>
                <a href="#">Jobs</a>
                <a href="#">Employers</a>
                <button className="sign-up">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;