import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Images from "../images/camping.png";


const Maps = () => {


  
  return (
    <div>
    <Container>
        <Row className='mt-3'>
            <Col>
                <h1>History of Calgary Parks</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Button className='mt-3' variant="outline-success" size="lg">Rate Parks</Button>
            </Col>
            <Col>
                <img alt='parks' src={Images}/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Maps;