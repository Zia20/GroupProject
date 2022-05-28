import React, { useState } from "react";
import "../../App.css";
import geoJsonData from "../data/parksData/ParksSitesMajor.json";

const Search = (props) => {
  const setSearchPark = props.setSearchPark;
  const [searchTerm, setSearchTerm] = useState("");
  const search = () => {
    let selectedPark = geoJsonData.findIndex((park) => {
      return (
        park.Name.toLocaleLowerCase().includes(searchTerm.toLowerCase()) ||
        park.Address.toLocaleLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchPark(selectedPark);
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Parks..."
        onKeyUp={(evt) => {
          if (evt.key === "Enter") {
            search();
          }
        }}
        onChange={(evt) => {
          setSearchTerm(evt.target.value);
        }}
      />
    </div>
  );
};

export default Search;
