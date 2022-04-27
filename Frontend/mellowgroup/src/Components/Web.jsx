import React from "react";
import WordCount from "./WordCount";
import Ratings from "./Ratings";
import Cross from "./Cross";
import Maps from "./mapbox";
import { Container, Row, Col, Button } from "react-bootstrap";
import Downtown from "./DowntownProjects";
import Highlights from "./Highlights";

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
      <Downtown />
      <Highlights />
    </>
  );
}

export default Web;
