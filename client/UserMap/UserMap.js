import { useState, useRef, useEffect } from "react";
import "ol/ol.css"

import { tryWatchLocation, addBadgePins, addUserPin, createMap } from "./mapUtilities";
import sentinelsLabel from "../images/sentinelsLabel.png";

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

const UserMap = () => {
  const [map, setMap] = useState();
  const [userPin, setUserPin] = useState();
  const mapElement = useRef();

  useEffect(() => {
    if (!map) {
      let createdMap = createMap(mapElement);
      setMap(createdMap);
      return;
    }

    if (!userPin) {
      let newUserPin = addUserPin(map);
      setUserPin(newUserPin);
      map.addLayer(newUserPin);
      return;
    }

    addBadgePins(map);
    tryWatchLocation(userPin);
  });

  return (
    <div style={styles.mapContainer}>
      <img style={styles.mapLabel} src={sentinelsLabel} />
      <div style={styles.map} ref={mapElement} />
    </div>
  );
};

export default UserMap;
