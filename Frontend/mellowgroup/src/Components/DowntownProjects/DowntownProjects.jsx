import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../../images/downtown.png";
import { myDowntown } from "../Styles/Styles";
import ListGroup from "react-bootstrap/ListGroup";

function Downtown() {
  return (
    <div style={myDowntown}>
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
                rel="opener"
              >
                Beltline Area Redevelopment Plan: Amendments
              </ListGroup.Item>
              <ListGroup.Item
                variant="info"
                action
                href="https://engage.calgary.ca/stephenavenue"
                rel="opener"
              >
                The future of Stephen Avenue
              </ListGroup.Item>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/CalgarysBird"
                rel="opener"
              >
                Calgary's Bird!
              </ListGroup.Item>
              <ListGroup.Item
                variant="info"
                action
                href="https://engage.calgary.ca/kensingtonarea"
                rel="opener"
              >
                Kensington Area Improvements
              </ListGroup.Item>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/GFLplan"
                rel="opener"
              >
                Greater Forest Lawn Communities Local Area Planning{" "}
              </ListGroup.Item>
              <ListGroup.Item
                variant="info"
                action
                href="https://engage.calgary.ca/crescentroad"
                rel="opener"
              >
                Crescent Road N.W. Master Plan
              </ListGroup.Item>
              <ListGroup.Item
                variant="danger"
                action
                href="https://engage.calgary.ca/inglewoodramsay"
                rel="opener"
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
