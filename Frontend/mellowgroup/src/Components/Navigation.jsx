import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";

function Navigation() {

  const NavbarStyle = {
    // color: "white",
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

  return (
    <>
      <Navbar bg="success" expand="lg" className='py-3 mx-auto'>
        <Container fluid>
          <Navbar.Brand style={NavbarStyle}><Link to="/" style={myLink}>Me<span className='text-danger'>llow</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto mx-auto my-2 my-lg-0" style={myLink} navbarScroll>
              <Nav.Link><Link to="/" style={myLink}>Home</Link></Nav.Link>

              <Nav.Link><Link to="/recreation" style={myLink}>Recreation</Link></Nav.Link>

              <Nav.Link><Link to="/parks" style={myLink}>Parks</Link></Nav.Link>

              <Nav.Link><Link to="/campground" style={myLink}>Campground</Link></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Link to="/search" style={myLink}><Button className='shadow-none' variant="outline-dark">Search</Button></Link>
            </Form>
            <Form className="d-flex">
            <Nav.Link><Link to="/signup" style={myLink}><Button className='shadow-none' variant="outline-dark">SignUp</Button></Link></Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;