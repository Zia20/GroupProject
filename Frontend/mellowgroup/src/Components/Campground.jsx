import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Images from "../images/joggingBG.png";
import Image1 from "../images/fire.png";
import { CampFormStyles } from "./Styles";


const Campground = () => {

  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [date, setDate ] = useState('');
  const [choose, setChoose ] = useState('');
  const [text, setText ] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const newComplain = { 
      firstName, 
      lastName, 
      email, 
      date, 
      choose, 
      text 
    };

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
    <div>
      <div style={CampFormStyles}>
      <Container>
        <Row>
          <Col>
          <img alt='parks' src={Images}/>
          </Col>
          <Col>
            <div>
              <h1>We are here to assist you!</h1>
              <p>Please complete the form below for your complaints</p>
              <form onSubmit={handleSubmit}>
                <label>Complainant's First Name:</label><br />
                <input class="rounded text-success" type="text" required value={firstName} onChange={ (event) => {setFirstName(event.target.value)} } /><br />

                <label>Complainant's Last Name:</label><br />
                <input class="rounded" type="text" required value={lastName} onChange={(event) => {setLastName(event.target.value)}} /><br />

                <label>Email:</label><br />
                <input class="rounded" type="email" required value={email} onChange={(event) => {setEmail(event.target.value)}} /><br />

                <label>Date of report</label> <br />
                <input class="rounded" type="datetime-local" value={date} onChange={(event) => {setDate(event.target.value)}} /><br />

                <label htmlFor="complaints">Choose a type:</label><br />
                <select class="rounded" id="complaints" value={choose} onChange={(event) => {setChoose(event.target.value)}}>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Assault">Assault</option>
                  <option value="Damaged Items">Damaged Items</option>
                  <option value="Maintenance Issues">maintenance Issues</option>
                </select><br />
                <textarea class="rounded" rows="4" cols="50" placeholder='Write your complaints' value={text} onChange={(event) => {setText(event.target.value)}}></textarea><br />
                <Button className='mt-3 shadow-none' variant="outline-success" size="lg" type='submit'>Submit</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div>
      <Container>
        <Row>
          <Col className='py-5 my-auto'>
          <h2>Mellow Group Technologies</h2>
          <h5>Citizen to City Project</h5>
            <div>
              <Button size="lg" variant="success">React</Button>{' '}
              <Button size="lg" variant="warning">Express</Button>{' '}
              <Button size="lg" variant="danger">MongoDB</Button>{' '}
              <Button size="lg" variant="info">Node</Button>{' '}
              <Button size="lg" variant="primary">ReactBootstrap</Button>{' '}
            </div>
          </Col>
          <Col>
            <img alt='parks' src={Image1}/>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    
  )
}

export default Campground;