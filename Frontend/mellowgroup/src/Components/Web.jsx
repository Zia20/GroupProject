import React from "react";
import WordCount from "./WordCount";
import Ratings from "./Ratings";
import Cross from "./Cross";
import Maps from "./mapbox";
import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
import WordCount from './WordCount';
import Ratings from './Ratings';
import Cross from './Cross';
import Maps from "./Maps";
import Downtown from "./DowntownProjects";
import Highlights from './Highlights';

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
        <WordCount />
        <Cross />
        <Ratings/>
        <Downtown />
        <Maps />
        <Highlights />
        {/* <GoogleApiWrappers /> */}
    </>
  );
}

export default Web;
