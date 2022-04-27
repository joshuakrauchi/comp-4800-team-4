import "ol/ol.css";
import React, { useState, useRef, useEffect } from "react";
import pinData from "./data/pinData";
import circleRed from "./images/circleRed.png";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import createPinLayer from "./utilities/createPinLayer";

const UserMap = () => {
  const [map, setMap] = useState();
  const [userPin, setUserPin] = useState();
  const mapElement = useRef();

  // Try to get the user's position. If allowed, update their position as much as possible.
  const tryWatchLocation = () => {
    if (!navigator.geolocation) return;

    if (!userPin) {
      let newUserPin = createPinLayer(0, 0, "me", circleRed);
      setUserPin(newUserPin);
      map.addLayer(newUserPin);
      return;
    }

    // Update the location if given permission.
    navigator.geolocation.watchPosition(updateLocation);
  };

  const updateLocation = (currentPosition) => {
    let coords = currentPosition.coords;
    userPin.getSource().getFeatures()[0].getGeometry().setCoordinates(fromLonLat([coords.longitude, coords.latitude]));
  };

  const addBadgePins = () => {
    Object.keys(pinData).forEach((key) => {
      let name = key;
      let crab = pinData[key];

      map.addLayer(createPinLayer(crab.lon, crab.lat, name, circleRed));
    });
  };

  const createMap = () => {
    const initialMap = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([37.41, 8.82]),
        zoom: 4,
      }),
    });

    setMap(initialMap);
  };

  useEffect(() => {
    if (!map) {
      createMap();
      return;
    }

    addBadgePins();
    tryWatchLocation();
  });

  return <div ref={mapElement} style={{ height: "600px", width: "100%" }}></div>;
};

export default UserMap;
