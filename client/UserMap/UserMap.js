import { useState, useRef, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import "ol/ol.css";

import { tryWatchLocation, addBadgePins, addUserPin, createMap } from "./mapUtilities";
import sentinelsLabel from "../images/sentinelsLabel.png";

const styles = StyleSheet.create({
  mapContainer: {
    width: "95%",
  },
  map: {
    zIndex: 0,
    height: 400,
    width: "100%",
    borderRadius: 50,
    overflow: "hidden"
  },
  mapLabel: {
    width: 200,
    height: 100,
    zIndex: 10,
    marginLeft: 25,
    marginBottom: -100,
    resizeMode: "contain",
  }
});

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
    <View style={styles.mapContainer}>
      <Image style={styles.mapLabel} source={sentinelsLabel} />
      <View style={styles.map} ref={mapElement} />
    </View>
  );
};

export default UserMap;
