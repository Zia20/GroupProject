import * as React from 'react';
//import parksData from "../data/parksData/ParksSitesAddress.json";
import parksData from "../data/parksData/ParksSitesMajor.json";

function ControlPanel(props) {
  return (
    <div className="control-panel">
        {parksData.filter(city => city.Name === 'Downtown').map((city, index) => (
        <div key={`btn-${index}`} className="input">
            <input
            type="radio"
            name="city"
            id={`city-${index}`}
            defaultChecked={city.Name === 'Downtown'}
            onClick={() => props.onSelectParks(city)}
            />
            <label htmlFor={`city-${index}`}>{city.Name}</label>
        </div>
        ))}
    </div>
  );
}

export default ControlPanel;
