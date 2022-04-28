import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../../images/signin.jpg";
import { signupStyle } from "../Styles/Styles";
import { Container } from 'react-bootstrap';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = {
      email,
      password,
    };
    setIsPending(true);
    const data = JSON.stringify(users)
    try {
      await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      })
      setIsPending(false)
    } catch (error) {
      console.log(error)
    }
    navigate("/")
  }
  return (
    <Container fluid='md'>
      <form style={signupStyle} onSubmit={handleSubmit} className="mx-5">
        <img className="mb-3" width="125" height="120" alt='parks' src={Images} />
        <h1 className="h3 mb-3 fw-normal">Please sign In</h1>
        <div className="form-floating mx-5">
          <input type="email" className="form-control shadow-none" id="floatingInput" value={email} onChange={(event) => { setEmail(event.target.value) }} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mx-5">
          <input type="password" className="form-control shadow-none" id="floatingPassword" value={password} onChange={(event) => { setPassword(event.target.value) }} />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        {!isPending && <button className="w-90 btn btn-lg btn-primary shadow-none" type="submit">Sign In</button>}
        {isPending && <button className="w-90 btn btn-lg btn-primary shadow-none" disabled type="submit">Adding ...</button>}

        <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
      </form>
    </Container>
  )
}

export default Signin;