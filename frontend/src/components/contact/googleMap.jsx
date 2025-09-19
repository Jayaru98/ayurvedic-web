import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = ({ 
  apiKey,
  center = { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco)
  zoom = 15,
  markerPosition,
  width = '100%',
  height = '400px'
}) => {
  const mapContainerStyle = {
    width,
    height,
  };

  // If markerPosition is not provided, use the center
  const actualMarkerPosition = markerPosition || center;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={actualMarkerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;