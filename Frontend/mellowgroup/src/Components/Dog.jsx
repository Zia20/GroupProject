import React from "react";
import { Container, Row } from "react-bootstrap";

const Dog = (props) => {

  const dogLists = props.dogLists;

  return (
    <>
      <Container>
      <h1 className="text-danger">Off leach Dog parks near me</h1>
        <Row>
          <h5>{dogLists.off_leash_area_id}</h5>
          <h5>{dogLists.category}</h5>
          <h5>{dogLists.status}</h5>
          <h5>{dogLists.location}</h5>
          <h5>{dogLists.steward}</h5>
          <h5>{dogLists.opened_dt}</h5>
        </Row>
      </Container>
    </>
  );
};

export default Dog;
