import React, { useState } from "react";
import "../../App.css";
import recData from "../data/recreationData/RecreationMajor.json";

const Search = (props) => {
  const setSearchPark = props.setSearchPark;
  const [searchTerm, setSearchTerm] = useState("");
  const search =() => {
    let selectedPark = recData.findIndex((park)=>{
      return park.Name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
      park.Facilities.toLocaleLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchPark(selectedPark)
  }
  return (
    <div className="search">
      <input type="text" placeholder="Search Recreations..." 
      onKeyUp={(evt) => {
        if (evt.key==="Enter"){
          search()
        }      
      }}
      onChange =
      {(evt) => {
        setSearchTerm(evt.target.value);
      }}/>
    </div>
  );
};

export default Search;
