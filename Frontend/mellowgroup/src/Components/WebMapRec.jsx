import React from "react";
import { Container, Col } from "react-bootstrap";
import "../App.css";
import MapsRec from "./Maps/MapsRec";
import Recreation from "./Recreation/Recreation";


function WebMapRec() {
  return (
    <>
      <div>
        <Container>
          <Col>
            <div className="mapRecTitle">City of Calgary Recreation Map</div>
            <MapsRec />
          </Col>
        </Container>
      </div>
      <Recreation />
    </>
  );
}

export default WebMapRec;
