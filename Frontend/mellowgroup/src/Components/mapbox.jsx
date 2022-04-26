//const dotenv = require('dotenv').config()
import {
  RulerControl,
  StylesControl,
  CompassControl,
  ZoomControl,
} from "mapbox-gl-controls";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import Map, { Layer, Source, Marker, NavigationControl } from "react-map-gl";
import geoJsonData from "./data/ParksSitesAddress.json";
//import geoJsonData from "./data/ParksSites.geojson";
import "../App.css";
//import parkLogo from "./svg/park-trees.svg";
import ParkIcon from "@mui/icons-material/Park";
//@material-ui/icons

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

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

const Maps = () => {
  const [long, setLong] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(9.4);
  const [viewport, setViewport] = useState();
  const [hoverInfo, setHoverInfo] = useState(null);
  console.log(`geojson data ${typeof geoJsonData}`);
  return (
    <div
      className="mapboxgl-ctrl-group 
                    mapboxgl-ctrl-icon 
                    mapboxgl-ctrl-compass-arrow"
    >
      <Map
        initialViewState={{
          longitude: long,
          latitude: lat,
          center: [-144, 51],
          zoom: zoom,
          pixelRatio: window.devicePixelRatio || 1,
          attributionControl: false,
          logo: false,
          locale: {
            "NavigationControl.ZoomIn": "Zoom in",
            "NavigationControl.ZoomOut": "Zoom out",
          },
        }}
        mapboxAccessToken={AKEY}
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
            {/* `${ZoomView}px` */}
            <button className="park-marker">
              <ParkIcon
                color="error"
                style={{ height: 10 * `${zoom}px`, width: 15 * `${zoom}px` }}
              />
              Sorry, your browser does not support inline SVG.
            </button>
          </Marker>
        ))}

        <div className="sidebar">
          Longitude: {long}| Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl
            onViewportChange={(viewport) => this.setState({ viewport })}
          />
        </div>
      </Map>
    </div>
  );
};

export default Maps;
