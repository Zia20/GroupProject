import React, { useState } from 'react'
// const fetch = require('node-fetch');

const Campground = () => {

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

  return (
    <div style={formStyles}>
      <h1>We are here to assist you!</h1>
      <p>Please complete the form below fo your complaints</p>
      <form onSubmit={handleSubmit}>
        <label>Complainant's First Name:</label><br />
        <input type="text" required value={firstName} onChange={(event) => setFirstname(event.target.value)}></input><br />
        <label>Complainant's Last Name:</label><br />
        <input type="text" required value={lastName} onChange={(event) => setLastname(event.target.value)}></input><br />
        <label>Email:</label><br />
        <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)}></input><br />
        <label>Date of report</label> <br />
        <input type="datetime-local" value={date} onChange={(event) => setDate(event.target.value)}></input><br />
        <label for="complaints">Choose a type:</label><br />
        <select id="complaints" name="complaints" value={choose} onChange={(event) => setChoose(event.target.value)}><br /><br />
          <option value="Wildlife">Wildlife</option><br />
          <option value="Assault">Assault</option><br />
          <option value="Damaged Items">Damaged Items</option><br />
          <option value="Maintenance Issues">maintenance Issues</option><br />
        </select><br />
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Write your complaints' value={text} onChange={(event) => setText(event.target.value)}></textarea><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Campground;