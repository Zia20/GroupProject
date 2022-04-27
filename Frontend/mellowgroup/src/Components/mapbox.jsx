import "../App.css";
import {
  RulerControl,
  StylesControl,
  CompassControl,
  ZoomControl,
} from "mapbox-gl-controls";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import Map, {
  Layer,
  Source,
  Popup,
  Marker,
  NavigationControl,
} from "react-map-gl";
import geoJsonData from "./data/ParksSitesAddress.json";
import ParkIcon from "@mui/icons-material/Park";
import RoomIcon from '@mui/icons-material/Room';
import NorthIcon from "@mui/icons-material/North";
import { toggleButtonGroupClasses } from "@mui/material";
import MapRatings from "./MapRatings";

const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

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

const Maps = () => {
  const [long, setLong] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(9.4);
  const [viewport, setViewport] = useState();
  const [selectedPark, setSelectedPark] = useState(null);
  console.log(`geojson data ${typeof geoJsonData}`);
  return (
    <div>
      <Map
        initialViewState={{
          longitude: long,
          latitude: lat,
          center: [-144, 51],
          zoom: zoom,
          width: window.innerWidth,
          height: window.innerHeight,
        }}
        {...viewport} //viewport not working
        mapboxAccessToken={AKEY}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        style={{ width: 1300, height: 660 }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11?optimize=true"
      >
        <Source type="geojson" data={geoJsonData}>
          <Layer {...dataLayer} />
        </Source>

        {geoJsonData.features.map((park) => (
          <Marker
            key={park.properties.asset_cd}
            latitude={parseFloat(park.geometry.coordinates[0][0][0][1])}
            longitude={parseFloat(park.geometry.coordinates[0][0][0][0])}
          >
            <button
              className="park-marker"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <ParkIcon
                color="success"
                // style={{fontSize:viewport.zoom*20 }}
                style={{ height: 5 * `${zoom}px`, width: 9 * `${zoom}px` }}
              />
            </button>
          </Marker>
        ))}

        <button>Home</button>
        <Marker
          latitude={lat}
          longitude={long}
          closeButton={true}
          closeOnClick={false}
        >
          <RoomIcon
            color="error"
            //style={{fontSize:viewport.zoom *20 }}
            style={{ height: 10 * `${zoom}px`, width: 9 * `${zoom}px` }}
          />
        </Marker>
        
        {selectedPark ? (
          <Popup
            latitude={parseFloat(selectedPark.geometry.coordinates[0][0][0][1])}
            longitude={parseFloat(selectedPark.geometry.coordinates[0][0][0][0])}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div className="mapCard">
              <label>Place</label>
              <h4 className="place">Calgary Location</h4>
              <label>Review</label>
              <p className="descInfo">
                This is the best city in Canada. Unexpected weather patterns!.
              </p>
              <label>Ratings</label>
              <MapRatings />
              <label>Information</label>
              <span className="date">1 Hour ago</span>
            </div>
          </Popup>
        ) : null}

        <div className="sidebar">
          Longitude: {long}| Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl
            showCompass={true}
            onViewportChange={(viewport) => this.setState({ viewport })}
          />
        </div>
      </Map>
    </div>
  );
};

export default Maps;
