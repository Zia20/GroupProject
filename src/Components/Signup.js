import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/falling_trees.png";




const Signup = () => {

  const [firstName, setFirstname ] = useState('');
  const [lastName, setLastname ] = useState('');
  const [email, setEmail ] = useState('');
  const [date, setDate ] = useState('');
  const [choose, setChoose ] = useState('');
  const [text, setText ] = useState('');

  const formStyles = {
    justifyContent: 'center',
    marginLeft: "200px"
  }

  const handleSubmit = async (event) => {

    event.preventDefault();
    const newComplains = { firstName, 
      lastName, 
      email, 
      date, 
      choose, 
      text };

      const response = await fetch("http://localhost:3000/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json " },
        body: JSON.stringify(newComplains)
      }).then(() => {
        console.log("Added new complaints")
      });
  }

  const signupStyle = {
      fontSize: "1.125rem",
      textAlign: "center",
      marginTop: "150px",
      marginBottom: "100px",
      marginRight: "45rem",
      marginLeft: "45rem",
      shadow: "none",
      // backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    }

  return (
    <form style={signupStyle} onSubmit={handleSubmit}>
      <img className="mb-4" width="72" height="57" alt='parks' src={Images}/>
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingPassword shadow-none" placeholder="First Name" />
        <label for="floatingPassword">First Name</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingPassword shadow-none" placeholder="Last Name" />
        <label for="floatingPassword">Last Name</label>
      </div>
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput shadow-none" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword shadow-none" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-success shadow-none my-2" type="submit">Sign In</button>
      <button className="w-100 btn btn-lg btn-primary shadow-none" type="submit">Sign Up</button>
      <p className="mt-5 mb-3 text-muted">&copy; Mellow 2022</p>
    </form>
  )
}

export default Signup;