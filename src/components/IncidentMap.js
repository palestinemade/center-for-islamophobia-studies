// src/components/IncidentMap.js
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

const IncidentMarker = ({ text }) => <div>{text}</div>;

const IncidentMap = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    fetch('/api/incidents')
      .then(response => response.json())
      .then(data => setIncidents(data));
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBupPQCX9Zm56y45qACeU-TDIod1VAHN9E' }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      >
        {incidents.map(incident => (
          <IncidentMarker
            key={incident._id}
            lat={incident.location.coordinates[1]}
            lng={incident.location.coordinates[0]}
            text={incident.description}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default IncidentMap;