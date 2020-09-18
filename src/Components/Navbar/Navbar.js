import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Components/images/Logo.png'
const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light px-5">
                <Link className="navbar-brand" to="/">
                    <img width='100' src={logo} alt=''></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-block " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-3" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navbar;