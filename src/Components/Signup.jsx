import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/falling_trees.png";
import { signupStyle } from "./Styles";

const Signup = () => {

  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { 
      firstName, 
      lastName, 
      email, 
      password, 
    };

    const data = JSON.stringify(newUser)
      try {

        await fetch("/signup", {
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
      <img className="mb-4" width="72" height="57" alt='parks' src={Images}/>
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      <div className="form-floating">
        <input type="text" className="form-control shadow-none" id="floatingPassword" value={firstName} onChange={ (event) => {setFirstName(event.target.value)} } />
        <label htmlFor="floatingPassword">First Name</label>
      </div>
      <div className="form-floating">

        <input type="text" className="form-control shadow-none" id="floatingPassword" value={lastName} onChange={ (event) => {setLastName(event.target.value)} } />
        <label htmlFor="floatingPassword">Last Name</label>
      </div>
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
      {/* <button className="w-100 btn btn-lg btn-success shadow-none my-2" type="submit">Sign In</button> */}
      <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Sign Up</button>
      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}

export default Signup;