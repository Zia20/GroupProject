import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import Dog from "./Dog";


const DogIds = (props) => {

  const params = useParams();
  const id = props.id;
    
  return (
    <>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Dogs</Card.Header>
        <Card.Body>
          <Card.Text>
            <h6>{id.off_leash_area_id}</h6>
            <h6>{id.category}</h6>
            <h6>{id.status}</h6>
            <h6>{id.description}</h6>
            <h6>{id.parcel_location}</h6>
            <h6>{id.wam_parent_id}</h6>
            <h6>{id.steward}</h6>
            <h6>{id.maintained_by}</h6>
            <h6>{id.opened_dt}</h6>
            <h6>{id.createdAt}</h6>
            <h6>{id.updatedAt}</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default DogIds;
