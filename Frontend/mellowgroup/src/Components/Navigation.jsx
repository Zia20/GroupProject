import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar bg="success" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Mellow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto mx-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Recreation</Nav.Link>
              <Nav.Link href="#action2">Parks</Nav.Link>
              <Nav.Link href="#action2">Campground</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;