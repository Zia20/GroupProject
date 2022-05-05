import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { myBLink, myLink, NavbarStyle  } from "../Styles/Styles";
import AuthContext from '../PrivateRoute/AuthContext';

function Navigation() {
  
  const authContext = useContext(AuthContext);
  const loggedInUser = authContext.loggedInUser;
  const isAdmin = loggedInUser?.isAdmin;
  console.log(`user is loggedin ${JSON.stringify(loggedInUser) }`)

  return (
    <>
      <Navbar bg="success" expand="lg" className='py-3 mx-auto'>
        <Container fluid>
          <Navbar.Brand style={NavbarStyle}><Link to="/" style={myBLink}>Mel<span className='text-danger'>low</span></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto mx-auto my-2 my-lg-0" style={myLink} navbarScroll>
              <Link to="/" style={myLink} className="mx-2">Home</Link>
              <Link to="/recreation" style={myLink} className="mx-2">Recreation</Link> 
              <Link to="/parks" style={myLink} className="mx-2">Parks</Link>
              <Link to="/engage" style={myLink} className="mx-2">Engage</Link>
              <Link to="/dog" style={myLink} className="mx-2">Dogs</Link>
              <Link to="/about" style={myLink} className="mx-2">About Us</Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Link to="/search" style={myLink}><Button className='shadow-none mx-2' variant="outline-dark">Search</Button></Link>
            </Form>



            {!loggedInUser && (<Form className="d-flex">
            <Link to="/signup" style={myLink}><Button className='shadow-none mx-2' variant="outline-dark"><FontAwesomeIcon icon={faUserPlus}/>Sign Up</Button></Link>
            </Form>)}


            {!loggedInUser && (<Form className="d-flex">
           <Link to="/signin" style={myLink}><Button className='shadow-none mx-2' variant="outline-dark"><FontAwesomeIcon icon={faRightToBracket}/>Sign In</Button></Link>
            </Form>)}


           {loggedInUser && (<Form className="d-flex">
            <Link to="/signin" style={myLink}><Button onClick={() => authContext.logout()} className='shadow-none mx-2' variant="outline-dark"><FontAwesomeIcon icon={faRightToBracket}/>logout</Button></Link>
            </Form>)}

            {loggedInUser && (<Form className="d-flex">
            <Button style={myLink} className="bg-warning shadow-none">{loggedInUser.username}</Button>
            </Form>)}


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;