import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DogIds from "./DogIds";

const DogId = (props) => {

    const _id = props._id;
    const [identity, setIdentity] = useState();
    const navigate = useNavigate();

useEffect(() => {
    const getOffLeashId = async() => {
        try {
        let response = await fetch(`/dog/${_id}`);
        let dogData = await response.json();
        console.log(dogData)
        setIdentity(dogData);    
        } catch (error) {
        console.log(error.message);
        }
    }
    getOffLeashId();
    }, [_id]);

    if(!identity){
        return <p>Loading Data...</p>
    }
      navigate(`/dog/${_id}`);
  return (
    <div>
       <label>Category {props.category}</label>
    </div>
  )
}

export default DogId;