import "../../App.css";
import { useRef, useCallback } from "react";
import ControlPanel from "./controlPanel";
//import MapRef from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect } from "react";
import Map, {
  Popup,
  Marker,
  NavigationControl,
  GeolocateControl,
  ScaleControl
} from "react-map-gl";
import geoJsonData from "../data/parksData/ParksSitesMajor.json";
import ParkIcon from "@mui/icons-material/Park";
import HomeIcon from "@mui/icons-material/Home";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
//import PinDropIcon from "@mui/icons-material/PinDrop";
//import RoomIcon from "@mui/icons-material/Room";
import MapRatings from "./MapRatings";
import Search from "../Search/Search";
import { navStyle, navControlStyle, searchStyle } from "../Styles/Styles";

const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;

const Maps = () => {
  const [long, setLong] = useState(-114.0719);
  const [lat, setLat] = useState(51.0447);
  const [zoom, setZoom] = useState(9.4);
  const [selectedPark, setSelectedPark] = useState(null);
  const [viewport, setViewport] = useState();
  const [searchPark, setSearchPark] = useState();

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

  //Search Parks
  useEffect(() => {
    if (searchPark > -1) {
      let park = geoJsonData[searchPark];
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
                color="light blue"
                style={{
                  height: 25 * `${viewState.zoom}px`,
                  width: 15 * `${viewState.zoom}px`,
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
              <label className="popups-label">Place</label>
              <h5 className="place">{selectedPark.Name}</h5>
              <p className="descInfo">{selectedPark.Address}</p>
              <label className="popups-label">Review</label><br/>
              <a href="http://localhost:3000/engage">
                <button>
                  Review
                </button>
              </a><br/>
              <label className="popups-label">Ratings</label>
              <MapRatings /><br/>
              <label className="popups-label">Information</label>
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

        <div style={searchStyle}>
          <Search setSearchPark={setSearchPark} />
        </div>

        <div className="nav" style={navStyle}>
          <GeolocateControl />
          <NavigationControl
            showCompass={true}
            onViewportChange={(viewport) => setViewport({ viewport })}
          />
          <ScaleControl/>
        </div>
      </Map>
      <ControlPanel onSelectParks={onSelectParks} />
    </div>
  );
};

export default Maps;
