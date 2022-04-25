import React from 'react';
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import Images from "../images/Ataene.jpg";
import Image1 from "../images/Zia20.png";
import Image2 from "../images/neu4mann.png";
import Image3 from "../images/bnurmos.png";
import { aboutStyles } from "./Styles";


function About() {
    

  return (
    <div style={aboutStyles}>
      <Container>
        <Row>
          <Col className='py-5 my-5 text-center'>
            <h2>Mandate</h2>
            <p>collection of up-to-date information on the state of natural parks, which contributes to public understanding in ways, that ensure the ecological and commemorative integrity of these places for present and future generations.</p>
          </Col>
          <Col className='py-5 my-5 text-center'>
          <h2>Mission</h2>
            <p> is to build a quality and comprehensive technology infrastructure, establish and maintain an effective operational environment, and deliver quality, prompt, cost effective and reliable technology services.</p>
          </Col>
          <Col className='py-5 my-5 text-center'>
          <h2>Core Values</h2>
            <p>respect, engagement, excellence and integrity – provide a common framework for our actions as Mellow
team members and our collaborative work to fulfill our Mandate
and our Vision.</p>
          </Col>
        </Row>
        <Row className='py-5 my-2'>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="rounded-circle" src={Images} />
                <Card.Body className='text-center'>
                  <Card.Title className='bold'>Emmanuel Alafonye</Card.Title>
                  <Card.Text>Petroleum & Software Engineer.
                  </Card.Text>
                  <a href="https://github.com/Ataene" target="_blank">
                  <Button type='button' className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-2 text-center' icon={faGithub} size="2x"  /></Button></a>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="rounded-circle" src={Image1} />
                <Card.Body className='text-center'>
                  <Card.Title className='bold'>Fowzia Hassan</Card.Title>
                  <Card.Text>
                    Software Engineer and a GIS
                  </Card.Text>
                  <a href="https://github.com/Zia20" target="_blank">
                  <Button type='button' className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-3' icon={faGithub} size="2x"  /></Button></a>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="rounded-circle" src={Image2} />
                <Card.Body className='text-center'>
                  <Card.Title className='bold'>Paul Neumann</Card.Title>
                  <Card.Text>
                  Software Engineer and a GIS
                  </Card.Text>
                  <a href="https://github.com/neu4mann" target="_blank">
                  <Button type='button' className='shadow-none' variant="primary"><FontAwesomeIcon className='px-2 mx-2' icon={faGithub} size="2x"  /></Button> </a>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-around">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" class="rounded-circle" src={Image3} />
                <Card.Body className='text-center'>
                  <Card.Title className='bold'>Yulia Sinko</Card.Title>
                  <Card.Text>
                  Software Engineer and a GIS
                  </Card.Text>
                  <a href="https://github.com/bnurmos" target="_blank">
                  <Button type='button' className='shadow-none'  variant="primary"><FontAwesomeIcon className='px-2 mx-2' icon={faGithub} size="2x"  /></Button> </a>
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