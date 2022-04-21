import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


const Dashboard = () => {

  const mySideBar= {
    top: "0",
    display: "flex",
    left: "0",
    position: "fixed",
    height:"100%",
    width: "10%",
    paddingTop: "20px",
    backgroundImage:"linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)",
  }
  const mySideLink= {
    padding: "6px 8px 6px 16px",
    textDecoration: "none",
    fontSize: "25px",
    display: 'block',
  }

  return (
    <>
      <Container style={mySideBar}>
        <Row className="d-flex">
          <Col>
          <Nav style={mySideLink} className="me-auto mx-auto my-2 my-lg-0">
              <Link to="/"  className="mx-2">Home</Link>
              <Link to="/recreation"  className="mx-2">Recreation</Link> 
              <Link to="/parks" className="mx-2">Parks</Link>
              <Link to="/campground" className="mx-2">Campground</Link>
              <Link to="/about" className="mx-2">About us</Link>
              <Link to="/dashboard" className="mx-2">Dashboard</Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
