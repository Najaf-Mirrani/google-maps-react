import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "65vh",
  borderRadius: '20px',
};

/**
 * MapComponent is responsible for displaying the google map on application with all the features and markers. 
 * @param {enter, setCenter, markers, zoom} params are named as their usage. All the params are hooks defined in parent components 
 * @returns 
 */
export const MapComponent = ({ center, setCenter, markers, zoom }) => {
  const mapApiKey = null;
  return (
    <>
      {
        mapApiKey ? 
        <LoadScript googleMapsApiKey="maps-api-key">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.position} title={`${marker?.points}`} />
            ))}
          </GoogleMap>
          </LoadScript>
          : 
          <h2 className="text-slate-100">Please provide google map key in the code</h2>
      }
    </>
  );
};

