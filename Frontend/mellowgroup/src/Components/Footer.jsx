import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faGithub, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  const recreated = {
    backgroundImage: "linear-gradient(180deg, #2af598 0%, #009efd 100%)",
    padding: "50px",
  }
  return (
    <div style={recreated}>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Mellow</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Recreation</Nav.Link>
            <Nav.Link href="#pricing">Parks</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon className='px-2 mx-2' icon={faLinkedinIn} size="2x"  />
        <FontAwesomeIcon className='px-2 mx-2' icon={faFacebookF} size="2x" />
        <FontAwesomeIcon className='px-2 mx-2' icon={faGithub} size="2x" />
        <FontAwesomeIcon className='px-2 mx-2' icon={faTwitter} size="2x" />
        </Container>
    </Navbar>
    </div>
  )
}

export default Footer;