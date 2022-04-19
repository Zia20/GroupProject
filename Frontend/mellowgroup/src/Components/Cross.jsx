import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Images from "../images/joggingBG.png";
import { myCross } from "./Styles";

function Cross() {
    
  return (
    <div style={myCross}>
      <Container>
        <Row>
        <Col>
            <img alt='parks' src={Images}/>
          </Col>
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
        </Row>
      </Container>
    </div>
  )
}

export default Cross;