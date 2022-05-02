import React, { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
// import jwt from "jsonwebtoken";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signin");
  }

const sidenav =  {
    height: "100%",
    width: "220px",
    position: "fixed",
    zIndex: "0",
    top: "30",
    left: "0",
    backgroundColor: "CadetBlue",
    overflowX: "hidden",
    paddingTop: "20px",
  }

  return (
    <>
      <div style={sidenav} >
        <ul className="list-unstyled mx-2 text-success unline-none">
          <h1><li><a href="#" className="f-50 text-decoration-none">Dashboard</a></li></h1>
          <h1><li><a href="#" className="f-50 text-decoration-none">Recreation</a></li></h1>
          <h1><li><a href="#" className="f-50 text-decoration-none">Complains</a></li></h1>
          <h1><li><a href="#" className="f-50 text-decoration-none">Signups</a></li></h1>
          <h1><li><a href="#" className="f-50 text-decoration-none" onClick={handleLogout}>Logout</a></li></h1>
        </ul>
      </div>
      <div>
        <div className="bg-info p-5 mb-1 text-white text-center">
          <h4>Mellow</h4>
          <p>Calgary Citizen Reporting</p>
        </div>
        <div className="row w-75 mx-auto text-align-center mt-2">
          <div className="col-sm-3 bg-danger  p-4 text-white">
            <h4>Park Users</h4>
            <p>10K</p>
          </div>
          <div className="col-sm-3 bg-primary  p-4 text-white">
            <h4>Cases Resolve</h4>
            <p>1K</p>
          </div>
          <div className="col-sm-3 bg-warning  p-4 text-white">
            <h4>Total Complains</h4>
            <p>10 Million</p>
          </div>
          <div className="col-sm-3 bg-dark  p-4 text-white">
            <h4>Citizen Safety</h4>
            <p>30%</p>
          </div>
        </div>
        <div className="row w-75 mx-auto text-align-center mt-2">
          <div className="col-sm-4 bg-secondary  p-4 text-white">
            <p>Dog Area Searches</p>
            <p>Dog Incident</p>
            <p>Maintenance</p>
          </div>
          <div className="col-sm-4 bg-info  p-4 text-white">
            <p>Hospital Report</p>
            <p>911 Calls</p>
            <p>Emergencey</p>
          </div>
          <div className="col-sm-4 bg-danger  p-4 text-white">
            <p>Wildlife</p>
            <p>Injuries</p>
            <p>Signs</p>
          </div>
        </div>
        <div className="row w-75 mx-auto text-align-center mt-2">
          <div className="col-sm-6 bg-warning  p-4 text-white">
            <h3>Complains Resolve</h3>
            <p>30% Cases resolved</p>
          </div>
          <div className="col-sm-6 bg-primary p-4 text-white">
            <p>Wildlife Interactions</p>
          </div>
        </div>
        <div className="row w-75 mx-auto text-align-center mt-2">
          <div className="col-sm-6 bg-dark  p-4 text-white">
            <h3>Overal</h3>
            <p>30% Cases resolved</p>
          </div>
          <div className="col-sm-6 bg-success p-4 text-white">
            <p>Improvemnts</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
