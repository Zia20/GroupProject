import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
// import { a } from "react-router-dom";

const Dashboard = () => {

const sidenav =  {
    height: "100%",
    width: "170px",
    position: "fixed",
    zIndex: "0",
    top: "30",
    // marginTop:"200px",
    left: "0",
    // bottom: "30px",
    backgroundColor: "CadetBlue",
    overflowX: "hidden",
    paddingTop: "20px",
  }


  return (
    <div>
    <Container fluid='md'>
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
        
        <div className="container fluid='md'">
        {/* <div class="row justify-content-sm-center mb-5"> */}
        <div className="row content mb-5" >
          <div className="col-lg-12 px-1 mx-5 ">
            <div className="well bg-info d-block p-5 mb-1 text-white text-center">
              <h4>Mellow</h4>
              <p>Some text..</p>
            </div>
            <div className="row content">
              <div className="col-sm-3 bg-danger d-block p-4 text-white">
                <div className="well">
                  <h4>Users</h4>
                  <p>1 Million</p>
                </div>
              </div>
              <div className="col-sm-3 bg-primary d-block p-4 text-white">
                <div className="well">
                  <h4>Pages</h4>
                  <p>100 Million</p>
                </div>
              </div>
              <div className="col-sm-3 bg-warning d-block p-4 text-white">
                <div className="well">
                  <h4>Sessions</h4>
                  <p>10 Million</p>
                </div>
              </div>
              <div className="col-sm-3 bg-dark d-block p-4 text-white">
                <div className="well">
                  <h4>Bounce</h4>
                  <p>30%</p>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-sm-4 bg-secondary d-block p-4 text-white">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4 bg-info d-block p-4 text-white">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4 bg-danger d-block p-4 text-white">
                <div className="well">
                  <p>Text</p>
                  <p>Text</p>
                  <p>Text</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8 bg-warning d-block p-4 text-white">
                <div className="well">
                  <p>Text</p>
                </div>
              </div>
              <div className="col-sm-4 bg-danger d-block p-4 text-white">
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
