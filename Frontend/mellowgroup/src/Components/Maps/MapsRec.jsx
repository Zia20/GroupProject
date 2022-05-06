import "../../App.css";
import { useRef, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";
import Map, {
  Popup,
  Marker,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
} from "react-map-gl";
import { Box, Button, Typography } from "@mui/material";
import recData from "../data/recreationData/RecreationMajor.json";
// import PoolIcon from "@mui/icons-material/Pool";
import SurfingIcon from '@mui/icons-material/Surfing';
import HomeIcon from "@mui/icons-material/Home";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import MapRatings from "./MapRatings";
import SearchRec from "../Search/SearchRec";
import { navStyle, navControlStyle, searchStyle } from "../Styles/Styles";

const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;

const MapsRec = () => {
  const [long, setLong] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(9.4);
  const [selectedPark, setSelectedPark] = useState(null);
  const [viewport, setViewport] = useState();
  const [searchPark, setSearchPark] = useState();

  //  const mapContainer = useRef();

  const initialViewState = {
    //container: mapContainer.current,
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

  //Search Parks
  useEffect(() => {
    if (searchPark > -1) {
      let park = recData[searchPark];
      let parkLat = park.Latitude;
      let parkLong = park.Longitude;
      setViewState((cur) => {
        return {
          ...cur,
          zoom: 13,
          latitude: parkLat,
          longitude: parkLong,
        };
      });
    }
  }, [searchPark]);

  return (
    <div>
      <Map
        initialViewState={initialViewState}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={AKEY}
        style={{ width: 1300, height: 660 }}
        mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
      >
        {recData.map((park) => (
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
              <SurfingIcon zoom={100}
                color="primary"
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={parseFloat(selectedPark.Latitude)}
            longitude={parseFloat(selectedPark.Longitude)}
            closeButton={true}
            closeOnClick={false}
            anchor="left"
          >
            <div className="card-container">
              <label className="popups-label">Place</label>
              <h5 className="place">{selectedPark.Name}</h5>
              <p className="descInfo">{selectedPark.Address}</p>
              <label className="popups-label">Review</label>
              <br />
              <a href="http://localhost:3000/engage">
                <Button>Review</Button>
              </a>
              <br />
              <label className="popups-label">Ratings</label>
              <MapRatings />
              <label className="popups-label">Information</label>
              <p className="descInfo">{selectedPark.Facilities}</p>
              <div className="btn">
                <Button className="btn-button">
                  <a className="a-link">Survey..</a>
                </Button>
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

        <div style={searchStyle}>
          <SearchRec setSearchPark={setSearchPark} />
        </div>

        <div className="nav" style={navStyle}>
          <GeolocateControl />
          <NavigationControl
            showCompass={true}
            onViewportChange={(viewport) => setViewport({ viewport })}
          />
          <ScaleControl />
        </div>
      </Map>
    </div>
  );
};

export default MapsRec;
