import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import 'dotenv/config'
const GoogleKey = "";  //Google Api Key goes here.

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


