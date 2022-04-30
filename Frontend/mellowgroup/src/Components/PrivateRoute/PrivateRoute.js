import React, {useLocalState} from 'react'
import { Navigate } from 'react-router-dom';
import Signin from '../SignIn/Signin';

const PrivateRoute = ({children}) => {
    const [jwt, setJwt ] = useLocalState('', "jwt");

  return (

    jwt ? children : <Navigate to="/dashboard" />
  )
}

export default PrivateRoute;