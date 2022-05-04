import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dog from "./Dog";
import offLeash from "../data/property/dogs.json";
import { signupStyle } from "../Styles/Styles";


const Dogpage = () => {

  

  const [offLeashList, setOffLeashList] = useState();
  const [category, setCategory ] = useState('');
  const [status, setStatus ] = useState('');
  const [location, setLocation ] = useState('');
  const [steward, setSteward ] = useState('');
  const [opened_dt, setOpened_dt ] = useState('');
  const [createdAt, setcreatedAt] = useState('');
  const [updatedAt, setupdatedAt ] = useState('');
  const [isPending, setIsPending ] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const navigate = useNavigate();
  
  useEffect(() => {
    const getOffLeashList = async() => {
      
      try {
        let response = await fetch('/dog');
        let dogData = await response.json();
        return setOffLeashList(dogData);
  
      } catch (error) {
        console.log(error.message);
      }
    }
    getOffLeashList();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = { 
      category, 
      status, 
      location, 
      steward,
      opened_dt,
      createdAt,
      updatedAt
    };

    setIsPending(true);
    const data = JSON.stringify(newDog)
      try {
       const response = await fetch("/dog", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: data,
        })

        if(response.statusCode === 200){
          console.log("Success");
          console.log(`Created new Dog List ${data}`);
        }
        setIsPending(false)
      } catch (error) {
        console.log(error)
      }

      navigate("/dog")
  }

  if(!offLeashList){
    return <p className="mx-auto">Loading Data...</p>
}
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-warning">Off leash Dog parks near me</h1>
          {offLeashList.map((dogLists, index) => {
            if (index < 8) {
              return <Dog dogLists={dogLists} />;
            }
          })}

          <input type="text" className="shadow-none" placeholder="Search Dog Parks" value={category} onChange={ (event) => {setCategory(event.target.value)} } />
          <Button variant="success btn-warning shadow-none" onClick={handleShow}>Dog Form</Button>
          <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>Off leash Dog Form</Modal.Title>
          </Modal.Header>
          
          <form className="mx-auto" onSubmit={handleSubmit}>
            <div>
            <label>Category</label><br />
              <input type="text" className="shadow-none" value={category} onChange={ (event) => {setCategory(event.target.value)} } />
            </div>
            <div>
              <label>Status</label><br />
              <input type="text" className="shadow-none" value={status} onChange={ (event) => {setStatus(event.target.value)} } />
            </div>
            <div>
              <label>Location</label><br />
              <input type="text" className="shadow-none" value={location} onChange={ (event) => {setLocation(event.target.value)} } />
            </div>
            <div>
              <label>Steward</label><br />
              <input type="text" className="shadow-none" value={steward} onChange={ (event) => {setSteward(event.target.value)} } />
            </div>
            <div >
              <label>Opened_dt</label><br />
              <input type="text" className="shadow-none" value={opened_dt} onChange={ (event) => {setOpened_dt(event.target.value)} } />
            </div>
            <div >
              <label>createdAt</label><br />
              <input type="text" className="shadow-none" value={createdAt} onChange={ (event) => {setcreatedAt(event.target.value)} } />
            </div>
            <div >
              <label>updatedAt</label><br />
              <input type="text" className="shadow-none" value={updatedAt} onChange={ (event) => {setupdatedAt(event.target.value)} } />
            </div>
            <div><br />
            {!isPending && <button className="btn btn-lg btn-warning shadow-none" type="submit">Add Dog</button>}
            {isPending && <button className="btn btn-lg btn-warning shadow-none" disabled type="submit">Adding Dog...</button>}
            </div>
          </form>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default Dogpage;
