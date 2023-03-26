import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { keyGoogleMap } from "../../keys/Keys";
import "./MapPage.css";

const MapPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: keyGoogleMap,
  });

  const position = {
    lat: -8.063331,
    lng: -34.871126,
  };

  return (
    <div className="px-4">
      <p className="font-bold">*Drag the marker to the sending location!</p>
      <div className="w-full h-screen">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={position}
            zoom={15}
          >
            <Marker
              position={position}
              draggable={true}
              options={{
                label: { text: "Send here!", className: "map-marker" },
              }}
            />
          </GoogleMap>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default MapPage;
