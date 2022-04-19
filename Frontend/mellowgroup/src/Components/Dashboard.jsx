import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar } from 'react-bootstrap';


const Dashboard = () => {
  return (
    <div>
      <Navbar className="navbar navbar-inverse visible-xs">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href="#">
              Mellow
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="Navbar navbar-Navbar">
              <li className="active">
                <Link href="#">Dashboard</Link>
              </li>
              <li>
                <Link href="#">Complains</Link>
              </li>
              <li>
                <Link href="#">Signup</Link>
              </li>
              <li>
                <Link href="#">Ratings</Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>

      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav hidden-xs">
            <h2>Logo</h2>
            <ul className="Navbar Navbar-pills Navbar-stacked">
              <li className="active">
                <Link href="#section1">Dashboard</Link>
              </li>
              <li>
                <Link href="#section2">Age</Link>
              </li>
              <li>
                <Link href="#section3">Gender</Link>
              </li>
              <li>
                <Link href="#section3">Geo</Link>
              </li>
            </ul>
            <br />
          </div>
          <br />

          <div className="col-sm-9">
            <div className="well bg-success">
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
    </div>
  );
};

export default Dashboard;
