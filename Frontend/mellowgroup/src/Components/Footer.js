import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, Form, FooterLink, FormControl, Row, Button, Col } from 'react-bootstrap';

const Footer = () => {
return (
	<Container  >
		<Row className="bg-success">
    <div class="container-fluid">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Recreation</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Parks</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Campground</a></li>
      </ul>
      <p className="text-center text-dark">&copy; 2021 Company, Inc</p>
      </div>
		</Row>
	</Container>
);
};
export default Footer;
