import "ol/ol.css";
import React, { useRef, useEffect } from "react";
import pinData from "./data/pinData";
import circleRed from "./images/circleRed.png";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import createPinLayer from "./utilities/createPinLayer";

const UserMap = () => {
  const mapElement = useRef();

  const addPins = (map) => {
    Object.keys(pinData).forEach((key) => {
      let name = key;
      let crab = pinData[key];

      map.addLayer(createPinLayer(crab.lon, crab.lat, name, circleRed));
    });
  };

  useEffect(() => {
    const map = new Map({
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

    addPins(map);
  }, []);

  return <div ref={mapElement} style={{ height: "600px", width: "100%" }}></div>;
};

export default UserMap;
