import React from "react";
import WordCount from "./Headers/WordCount";
import Information from "./About/Information";
import Cross from "./Cross/Cross";
import Maps from "./Maps/Maps";
import { Container, Col } from "react-bootstrap";
import Downtown from "./DowntownProjects/DowntownProjects";
import Highlights from "./Headers/Highlights";
import "../App.css";


function Web() {
  return (
    <>
      <WordCount />
      <div>
        <Container>
          <Col>
            <div className="mapTitle">City of Calgary Parks Map</div>
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
