import React, { useState } from "react";
import { Button, Container, Modal, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dog from "./Dog";
import SearchDogs from "../Search/SearchDogs";

const Dogpage = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [parcel_location, setParcelLocation] = useState("");
  const [wam_parent_id, setWamParentId] = useState("");
  const [steward, setSteward] = useState("");
  const [maintained_by, setMaintainedBy] = useState("");
  const [opened_dt, setOpened_dt] = useState("");
  const [refresh, setRefresh] = useState(0);

  const [isPending, setIsPending] = useState(false);
  const [show, setShow] = useState(false);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = {
      category,
      status,
      description,
      parcel_location,
      wam_parent_id,
      steward,
      maintained_by,
      opened_dt,
    };

    setIsPending(true);
    const data = JSON.stringify(newDog);
    try {
      const response = await fetch("/dog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      });

      if (response.status === 200) {
        console.log("Success");
        console.log(`Created new Dog List ${data}`);
        setRefresh((n) => n + 1);
        handleClose();
      }
      setIsPending(false);
    } catch (error) {
      console.log(error);
    }

    navigate("/dog");
  };

  if (!filteredDogs) {
    return <p className="mx-auto">Loading Data...</p>;
  }
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-warning">Off leash Dog parks near me</h1>
          <div>
            <SearchDogs setSearchDogs={setFilteredDogs} refresh={refresh} />
          </div>
          {filteredDogs.map((dogLists, index) => {
            if (index < 8) {
              return <Dog dogLists={dogLists} />;
            }
          })}

          {/* <input
            type="text"
            className="shadow-none"
            placeholder="Search Dog Parks"
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          /> */}
          <Button
            variant="success btn-warning shadow-none"
            onClick={handleShow}
          >
            Dog Form
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Off leash Dog Form</Modal.Title>
            </Modal.Header>

            <form className="mx-auto" onSubmit={handleSubmit}>
              <div>
                <label>Category</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Status</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Description</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Location</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={parcel_location}
                  onChange={(event) => {
                    setParcelLocation(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Parent Id</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={wam_parent_id}
                  onChange={(event) => {
                    setWamParentId(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Steward</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={steward}
                  onChange={(event) => {
                    setSteward(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Maintained By</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={maintained_by}
                  onChange={(event) => {
                    setMaintainedBy(event.target.value);
                  }}
                />
              </div>
              <div>
                <label>Opened_dt</label>
                <br />
                <input
                  type="text"
                  className="shadow-none"
                  value={opened_dt}
                  onChange={(event) => {
                    setOpened_dt(event.target.value);
                  }}
                />
              </div>
              <div>
                <br />
                {!isPending && (
                  <button
                    className="btn btn-lg btn-warning shadow-none"
                    type="submit"
                  >
                    Add Dog
                  </button>
                )}
                {isPending && (
                  <button
                    className="btn btn-lg btn-warning shadow-none"
                    disabled
                    type="submit"
                  >
                    Adding Dog...
                  </button>
                )}
              </div>
            </form>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default Dogpage;
