//const dotenv = require('dotenv').config()
import React, { useState} from "react";
import Map, {FillLayer, Layer, Source, NavigationControl} from "react-map-gl";
import geoJsonData from './data/ParksSites.geojson';

const AKEY = process.env.REACT_APP_MAPBOX_TOKEN;
const dataLayer: FillLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#3288bd'],
        [1, '#66c2a5'],
        [2, '#abdda4'],
        [3, '#e6f598'],
        [4, '#ffffbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.8
  }
};

const Maps = () => {  
  return (
      <Map
    initialViewState={{
      longitude: -114.0719,
      latitude: 51.0447,
      zoom: 8
    }}
    mapboxAccessToken={AKEY}
    style={{width: 800, height: 600}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Source 
      type="geojson"
      data={geoJsonData}
    >
      <Layer {...dataLayer} />
      </Source>
      <NavigationControl />
    </Map>
  );
};

export default Maps;
