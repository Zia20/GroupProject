import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/fire.png";
import Image1 from "../images/jogging.png";
import Image2 from "../images/counting.png";
import Image3 from "../images/worldBG.png";
import { recreatePage, recreated, weatherInput } from "./Styles";

import { Container, Card, Row, Col, Button, ProgressBar, Spinner } from 'react-bootstrap';

function Recreation() {

  const [ weatherData, setWeatherData ] = useState([{}]);
  const [ city, setCity ] = useState('')

  // const apiKey = "307f9855ed28565c54e790f9ca066555" //OLD April 19, 2022
  const apiKey = "b695184324a9e5f4d0961f0ef8dbb94d"    //NEW April 19, 2022

  // const AKEY = process.env.API_KEY;
  const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const getWeather = async(e) => {
    if (e.key === "Enter"){
      try {
        const response = await fetch(weatherUrl);        
        let data = await response.json();
        setWeatherData(data)
        setCity('')
        console.log(data)
        } catch (error) {
        console.log(error.message)
      }
    }
  }
  
  return (
    <>
      <div>
      <Container>
        <Row className='mt-3'>
          <Col className='mt-5 pl-3'>
              <h1>YYC recreation, the best among <span className='text-success'>western Canada</span>.</h1>
              <h4 className='text-danger'>Visit our parks and recreational centers. Visit YYC</h4>
              <Button className='mt-3 shadow-none' variant="outline-success" size="lg">Book Now</Button>
          </Col>
          <Col>
            <img alt='parks' src={Images}/>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={recreatePage}>
      <Container>
        <Row className='mt-3'>
          <Col>
            <img alt='parks' src={Image3}/>
          </Col>
          <Col className='mt-5 pl-3'>
            <input style={weatherInput}
            type="text" 
            className='rounded' 
            placeholder='Enter you City' 
            value={city} 
            onChange={ 
              (event) => {setCity(event.target.value)} 
              } 
            onKeyDown={getWeather}
              /><br/>

            {typeof weatherData.main === 'undefined' ? (
              <div>
                <p className='text-info fs-3'>Weather Near You.</p> <br/>
              </div>
            ) : (
              <div>
                <p className='text-danger fs-3'>{weatherData.name}</p><br/>
                <p className='text-warning fs-3'>{Math.round(weatherData.main.temp)} °C</p> <br/> {/*Degree sign ALT+0176*/}
                <p className='text-success fs-3'>{weatherData.weather[0].main}</p>
              </div>
            )}

            {weatherData.cod === "404" ? (<p className='text-success fs-3'>City is not found</p>) : (<></>)} 
          </Col>
        </Row>
      </Container>
    </div>
    <div style={recreatePage}>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: "20rem" }}>
          <Card.Body>
            <Card.Title>YYC Arenas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button href="#">Calgary Parks</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: "20rem" }}>
          <Card.Body>
            <Card.Title>YYC Parks</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button href="#" style={{justifyContent: "center"}}>Calgary Parks</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: "20rem" }}>
          <Card.Body>
            <Card.Title>YYC Campgrounds</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button href="#">Calgary Parks</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: "20rem" }}>
          <Card.Body>
            <Card.Title>Dog Parks</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button href="#">Calgary Parks</Button>
          </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
    <div>
      <Container >
        <Row className='mt-3'>
          <Col>
            <img alt='parks' src={Image1}/>
          </Col>
          <Col className='mt-5 pl-3'>
              <h1>Mellow the Citizen to report parks</h1>
              <h2>
                  Enjoy the weather around the city
              </h2>
              <Button className='mt-3' variant="outline-success" size="lg">Get in touch</Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={recreated}>
      <h5>Mellow Group</h5>
      <p>Citizen to City Progress Reports</p>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      <ProgressBar striped variant="success" animated now={40} label={`Parks Completed`} />
      <ProgressBar striped variant="info" animated now={20} label={`Recreation Completed`}/>
      <ProgressBar striped variant="warning" animated now={60} label={`Campground Progress`} />
      <ProgressBar striped variant="danger" animated now={80} label={`Mellow Progress`}/>
   </div>
    <div>
      <Container>
        <Row className='mt-3'>
          <Col className='mt-5 pl-3'>
              <h1>Report an issue or rate YYC parks</h1>
              <h4>Residence to City Reporting</h4>
              <Button className='mt-3 shadow-none' variant="outline-success" size="lg">Learn more</Button>
          </Col>
          <Col>
            <img alt='parks' src={Image2}/>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  )
}

export default Recreation;