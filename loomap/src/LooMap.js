import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


const LooMap = (props) => {
  let lcods = props.loos.map(loo => loo.geometry.coordinates.slice(0).reverse());
  let bounds = new L.LatLngBounds(lcods);
  return (
      <Map bounds={bounds} style={{height: '600px', width: '500px'}}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {props.loos.map((loo) => {
          let coords = loo.geometry.coordinates.slice(0).reverse();
          return <Marker position={coords} key={loo._id} />;
        })}
      </Map>
  );
}

export default LooMap;
