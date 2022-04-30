import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF, faGithub, faLinkedinIn, faTwitter , } from '@fortawesome/free-brands-svg-icons';
import { footerStyles } from "../Styles/Styles";

const Footer = () => {

  return (
    <div style={footerStyles} className='mt-2'>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand to="/">Mellow</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Recreation</Nav.Link>
            <Nav.Link >Parks</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            &copy; Mellow 2022
            </Nav.Link>
          </Nav>
        </Navbar.Collapse><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className='px-2 mx-2' icon={faLinkedinIn} size="2x"  /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className='px-2 mx-2' icon={faFacebookF} size="2x" /></a>
        <a href="https://www.github.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className='px-2 mx-2' icon={faGithub} size="2x" /></a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className='px-2 mx-2' icon={faTwitter} size="2x" /></a>
        </Container>
    </Navbar>
    </div>
  )
}

export default Footer;