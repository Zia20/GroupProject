import React from "react";
import WordCount from "./Headers/WordCount";
import Information from "./About/Information";
import Cross from "./Cross/Cross";
import Maps from "./Maps/Maps";
import { Container, Col } from "react-bootstrap";
import Downtown from "./DowntownProjects/DowntownProjects";
import Highlights from "./Headers/Highlights";

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

      <Information />
      <Cross />
      <Downtown />
      <Highlights />
    </>
  );
}

export default Web;
