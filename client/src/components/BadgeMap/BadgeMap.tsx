import { useState, useRef, useEffect } from "react";
import Map from "ol/Map";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Point } from "ol/geom";
import "ol/ol.css"

import { tryWatchLocation, addBadgePins, createUserPin, createMap } from "./utilities";
import sentinelsLabel from "../../images/sentinelsLabel.png";

const styles = {
  mapContainer: {
    width: "95%",
  },
  map: {
    zIndex: 0,
    height: 400,
    width: "100%",
    borderRadius: 50,
    overflow: "hidden",
  },
  mapLabel: {
    position: "absolute",
    zIndex: 10,
    marginLeft: 25,
    marginTop: 25,
    height: 50,
  },
};

const BadgeMap = (): JSX.Element => {
  const [map, setMap] = useState(new Map({}));
  const [userPin, setUserPin] = useState(new VectorLayer<VectorSource<Point>>());
  const mapElement = useRef();

  useEffect((): void => {
    if (!map) {
      let createdMap = createMap(mapElement);
      setMap(createdMap);
      return;
    }

    if (!userPin) {
      let newUserPin = createUserPin();
      setUserPin(newUserPin);
      map.addLayer(newUserPin);
      return;
    }

    addBadgePins(map);
    tryWatchLocation(userPin);
  });

  return (
    <div style={styles.mapContainer}>
      <img src={sentinelsLabel} alt="Sentinels of Change Logo" />
      <div style={styles.map} ref={mapElement.current} />
    </div>
  );
};

export default BadgeMap;
