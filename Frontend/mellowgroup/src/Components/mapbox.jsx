//const dotenv = require('dotenv').config()
import { RulerControl, StylesControl, CompassControl, ZoomControl } from 'mapbox-gl-controls';
import React, { useState } from "react";
import Map, { Layer, Source, Marker, NavigationControl } from "react-map-gl";
import geoJsonData from "./data/community_parks.geojson";
//import geoJsonData from './data/district_parks.geojson';
//import geoJsonData from './data/regional_parks.geojson';
//import geoJsonData from "./data/special_parks.geojson";
//import geoJsonData from './data/ParksSites_r.geojson';
//import geoJsonData from './data/ParksSites.geojson';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}


const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;
const dataLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#3288bd"],
        [1, "#66c2a5"],
        [2, "#abdda4"],
        [3, "#e6f598"],
        [4, "#ffffbf"],
        [5, "#fee08b"],
        [6, "#fdae61"],
        [7, "#f46d43"],
        [8, "#d53e4f"],
      ],
    },
    "fill-opacity": 0.8,
  },
};

const navControlStyle = {
  right: 10,
  top: 10,
};

const Maps = (props) => {
  const [viewport, setViewport] = useState();
  return (
    <div className="mapboxgl-ctrl-group 
                    mapboxgl-ctrl-icon 
                    mapboxgl-ctrl-compass-arrow" >
      
      <Map
        initialViewState={{
          longitude: -114.0719,
          latitude: 51.0447,
          center: [-144, 51],
          zoom: 9.4,
          pixelRatio: window.devicePixelRatio || 1,
          attributionControl: false,
          logo: false,
        }}
          
          mapboxAccessToken={AKEY}
          style={{ width: 800, height: 660 }}
          mapStyle="mapbox://styles/mapbox/outdoors-v11?optimize=true"  
      >
        <Source type="geojson" data={geoJsonData}>
          <Layer
            {...dataLayer}
              onViewportChange={(viewport) => {
                setViewport(viewport);
            }}
          />
        </Source>
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={viewport} />
        </div>

        <div className="sidebar">
          Longitude: {}| Latitude: {} | Zoom: {}
        </div>
  
        {/* {geoJsonData.features.map((park) => (
          <Marker key={park.properties.site_name}
          latitude={park.geometry.coordinates[0][0][1]}
          longitude={park.geometry.coordinates[0][0][0]}
          >
            <div>PARKS</div>
          </Marker>
        ))}  */}
      </Map>
    </div>
  );
};

export default Maps;
