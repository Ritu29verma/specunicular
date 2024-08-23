import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ center }) => {
  const mapRef = useRef(null); // Reference to the map container
  const mapInstance = useRef(null); // Reference to the map instance
  const markerInstance = useRef(null); // Reference to the marker instance

  useEffect(() => {
    // Initialize the map only if it hasn't been initialized
    if (mapInstance.current === null) {
      mapInstance.current = L.map(mapRef.current).setView(center, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance.current);

      // Initialize the marker
      markerInstance.current = L.marker(center).addTo(mapInstance.current)
        .bindPopup('Selected Location')
        .openPopup();
    } else {
      // If the map is already initialized, just update the center
      mapInstance.current.setView(center, 13);

      // Update the marker position
      markerInstance.current.setLatLng(center).openPopup();
    }

    // Cleanup function to remove the map instance when the component unmounts
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove(); // Properly remove the map instance
        mapInstance.current = null; // Reset the reference
        markerInstance.current = null; // Reset the marker reference
      }
    };
  }, [center]);

  return (
    <div
      ref={mapRef}
      style={{ height: '400px', width: '100%' }}
    />
  );
};

export default MapComponent;
