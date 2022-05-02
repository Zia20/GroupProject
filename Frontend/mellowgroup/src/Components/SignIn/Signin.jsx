import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../../images/signin.jpg";
import { signupStyle } from "../Styles/Styles";
import PropTypes from 'prop-types';
import { setUserSession } from '../PrivateRoute/Authentication';

const Signin = () => {

  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [isPending, setIsPending ] = useState(false);
  const [error, setError ] =useState(null)
  const [user, setUser ] = useState()
  const navigate = useNavigate();


  useEffect(() => {
    const getUser = async() => {
      try {

        let response = await fetch('/login');
        let userData = await response.json();
        console.log(userData)
        return setUser(userData);
        // setIsPending(false)
        // setUserSession(userData.token)
        // console.log(user.token);
        // navigate("/dashboard")  

      } catch (error) {

        // setIsPending(false)
        if(error.statusCode === 400 || error.statusCode === 404 ){
          setError(error.message);
        } else{
          setError("Something went wrong!")
        }
      }
    }
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = { 
      email, 
      password, 
    };
    setIsPending(true);
    setError(null)
    const data = JSON.stringify(users)
      try {
        await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          credentials: "include",
          body: data,
        })
      } catch (error) {
      console.log(error.message);
      }
  }
  return (
    <form style={signupStyle} onSubmit={handleSubmit}>
      <img className="mb-4" width="125" height="100" alt='parks' src={Images}/>
      <h1 className="h3 mb-3 fw-normal">Please sign In</h1>
      <div className="form-floating">
        <input type="email" className="form-control shadow-none" id="floatingInput" value={email} onChange={ (event) => {setEmail(event.target.value)} } />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control shadow-none" id="floatingPassword" value={password} onChange={ (event) => {setPassword(event.target.value)} } />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      {error && <div className="checkbox mb-3">{error}</div>}
      {!isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Sign in</button>}
      {isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" disabled type="submit">Adding ...</button>}

      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}



export default Signin;