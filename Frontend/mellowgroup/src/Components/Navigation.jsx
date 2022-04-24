import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { myBLink, myLink, NavbarStyle  } from "./Styles";

function Navigation() {

  return (
    <>
      <Navbar bg="success" expand="lg" className='py-3 mx-auto'>
        <Container fluid>
          <Navbar.Brand style={NavbarStyle}><Link to="/" style={myBLink}>Me<span className='text-danger'>llow</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto mx-auto my-2 my-lg-0" style={myLink} navbarScroll>
              <Link to="/" style={myLink} className="mx-2">Home</Link>
              <Link to="/recreation" style={myLink} className="mx-2">Recreation</Link> 
              <Link to="/parks" style={myLink} className="mx-2">Parks</Link>
              <Link to="/campground" style={myLink} className="mx-2">Campground</Link>
              <Link to="/dashboard" style={myLink} className="mx-2">Dashboard</Link>
              <Link to="/dog" style={myLink} className="mx-2">Dogs</Link>
              <Link to="/about" style={myLink} className="mx-2">About us</Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Link to="/search" style={myLink}><Button className='shadow-none className="mx-2"' variant="outline-dark">Search</Button></Link>
            </Form>
            <Form className="d-flex">
            <Link to="/signup" style={myLink}><Button className='shadow-none mx-2' variant="outline-dark"><FontAwesomeIcon icon={faUserPlus}/>Sign Up</Button></Link>
            </Form>
            <Form className="d-flex">
            <Link to="/signin" style={myLink}><Button className='shadow-none mx-2' variant="outline-dark"><FontAwesomeIcon icon={faRightToBracket}/>Sign In</Button></Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;