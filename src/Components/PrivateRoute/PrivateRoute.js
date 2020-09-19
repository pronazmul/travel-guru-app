import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContex } from '../Home/Home';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContex)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;