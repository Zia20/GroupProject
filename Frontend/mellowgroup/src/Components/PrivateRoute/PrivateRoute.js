import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from './AuthContext';

const PrivateRoute = (props) => {

    const authContext = useContext(AuthContext);

    const loggedInUser = props.loggedInUser;
    const loading = authContext.loading;

    const mustBeAdmin = props.mustBeAdmin;
    const element = props.element;

    if(loading){
        return <div>Loading...</div>
    }

    if((loggedInUser?.isAdmin && mustBeAdmin) || (loggedInUser && !mustBeAdmin)){
        return element;
    } else {
        return <Navigate to="/login" />
    }
}

export default PrivateRoute;