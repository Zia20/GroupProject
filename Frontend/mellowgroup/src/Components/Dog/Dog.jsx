import React, { useState } from "react";
import { Card, Container, Row, Col, CardGroup } from "react-bootstrap";

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
        </Row>
      </Container>
    </>
  );
};

export default Dog;
