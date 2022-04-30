import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DogIds from "./DogIds";

const DogId = (props) => {

    const params = useParams();
    const id = props.id;
    const [identity, setIdentity] = useState();
    const navigate = useNavigate();

useEffect(() => {
    const getOffLeashId = async() => {
        try {
        let response = await fetch(`/dog/${id}`);
        let dogData = await response.json();
        setIdentity(dogData);    
        } catch (error) {
        console.log(error.message);
        }
    }
    getOffLeashId();
    }, [id]);

    if(!identity){
        return <p>Loading Data...</p>
    }
      navigate(`/dog/${id}`);
  return (
    <div>
       <label>Category {props.category}</label>
    </div>
  )
}

export default DogId;