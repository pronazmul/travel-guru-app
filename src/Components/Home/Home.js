import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Booking from '../Booking/Booking';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

export const userContex = createContext()
const Home = () => {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <userContex.Provider value ={[loggedInUser, setLoggedInUser]}>
        <Router>
                  <Navbar></Navbar>
                {loggedInUser.email && <h1>User Email: {loggedInUser.email}</h1>}
                <Switch>
                  <Route exact path="/">
                    <Booking></Booking>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                </Switch>
        </Router>
        </userContex.Provider>
    );
};

export default Home;