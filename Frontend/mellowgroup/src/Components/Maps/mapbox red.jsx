import "../../App.css";
import { useRef, useCallback } from "react";
import ControlPanel from "./controlPanel";
//import MapRef from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";
import Map, { Popup, Marker, NavigationControl } from "react-map-gl";
import geoJsonData from "../data/parksData/ParksSitesMajor.json";
import ParkIcon from "@mui/icons-material/Park";
import RoomIcon from "@mui/icons-material/Room";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import MapRatings from "./MapRatings";

const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;

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
  const [selectedPark, setSelectedPark] = useState(null);
  const [viewport, setViewport] = useState();

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

  const [viewState, setViewState] = useState({
    longitude: -114.0719,
    latitude: 51.0447,
    center: [-144, 51],
    zoom: zoom,
  });

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
        initialViewState={initialViewState}
        {...viewState} //viewport not working
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={AKEY}
        style={{ width: 1300, height: 660 }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11?optimize=true"
      >
        {geoJsonData.map((park) => (
          <Marker
            key={park.Name}
            latitude={park.Latitude}
            longitude={park.Longitude}
          >
            <button
              className="park-marker"
              onClick={(e) => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <ParkIcon
                color="black"
                style={{
                  height: 25 * `${viewState.zoom}px`,
                  width: 15 * `${viewState.zoom}px`,
                }}
              />
              <PersonPinCircleIcon
                color="error"
                //style={{fontSize:viewport.zoom *20 }}
                style={{
                  height: 20 * `${viewState.zoom}px`,
                  width: 20 * `${viewState.zoom}px`,
                }}
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
          <PersonPinCircleIcon
            color="error"
            //style={{fontSize:viewport.zoom *20 }}
            style={{
              height: 20 * `${viewState.zoom}px`,
              width: 20 * `${viewState.zoom}px`,
            }}
          />
        </Marker>

        {selectedPark ? (
          <Popup
            latitude={parseFloat(selectedPark.Latitude)}
            longitude={parseFloat(selectedPark.Longitude)}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div className="card-container">
              <label>Place</label>
              <h5 className="place">{selectedPark.Name}</h5>
              <p className="descInfo">{selectedPark.Address}</p>
              <label>Review</label>
              <p className="descInfo">
                {selectedPark.Longitude}
                {selectedPark.Latitude}
              </p>
              <label>Ratings</label>
              <MapRatings />
              <label>Information</label>
              <p className="descInfo">{selectedPark.Description}</p>
              <div className="btn">
                <button className="btn-button">
                  <a className="a-link">Survey..</a>
                </button>
              </div>
            </div>
          </Popup>
        ) : null}

        <div className="sidebar">
          Longitude: {viewState.longitude.toFixed(2)}| Latitude:{" "}
          {viewState.latitude.toFixed(2)} | Zoom: {viewState.zoom.toFixed(2)}
          <div ref={mapRef}></div>
        </div>

        <button>
          <HomeIcon
            className="home"
            onClick={(evt) => setViewState(initialViewState)}
          />
        </button>

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
