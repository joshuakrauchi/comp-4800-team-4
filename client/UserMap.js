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
        center: [26371208.304614782, 6321386.5232699495],
        zoom: 19,
        minZoom: 18.8,
        constrainOnlyCenter: true,
        extent: [26370907.255707346, 6321574.382779852, 26371437.051941108, 6321182.956882908]
        // 26371252.27159731, 6321397.270212819
      }),
    });
    initialMap.on("click", function(e) {
      console.log(e.coordinate);
    })
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
