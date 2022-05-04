import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../../images/signin.jpg";
import { signupStyle } from "../Styles/Styles";

const Admin = () => {

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
      const response = await fetch("/auth/login/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: data,
      })
      
      if(response.status === 200 ){
        navigate("/dashboard")
        setIsPending(true);
      } else {
        setError("Something went wrong!")
      }
    } catch (error) {
    console.log(error.message);
    }

  }
  return (
    <form style={signupStyle} onSubmit={handleSubmit}>
      <img className="mb-4" width="125" height="100" alt='parks' src={Images}/>
      <h1 className="h3 mb-3 fw-normal">Admin sign In</h1>
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
      {!isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Admin</button>}
      {isPending && <button className="w-100 btn btn-lg btn-primary shadow-none" disabled type="submit">Adding ...</button>}
      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}

export default Admin;