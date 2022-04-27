import * as React from 'react';
import parksData from "../data/parksData/ParksSitesAddress.json";

const values = Object.values(parksData);

console.log(values.filter(category => category.properties));
function ControlPanel(props) {
  return (
    <div className="control-panel">
        {values.filter(category => category.properties === 'CALGARY PARK').map((category, index) => (
        <div key={`btn-${index}`} className="input">
            <input
            type="radio"
            name="category"
            id={`category-${index}`}
            defaultChecked={category.planning_category === 'Calgary Park'}
            onClick={() => props.onSelectParks(category)}
            />
            <label htmlFor={`category-${index}`}>{category.properties}</label>
        </div>
        ))}
    </div>
  );
}

export default ControlPanel;
