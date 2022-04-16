import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <FontAwesomeIcon icon={['fal', 'code']} />
        </Container>
    </Navbar>
    </div>
  )
}

export default Footer;