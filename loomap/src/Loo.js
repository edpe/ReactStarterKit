import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


const Loo = (props) => {
  let coords = props.loo.geometry.coordinates.slice(0).reverse();
  return (
    <div>
      <h3>{props.loo.properties.name}</h3>
      <Map center={coords} zoom={15} style={{height: '200px', width: '300px'}}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={props.loo} />
      </Map>
    </div>
  );
}

export default Loo;
