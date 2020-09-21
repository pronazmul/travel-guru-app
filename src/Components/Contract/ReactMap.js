import React, {useState } from 'react';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import '../../App.css'

const ReactMap = () => {
    
  const [mapCenter, setMapCenter] = useState({ lat:21.45388, lng:91.96765});
  const [mapZoom, setMapZoom] = useState(10);
  
  return (
    <div className="map">
        <LeafletMap center={mapCenter} zoom={mapZoom}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
        </LeafletMap>
    </div>
  );
};

export default ReactMap;