import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function Navigation() {

  const NavbarStyle = {
    padding: "10px",
    fontFamily: "Cursive",
    marginLeft: "10px",
    fontSpacing: "20px"
  }
  const myLink = {
    textDecoration: "none",
    fontSize: "20px",
    color: "black",
    shadow:"none"
  }
  const myBLink = {
    textDecoration: "none",
    fontSize: "25px",
    color: "black",
    shadow:"none"
  }

  return (
    <>
      <Navbar bg="warning" expand="lg" className='py-3 mx-auto'>
        <Container fluid>
          <Navbar.Brand style={NavbarStyle}><Link to="/" style={myBLink}>Me<span className='text-danger'>llow</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto mx-auto my-2 my-lg-0" style={myLink} navbarScroll>
              <Nav.Link><Link to="/" style={myLink}>Home</Link></Nav.Link> 
              <Nav.Link><Link to="/recreation" style={myLink}>Recreation</Link></Nav.Link> 
              <Nav.Link><Link to="/parks" style={myLink}>Parks</Link></Nav.Link> 
              <Nav.Link><Link to="/campground" style={myLink}>Campground</Link></Nav.Link>
              <Nav.Link><Link to="/about" style={myLink}>About us</Link></Nav.Link> 

            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Link to="/search" style={myLink}><Button className='shadow-none' variant="outline-dark">Search</Button></Link>
            </Form>
            <Form className="d-flex">
            <Nav.Link><Link to="/signup" style={myLink}><Button className='shadow-none' variant="outline-dark"><FontAwesomeIcon icon={faRightToBracket}/>Sign In</Button></Link></Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;