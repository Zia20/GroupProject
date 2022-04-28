import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

const Dog = (props) => {

  const dogLists = props.dogLists;
    
  return (
    <>
      <Container>
        <Row>
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
        </Row>
      </Container>
    </>
  );
};

export default Dog;
