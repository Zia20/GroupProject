import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'

const AuthProvider = (props) => {
    const children = props.children

    const [loggedInUser, setLoggedInUser ] = useState();
    const [loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("/auth/loggedInUser");
            const userData = await response.json();
            setLoggedInUser(userData);
            setLoading(false);
            
        };
        getUser();
    }, []);
    
    const login = (user) => {
        setLoggedInUser(user)
    }
    
    const logout = () => {
        setLoggedInUser(null)
    }
    const values = { login, logout, loggedInUser, loading}

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export default AuthProvider;