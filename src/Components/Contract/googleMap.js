import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap
  } from "react-google-maps";



function Map() {
  
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
       />
     )}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function googleMap() {
  return (
    <div className='h-100 w-100'>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
