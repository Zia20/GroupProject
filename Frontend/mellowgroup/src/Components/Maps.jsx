import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Images from "../images/camping.png";


const GoogleMaps = () => {

  return (
    <div>
    <Container>
        <Row className='mt-3'>
            <Col>
                <h1>History of Calgary Parks</h1>
                <p>At present, Calgary has 5,200 parks totalling 10,1100 hectares, giving Calgary eight hectares of parks/1,000 citizens — twice the recommendation.</p>
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

export default GoogleMaps;