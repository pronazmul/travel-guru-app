import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';

function App() {
  return (
      <>
          <Router>
                    <Navbar></Navbar>
                  <Switch>
                    <Route exact path="/">
                      <Home></Home>
                    </Route>
                    <Route path="/login">
                      <Login></Login>
                    </Route>
                    <Route path="/booking">
                      <Booking></Booking>
                    </Route>
                  </Switch>
          </Router>
      </>
  );
}

export default App;
