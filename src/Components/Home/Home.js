import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Resort from '../Resort/Resort';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Booking from '../Booking/Booking';
import Contract from '../Contract/Contract';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const userContex = createContext()
const Home = () => {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <userContex.Provider value ={[loggedInUser, setLoggedInUser]}>
        <Router>
                <Navbar></Navbar>
                <Switch>
                  <Route exact path="/">
                    <Resort></Resort>
                  </Route>

                  <Route path="/booking/:id">
                    <Booking></Booking>
                  </Route>

                  <Route path="/login">
                    <Login></Login>
                  </Route>

                  <PrivateRoute path="/contract/:id">
                    <Contract></Contract>
                  </PrivateRoute>
                </Switch>
        </Router>
        </userContex.Provider>
    );
};

export default Home;