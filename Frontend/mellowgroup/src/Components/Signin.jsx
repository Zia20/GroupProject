import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/signin.jpg";
import { signupStyle } from "./Styles";

const Signin = () => {

  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = { 
      email, 
      password, 
    };

    const data = JSON.stringify(users)
      try {

        await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: data,
        })
        
      } catch (error) {
        console.log(error)
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
      <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}

export default Signin;