import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import Images from "../../images/globeBG.png";
import { myRatingStyle, topStyle } from "../Styles/Styles";

const Information = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <div style={topStyle}>
        <Container className="ml-auto">
          <Row className="mt-5">
            <Col>
              {/* <img alt='parks' src={Images}/> */}
              <h1>Why You Should Care About Parks</h1>
              <p>
                Having public parks in your community can provide immense health
                benefits, as the air and water in the area are positively
                affected. Not only do urban parks function as an environmental
                purifier, city parks provide preservation and conservation of
                wildlife and plant life, further highlighting the importance of
                parks.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={myRatingStyle}>
        <Container>
          <Row>
            <Col>
              <img alt="parks" src={Images} />
            </Col>
            <Col className="py-5 my-auto">
              <h2>Mellow Group Technologies</h2>
              <h5>Citizen to City Project</h5>
              <div>
                <Button size="lg" variant="success">
                  React
                </Button>{" "}
                <Button size="lg" variant="warning">
                  Express
                </Button>{" "}
                <Button size="lg" variant="danger">
                  MongoDB
                </Button>{" "}
                <Button size="lg" variant="info">
                  Node
                </Button>{" "}
                <Button size="lg" variant="primary">
                  ReactBootstrap
                </Button>{" "}
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Information;
