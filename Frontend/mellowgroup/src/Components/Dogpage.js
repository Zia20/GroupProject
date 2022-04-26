import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Dog from "./Dog";
import offLeash from "./property/dogs.json";
import { signupStyle } from "./Styles";


const Dogpage = () => {

  const [category, setCategory ] = useState('');
  const [status, setStatus ] = useState('');
  const [location, setLocation ] = useState('');
  const [steward, setSteward ] = useState('');
  const [opened_dt, setOpened_dt ] = useState('');
  const [isPending, setIsPending ] = useState(false);
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = { 
      category, 
      status, 
      location, 
      steward,
      opened_dt
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

  return (
    <>
      <Container>
        <Row>
          <h1 className="text-warning">Off leash Dog parks near me</h1>
          {offLeash.map((dogLists, index) => {
            if (index < 3) {
              return <Dog dogLists={dogLists} />;
            }
          })}
          <form onSubmit={handleSubmit}>
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
            <div><br />
            {!isPending && <button className="btn btn-lg btn-primary shadow-none" type="submit">Add Dog</button>}
            {isPending && <button className="btn btn-lg btn-primary shadow-none" disabled type="submit">Adding Dog...</button>}
            </div>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default Dogpage;
