import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Components/images/Logo.png'
import { userContex } from '../Home/Home';
const Navbar = () => {
    //Contex Api used to show user
    const [loggedInUser, setLoggedInUser] = useContext(userContex)

    return (
        <nav className="navbar navbar-expand-lg fixed-top px-5">
            <Link className="navbar-brand" to="/">
                <img width='100' src={logo} alt=''></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-block " id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {loggedInUser.isSignIn &&
                        <h4 className='text-warning pr-4'>Welcome {loggedInUser.name}</h4>
                    }
                    <li className="nav-item">
                        <Link className="nav-link mr-3 font-width-bold btn btn-outline-warning" to="/">Home</Link>
                    </li>
                    {loggedInUser.isSignIn ?
                        <li className="nav-item">
                            <Link onClick={()=>setLoggedInUser({})} className="nav-link mr-3 font-width-bold btn btn-outline-warning active" to="/login">logout</Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link className="nav-link mr-3 font-width-bold btn btn-outline-warning" to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
