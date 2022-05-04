import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../../images/amuseme.png";
import { signupStyle } from "../Styles/Styles";

const Signup = () => {

  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const [isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, username, password, };
    setIsPending(true);

  const data = JSON.stringify(user)
    try {
      await fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: data,
      })
      navigate("/signin")
      setIsPending(false)
    } catch (error) {
      console.log(error)
    }
    setIsPending(true)

  }

  return (
    <form style={signupStyle} onSubmit={handleSubmit} className="xs-12 md-6">
      <img className="mb-4 rounded" width="125" height="100" alt='parks' src={Images}/>
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      <div className="form-floating">
        <input type="text" className="form-control shadow-none" value={username} onChange={ (event) => {setUsername(event.target.value)} } />
        <label htmlFor="floatingInput">username</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control shadow-none" value={firstName} onChange={ (event) => {setFirstName(event.target.value)} } />
        <label htmlFor="floatingPassword">First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control shadow-none" value={lastName} onChange={ (event) => {setLastName(event.target.value)} } />
        <label htmlFor="floatingPassword">Last Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control shadow-none" value={email} onChange={ (event) => {setEmail(event.target.value)} } />
        <label htmlFor="floatingInput">Email address</label>
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
      {!isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Sign Up</button>}
      {isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" disabled type="submit">Adding form ...</button>}

      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}

export default Signup;