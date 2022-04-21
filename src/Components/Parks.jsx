import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Images from "../images/circle.jpg";
import Image1 from "../images/campfire.jpg";
import Image2 from "../images/alone.jpg";
import Image3 from "../images/recordingBG.png";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground, faHospital, faMapLocationDot, faEye, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { myParkStyle, upLoadstyle, carousalStyle, fontStyle  } from "./Styles";

const Parks = () => {
  const [ fileData, setFileData ] = useState();
  const navigateTo = useNavigate();
  const handleFileChange = (event) => {

    setFileData(event.target.files[0]);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    //The for accepts a key:value to store data
    const data = new FormData()
    //Image name must corresponds to data in database.
    data.append("image", fileData);

    try {
      fetch("/upload", {
        method: "POST",
        body: data,
      })
    } catch (error) {
      alert('something wrong')
      console.log(error.message);
    }

    navigateTo('/');
  };

  return (
    <div>

      <div style={upLoadstyle}>
        <Container>
          <Row>
            <Col>
              <img alt='parks' src={Image3}/>
            </Col>
            <Col>
              <div className='py-5 my-5'>
                <form onSubmit={handleSubmit}>
                  <label>Make a complain with by Uploading an Image</label><br />
                  <input type="file" onChange={handleFileChange} /><br />
                  <Button className='shadow-none my-3' variant="outline-success" size="lg" type='submit'>Upload</Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      
      <div style={myParkStyle}>
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