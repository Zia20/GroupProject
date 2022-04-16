import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Images from "../images/circle.jpg";
import Image1 from "../images/campfire.jpg";
import Image2 from "../images/alone.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faCampground, faHospital, faMapLocationDot, faEye, faGlobe } from '@fortawesome/free-solid-svg-icons'

const Parks = () => {

  const mystyle = {
   
  paddingTop: "30px",
  paddingBottom: "30px",
  fontFamily: "Arial",
};

const carousalStyle = {
  backgroundImage: "linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)",
  fontFamily: "Arial",
  paddingTop: "30px",
  paddingBottom: "30px",
  fontFamily: "Arial",
};

const fontStyle = {
   
  color: "green",
};
 

  return (
    <div>
      <div style={mystyle}>
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={Images}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src={Image1}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </div>
      <div style={carousalStyle}>
          <Row className='px-5 mx-5'>
            <Col>
              <h1>Attraction</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faGlobe} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Safety</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faCampground} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Tour Guide</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faEye} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Maps</h1>
              <FontAwesomeIcon className='px-4 mx-2' icon={faMapLocationDot} size="2x" style={fontStyle} />
            </Col>
            <Col>
              <h1>Hosptitals</h1>
              <FontAwesomeIcon className='px-4 mx-1' icon={faHospital} size="2x" style={fontStyle} />
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default Parks;