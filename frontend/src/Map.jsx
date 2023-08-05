import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    maplibregl.accessToken = 'YOUR_MAPLIBRE_ACCESS_TOKEN';
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://api.maptiler.com/maps/streets/style.json?key=YOUR_MAPTILER_ACCESS_TOKEN',
      center: [longitude, latitude],
      zoom: 10,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default Map;
