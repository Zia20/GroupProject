import React, { useState } from "react";
<<<<<<< HEAD
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";
=======
import { Button, Container, Row } from "react-bootstrap";
>>>>>>> 2b3c80d5f66beae269c8ba7e008955e29923f162

const Dog = (props) => {

  const dogLists = props.dogLists;

  const cardStyles = {
    display: "flex",
    flexDirection: "row",
    flex: "1",
    margin: "2px"
  }
    
  return (
    <>
<<<<<<< HEAD
      <Container style={cardStyles}>
        <Row >
          <Col>
            <Card border="warning" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text>
                    <h3 className="text-danger">{dogLists.off_leash_area_id}</h3>
                    <h6>{dogLists.off_leash_area_id}</h6>
                    <h6>{dogLists.category}</h6>
                    <h6>{dogLists.status}</h6>
                    <h6>{dogLists.description}</h6>
                    <h6>{dogLists.parcel_location}</h6>
                    <h6>{dogLists.wam_parent_id}</h6>
                    <h6>{dogLists.steward}</h6>
                    <h6>{dogLists.maintained_by}</h6>
                    <h6>{dogLists.opened_dt}</h6>
                </Card.Text>
                </Card.Body>
            </Card>
          </Col>
=======
      <Container>
        <Row>
          <h3 className="text-danger">{dogLists.off_leash_area_id}</h3>
          <h6>{dogLists.category}</h6>
          <h6>{dogLists.status}</h6>
          <h6>{dogLists.location}</h6>
          <h6>{dogLists.steward}</h6>
          <h6>{dogLists.opened_dt}</h6>
>>>>>>> 2b3c80d5f66beae269c8ba7e008955e29923f162
        </Row>
      </Container>
    </>
  );
};

export default Dog;
