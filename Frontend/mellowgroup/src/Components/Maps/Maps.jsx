import "../../App.css";
import { useRef, useCallback } from "react";
import ControlPanel from "./controlPanel";
//import MapRef from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";
import Map, {
  Layer,
  Source,
  Popup,
  Marker,
  NavigationControl,
} from "react-map-gl";
import geoJsonData from "../data/parksData/ParksSitesAddress.json";
import ParkIcon from "@mui/icons-material/Park";
import RoomIcon from "@mui/icons-material/Room";
import HomeIcon from "@mui/icons-material/Home";
//import { Card, Typography, Link } from "@mui/material";
//import { toggleButtonGroupClasses } from "@mui/material";
import MapRatings from "./MapRatings";
import MdNorth from "react-icons"

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

const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
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

  const mapContainer = useRef();

  const initialViewState = {
    container: mapContainer.current,
    longitude: long,
    latitude: lat,
    center: [-144, 51],
    zoom: zoom,
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const mapRef = useRef(null);
  // {*mapRef.current.animateToRegion*}

  const onSelectParks = useCallback(({ long, lat }) => {
    mapRef.current?.flyTo({ center: [long, lat], duration: 2000 });
  }, []);

  //popup escape
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
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

        <Marker
          latitude={lat}
          longitude={long}
          closeButton={true}
          closeOnClick={false}
        >
          <RoomIcon
            color="error"
            //style={{fontSize:viewport.zoom *20 }}
            style={{ height: 15 * `${zoom}px`, width: 15 * `${zoom}px` }}
          />
        </Marker>

        {selectedPark ? (
          <Popup
            latitude={parseFloat(selectedPark.geometry.coordinates[0][0][0][1])}
            longitude={parseFloat(
              selectedPark.geometry.coordinates[0][0][0][0]
            )}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div className="card-container">
              <label>Place</label>
              <h5 className="place">{selectedPark.properties.steward}</h5>
              <p className="descInfo">{selectedPark.properties.street}</p>
              <label>Review</label>
              <p className="descInfo">
                This is the best city in Canada. Unexpected weather patterns!.
              </p>
              <label>Ratings</label>
              <MapRatings />
              <label>Information</label>
              <p className="descInfo">{selectedPark.properties.minortype}</p>
              <div className="btn">
                <button className="btn-button">
                  <a className="a-link">Survey..</a>
                </button>
              </div>
            </div>
          </Popup>
        ) : null}

        <div className="sidebar">
          Longitude: {long}| Latitude: {lat} | Zoom: {zoom}
        <div ref={mapRef} ></div>
        </div>

        <div>
          <HomeIcon
            className="home"
            onClick={initialViewState}
          />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl
            showCompass={true}
            onViewportChange={(viewport) => setViewport({ viewport })}
          />
        </div>
      </Map>
      <ControlPanel onSelectParks={onSelectParks} />
    </div>
  );
};

export default Maps;
