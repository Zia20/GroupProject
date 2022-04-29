import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Images from "../../images/contactus.jpg";
import Image1 from "../../images/fire.png";
import { CampFormStyles } from "../Styles/Styles";
import 'animate.css';

const Engage = () => {

  const [firstName, setFirstName ] = useState('');
  const [lastName, setLastName ] = useState('');
  const [email, setEmail ] = useState('');
  const [date, setDate ] = useState('');
  const [choose, setChoose ] = useState('');
  const [text, setText ] = useState('');
  const [isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();


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
    setIsPending(true);
    console.log(newComplain);
    const data = JSON.stringify(newComplain)
    try {
     await fetch("/complain", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" },
        body: data,
      })
      setIsPending(false)
    } catch (error) {
      console.log(error)
    }
    navigate("/")
  }

  return (
    <div>
      <div style={CampFormStyles}>
      <Container fluid>
        <Row>
          <Col>
          <img alt='parks' className="rounded mx-auto d-block mt-4 pt-4" width="400px" hight="400px" src={Images}/>
          </Col>
          <Col>
            <div> 
              <h1 className='animate__animated animate__shakeY'>We are here to assist you!</h1>
              <h5>Please complete the form below for your complaints</h5>
              <form onSubmit={handleSubmit}>
                <label><br/>Complainant's First Name:</label><br />
                <input className="rounded text-success" type="text" required value={firstName} onChange={ (event) => {setFirstName(event.target.value)} } /><br />

                <label>Complainant's Last Name:</label><br />
                <input className="rounded text-success" type="text" required value={lastName} onChange={(event) => {setLastName(event.target.value)}} /><br />

                <label>Email:</label><br />
                <input className="rounded text-success" type="email" required value={email} onChange={(event) => {setEmail(event.target.value)}} /><br /> <br/>

                <label>Date of report</label> <br />
                <input className="rounded" type="datetime-local" value={date} onChange={(event) => {setDate(event.target.value)}} /><br/> <br/>

                <label htmlFor="complaints">Choose a type:</label><br />
                <select className="rounded mb-3" id="complaints" value={choose} onChange={(event) => {setChoose(event.target.value)}}>
                  <option value="Wildlife">Wildlife</option>
                  <option value="Assault">Assault</option>
                  <option value="Damaged Items">Damaged Items</option>
                  <option value="Maintenance Issues">maintenance Issues</option>
                </select><br />
                <textarea className="rounded" rows="4" cols="50" placeholder='Write your complaints' value={text} onChange={(event) => {setText(event.target.value)}}></textarea><br />
                {!isPending && <Button className='mt-3 shadow-none' variant="outline-success" size="lg" type='submit'>Submit</Button>}
                {isPending && <Button className='mt-3 shadow-none' disabled variant="outline-success" size="lg" type='submit'>Submiting ...</Button>}
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

export default Engage;