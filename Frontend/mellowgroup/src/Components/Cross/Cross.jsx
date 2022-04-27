import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Images from "../../images/Nice_park.png";
import { myCross } from "../Styles/Styles";

function Cross() {
    
  return (
    <div style={myCross}>
      <Container>
        <Row>
        <Col>
            <img className='mt-3' alt='parks' width="450" height="450" src={Images}/>
          </Col>
          <Col className='py-5 my-auto text-center'>
          <h2>FUNDING</h2>
          <h5>The budget breakdown—including how much a city spends per person on parks.</h5>
          <Row>
          <Col className='py-2 my-2 text-center'>
          <span class="badge bg-info"><h2>$65</h2></span>        

          <p className="card-text">Parks operating budget per person <br/>$83,261,232 total</p>
         </Col>
         <Col className='py-2 my-2 text-center'>          
         <span class="badge bg-info"><h2>$36,191,691</h2></span>  
          <p className="card-text">Total parks capital budget</p>
         </Col>
         </Row>
         <Row>
         <Col className='py-2 my-2 text-center'>
         <span class="badge bg-info"><h2>$1,395,000</h2></span>  
          <p className="card-text">Total philanthropy/sponsorships</p>
         </Col>
         <Col className='py-2 my-2 text-center'>          
         <span class="badge bg-info"><h2>10%</h2></span>  
          <p className="card-text">Provincially legislated tools available for parkland dedication, acquisition and/or development</p>
         </Col>
         </Row>
  
            {/* <div>
              <Button size="lg" variant="success">React</Button>{' '}
              <Button size="lg" variant="warning">Express</Button>{' '}
              <Button size="lg" variant="danger">MongoDB</Button>{' '}
              <Button size="lg" variant="info">Node</Button>{' '}
              <Button size="lg" variant="primary">ReactBootstrap</Button>{' '}
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cross;