import "../../App.css";
import React, { useEffect, useState } from "react";
// import offLeash from "../data/property/dogs.json";

const doSearch = async (phrase) => {
  try {
    const response = await fetch(`/dog?description=${phrase}`);
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

const SearchDogs = ({ setSearchDogs, refresh }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const matches = await doSearch(text);
      setSearchDogs(matches);
    })();
  }, [text, setSearchDogs, refresh]);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Dogs..."
        onChange={(evt) => {
          setText(evt.target.value);
        }}
      />
    </div>
  );
};

export default SearchDogs;
