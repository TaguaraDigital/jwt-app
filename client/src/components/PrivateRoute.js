import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../hooks/contexts/AuthContext';

const PrivateRoute = ( { component: Component, ...rest  }) => {

    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            { ...rest }
            render={ props => { 
                return currentUser.email ? <Component { ...rest } /> : <Redirect to="/" /> 
            }}
        >
            
        </Route>
    )
}

export default PrivateRoute
