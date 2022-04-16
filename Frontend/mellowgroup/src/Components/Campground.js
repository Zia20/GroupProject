import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Campground = () => {

  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [date, setDate ] = useState('');
  const [choose, setChoose ] = useState('');
  const [text, setText ] = useState('');

  const formStyles = {
    justifyContent: 'center',
    marginLeft: "200px"
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const newComplain = { 
      firstName, 
      lastName, 
      email, 
      date, 
      choose, 
      text 
    }

    console.log(newComplain);
    const data = JSON.stringify(newComplain)
    try {
     await fetch("/complain", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" },
        body: data,
      })
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div style={formStyles}>
      <h1>We are here to assist you!</h1>
      <p>Please complete the form below fo your complaints</p>
      
      <form onSubmit={handleSubmit}>
        <label>Complainant's First Name:</label><br />
        <input type="text" required value={firstName} onChange={ (event) => {setFirstName(event.target.value)} } /><br />

        <label>Complainant's Last Name:</label><br />
        <input type="text" required value={lastName} onChange={(event) => {setLastName(event.target.value)}} /><br />

        <label>Email:</label><br />
        <input type="email" required value={email} onChange={(event) => {setEmail(event.target.value)}} /><br />

        <label>Date of report</label> <br />
        <input type="datetime-local" value={date} onChange={(event) => {setDate(event.target.value)}} /><br />

        <label htmlFor="complaints">Choose a type:</label><br />
        <select id="complaints" value={choose} onChange={(event) => {setChoose(event.target.value)}}>
          <option value="Wildlife">Wildlife</option>
          <option value="Assault">Assault</option>
          <option value="Damaged Items">Damaged Items</option>
          <option value="Maintenance Issues">maintenance Issues</option>
        </select><br />
        <textarea rows="4" cols="50" placeholder='Write your complaints' value={text} onChange={(event) => {setText(event.target.value)}}></textarea><br />
        <Button className='mt-3 shadow-none' variant="outline-success" size="lg" type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Campground;