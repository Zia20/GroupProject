import React from 'react';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/fire.png";
import Image1 from "../images/jogging.png";
import Image2 from "../images/counting.png";
import { Container, Card, Row, Col, Button, ProgressBar, Spinner } from 'react-bootstrap';

function Recreation() {

  const recreate = {
    backgroundImage: "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)",
    padding: "50px",
  }

  const recreated = {
    backgroundImage: "linear-gradient(180deg, #2af598 0%, #009efd 100%)",
    padding: "50px",
  }
  
  return (
    <>
      <div>
      <Container>
        <Row className='mt-3'>
          <Col className='mt-5 pl-3'>
              <h1>Mellow the Citizen to report parks</h1>
              <h2>
                  Enjoy the weather around the city
              </h2>
              <Button className='mt-3' variant="outline-success" size="lg">Get in touch</Button>
          </Col>
          <Col>
            <img alt='parks' src={Images}/>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={recreate}>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: "20rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
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
            <Card.Title>Card Title</Card.Title>
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
            <Card.Title>Card Title</Card.Title>
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
            <Card.Title>Card Title</Card.Title>
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
              <h1>Mellow the Citizen to report parks</h1>
              <h2>
                  Enjoy the weather around the city
              </h2>
              <Button className='mt-3' variant="outline-success" size="lg">Get in touch</Button>
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