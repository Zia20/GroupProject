import React from "react";
import WordCount from "./WordCount";
import Ratings from "./Ratings";
import Cross from "./Cross";
import Maps from "./mapbox";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Web() {
  return (
    <>
      <WordCount />
      <div>
        <Container>
          <Col>
            <Maps />
          </Col>
        </Container>
      </div>

      <Ratings />
      <Cross />
    </>
  );
}

export default Web;
