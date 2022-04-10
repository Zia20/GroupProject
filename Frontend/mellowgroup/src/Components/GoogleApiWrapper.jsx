import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import 'dotenv/config'
const GoogleKey = "";  //Google Api Key goes here.

const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 41.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 41.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 2.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 41.3797,
        lng: 2.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 2.1915
      },
    }
  ];

const GoogleApiWrapper = () => {

    // const markerStyle = {
    //     height: "50px",
    //     width: "50px",
    //     marginTop: "-50px"
    // }

    const mapStyles = {
        height: "400px",
        width: "75%",
        marginLeft: "50px",
        marginRight: "50px",
        marginBottom: "30px"
        
    };

    const mainCenter = {
        lat: 51.0486,
        lng: -114.0708
    };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: GoogleKey
    });

    const [ map, setMap ] = React.useState(null);
    const onLoad = React.useCallback(function callback(map){
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map){
        setMap(null)
    }, [])

  return isLoaded ? (
    <GoogleMap 
        mapContainerStyle={mapStyles}
        center={mainCenter}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
    />
  ) : <></>
}
export default GoogleApiWrapper;


