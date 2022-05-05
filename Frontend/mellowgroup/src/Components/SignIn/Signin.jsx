import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import Images from "../../images/amuseme.png";
import { signupStyle } from "../Styles/Styles";
import AuthContext from "../PrivateRoute/AuthContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signin = () => {

  const authContext = useContext(AuthContext)
  const login = authContext.login;

  const [username, setUsername ] = useState('')
  const [password, setPassword ] = useState('');
  const [isPending, setIsPending ] = useState(false);
  const [error, setError ] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username: username, password: password };
    const data = JSON.stringify(user)
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: data,
      })
      
      if(response.status === 200 ){
        const userData = await response.json();
        login(userData);
        navigate("/")
        setIsPending(true);
      } else {
        setError("Invalid username or password")
        navigate("/signin")
      }
    } catch (error) {
    console.log(error.message);
    }
  }
  return (
    <form style={signupStyle} onSubmit={handleSubmit}>
      <img className="mb-4 rounded-2" width="125" height="100" alt='parks' src={Images}/>
      <h1 className="h3 mb-3 fw-normal">Please sign In</h1>
      <div className="form-floating">
        <input type="text" className="form-control shadow-none" value={username} onChange={ (event) => {setUsername(event.target.value)} } />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control shadow-none" value={password} onChange={ (event) => {setPassword(event.target.value)} } />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <div className="checkbox mb-3">
      {error && <div className="checkbox mb-3">{error}</div>}
      </div>
      {!isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Sign in</button>}
      {isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" disabled type="submit">Adding...</button>}
      <button className="w-100 btn btn-lg btn-dark shadow-none mt-3" type="submit"><FontAwesomeIcon className='px-2 mx-2 text-center' icon={faGithub} size="2x"/></button>
      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}

export default Signin;