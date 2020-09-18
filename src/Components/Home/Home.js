import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Booking from '../Booking/Booking';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <>
        <Router>
                  <Navbar></Navbar>
                <Switch>
                  <Route exact path="/">
                    <Booking></Booking>
                  </Route>
                  <Route path="/login">
                    <Login></Login>
                  </Route>
                </Switch>
        </Router>
    </>
    );
};

export default Home;