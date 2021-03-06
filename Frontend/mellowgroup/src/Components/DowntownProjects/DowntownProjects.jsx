import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../images/downtown.png";
import { myDowntown } from "../Styles/Styles";
import ListGroup from "react-bootstrap/ListGroup";

function Downtown() {
  return (
    <div style={myDowntown} className="mt-2">
      <Container>
        <Row>
          <Col>
            <img alt="parks" width="725" height="450" src={Images} />
          </Col>
          <Col className="py-5 my-auto">
            <h2>Join the discussion of all City projects</h2>
            <h5>
              Get involved and provide your input on City projects and programs.
              Together we can build a better community!
            </h5>
            <ListGroup>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/beltlinearp"
                target="_blank" rel="noreferrer"
              >
                Beltline Area Redevelopment Plan: Amendments
              </ListGroup.Item>
              <ListGroup.Item
                variant="info"
                action
                href="https://engage.calgary.ca/stephenavenue"
                target="_blank" rel="noreferrer"
              >
                The future of Stephen Avenue
              </ListGroup.Item>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/CalgarysBird"
                target="_blank" rel="noreferrer"
              >
                Calgary's Bird!
              </ListGroup.Item>
              <ListGroup.Item
                variant="info"
                action
                href="https://engage.calgary.ca/kensingtonarea"
                target="_blank" rel="noreferrer"
              >
                Kensington Area Improvements
              </ListGroup.Item>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/GFLplan"
                target="_blank" rel="noreferrer"
              >
                Greater Forest Lawn Communities Local Area Planning{" "}
              </ListGroup.Item>
              <ListGroup.Item
                variant="info"
                action
                href="https://engage.calgary.ca/crescentroad"
                target="_blank" rel="noreferrer"
              >
                Crescent Road N.W. Master Plan
              </ListGroup.Item>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/inglewoodramsay"
                target="_blank" rel="noreferrer"
              >
                Inglewood / Ramsay Area Projects - Staying Connected{" "}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Downtown;
