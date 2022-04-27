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

const locationString = "location";

const UserMap = () => {
  const [map, setMap] = useState();
  const [userPin, setUserPin] = useState();
  const mapElement = useRef();

  // Return true if the user reveals their location.
  const tryGetLocation = () => {
    if (!navigator.geolocation) return;

    if (sessionStorage.getItem(locationString)) {
      updateLocation();
      setInterval(updateLocation, 5000);
    }

    navigator.geolocation.getCurrentPosition(
      // On success.
      (position) => {
        let coords = position.coords;
        let coordsObject = {
          lon: coords.longitude,
          lat: coords.latitude,
        };
        sessionStorage.setItem(locationString, JSON.stringify(coordsObject));
        updateLocation();
        setInterval(updateLocation, 5000);
      }
    );
  };

  const updateLocation = () => {
    let coordsString = sessionStorage.getItem(locationString);
    let coords = JSON.parse(coordsString);
    map.addLayer(createPinLayer(coords.lon, coords.lat, "me", circleRed));
  };

  const addPins = () => {
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

    addPins();
    tryGetLocation();
  });

  return <div ref={mapElement} style={{ height: "600px", width: "100%" }}></div>;
};

export default UserMap;
