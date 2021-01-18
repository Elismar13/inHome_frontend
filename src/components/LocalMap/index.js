import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { MapRoot, MapCardTitle } from './styles';

function LocalMap({ centerPosition, devicesPositions }) {
  return (
    <MapRoot>
      <MapCardTitle>Dispositivos</MapCardTitle>
      <MapContainer 
        style={{height: 400, width: "100%"}}
        center={centerPosition}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {devicesPositions.map((device) => (
          <Marker position={ device.location.coordinates } >
            <Popup>
              {`${device.ambient} - ${device.device_id}\n${device.device_name}\n`}
            </Popup>
          </Marker>
        ))}       
      </MapContainer>
      <style jsx>
        {`
          .leaflet-container {
            height: 20rem !important;
            width: 100%;
            margin: 0 auto;
          }
        `}
      </style>
    </MapRoot>
  );
}

export default LocalMap;