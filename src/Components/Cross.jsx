import React from 'react';
import Images from "../images/falling_trees.png";

function Cross() {
    const mystyle = {
        color: "white",
        backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        padding: "10px",
        fontFamily: "Arial",
        height: "150px"
      };
  return (
    <div style={mystyle}>
        {/* <img alt='parks' src={Images}/> */}
    </div>
  )
}

export default Cross;