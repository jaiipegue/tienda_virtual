import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAFlUnrNQ-taIAqxouu6XlDIHbeDZHJScw">
      <GoogleMap mapContainerStyle={mapStyle} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
