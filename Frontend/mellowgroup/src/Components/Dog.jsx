import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

const Dog = (props) => {

  const dogLists = props.dogLists;
  const [ showModal, setShowModal] = useState(false);
  
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
      <Button>Submit</Button>
      </Container>
    </>
  );
};

export default Dog;
