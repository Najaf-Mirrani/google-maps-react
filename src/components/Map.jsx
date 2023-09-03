import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "65vh",
  borderRadius: '20px',
};

export const MapComponent = ({ center, setCenter, markers, zoom }) => {

  return (
    <LoadScript googleMapsApiKey="google-maps-key">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} title={`${marker?.points}`} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
