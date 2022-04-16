import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/AlaGit.jpg";
import Image1 from "../images/joggingBG.png";
import Image2 from "../images/joggingBG.png";
import Image3 from "../images/joggingBG.png";

function About() {
    const mystyle = {
        // backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        padding: "10px",
        fontFamily: "Arial",
      };

  return (
    <div style={mystyle}>
      <Container>
        <Row>
          <Col>
            <h3>Problem Statement</h3>
            <p>Solution and recommendations</p>
          </Col>
          <Col>
          <h3>Mission</h3>
            <p>Solution and recommendations</p>
          </Col>
          <Col>
          <h3>Visson</h3>
            <p>Solution and recommendations</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="rounded-circle" src={Images} />
                <Card.Body>
                  <Card.Title className='bold'>Emmanuel Alafonye</Card.Title>
                  <Card.Text>Petroleum & Software Engineer, previously a construction worker.
                  </Card.Text>
                  <Button className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-2' icon={faLinkedinIn} size="2x"  /></Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title>Fowzia Hassan</Card.Title>
                  <Card.Text>
                    Software Engineer and a GIS
                  </Card.Text>
                  <Button className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-2' icon={faLinkedinIn} size="2x"  /></Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image2} />
                <Card.Body>
                  <Card.Title>Paul Neumann</Card.Title>
                  <Card.Text>
                  Software Engineer and a GIS
                  </Card.Text>
                  <Button className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-2' icon={faLinkedinIn} size="2x"  /></Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Image3} />
                <Card.Body>
                  <Card.Title>Yulia Sinko</Card.Title>
                  <Card.Text>
                  Software Engineer and a GIS
                  </Card.Text>
                  <Button className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-2' icon={faLinkedinIn} size="2x"  /></Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;