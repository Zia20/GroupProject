import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom"; //Link added April 21 2022 3:30pm
import { Row, Col } from 'react-bootstrap';
// import { a } from "react-router-dom";

const Dashboard = () => {

const sidenav =  {
    height: "100%",
    width: "160px",
    position: "fixed",
    zIndex: "0",
    top: "30",
    marginTop:"300px",
    left: "0",
    bottom: "20px",
    backgroundColor: "grey",
    overflowX: "hidden",
    paddingTop: "20px",
  }


  return (
    <div>
    <Container>
      <Row>
        <div style={sidenav}>
          <div>
            <a className="navbar-brand" href="#">
              Mellow
            </a>
          </div>
          <div>
            <ul >
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Complains</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
        <div className="row content">
          <br />
          <div className="col-sm-9">
            <div className="well bg-info">
              <h4>Mellow</h4>
              <p>Some text..</p>
            </div>
            <div className="row">
              <div className="col-sm-3 bg-danger">
                <div className="well">
                  <h4>Users</h4>
                  <p>1 Million</p>
                </div>
              </div>
              <div className="col-sm-3 bg-primary">
                <div className="well">
                  <h4>Pages</h4>
                  <p>100 Million</p>
                </div>
              </div>
              <div className="col-sm-3 bg-warning">
                <div className="well">
                  <h4>Sessions</h4>
                  <p>10 Million</p>
                </div>
              </div>
              <div className="col-sm-3 bg-info">
                <div className="well">
                  <h4>Bounce</h4>
                  <p>30%</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 bg-secondary">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4 bg-info">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4 bg-danger">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 bg-warning">
                <div className="well">
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4 bg-danger">
                <div className="well">
                  <p>Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Row>
    </Container>
    </div>
  );
};

export default Dashboard;
