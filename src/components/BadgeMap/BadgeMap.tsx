import { useRef, useEffect } from "react";
import "ol/ol.css";

import {
  tryWatchLocation,
  createBadgePins,
  createUserPin,
  createMap,
  getClosestPinIndex,
} from "./Utilities/utilities";
import sentinelsLabel from "../../images/sentinelsLabel.png";
import styles from "./styles";

const MAP_HEIGHT = "50vh";
const FOUND_BADGES = [true, false, true, false];

const BadgeMap = (): JSX.Element => {
  const map = useRef(createMap());
  const userPin = useRef(createUserPin());
  const badgePins = useRef(createBadgePins(FOUND_BADGES))
  const initialized = useRef(false);

  useEffect((): void => {
    if (initialized.current) return;

    map.current.setTarget("map");
    map.current.addLayer(userPin.current);

    let closestPinIndex = getClosestPinIndex(userPin.current, badgePins.current);

    map.current.addLayer(badgePins.current[closestPinIndex]);
    /*for (let i = 0; i < badgePins.current.length; ++i) {
      map.current.addLayer(badgePins.current[i]);
    }*/

    tryWatchLocation(userPin.current);

    initialized.current = true;
  }, []);

  return (
    <div className={styles.mapContainer}>
      <img
        className={styles.mapLabel}
        src={sentinelsLabel}
        alt="Sentinels of Change Logo"
      />
      <div
        id="map"
        style={{ width: "100%", height: MAP_HEIGHT }}
        className={styles.map}
      />
    </div>
  );
};

export default BadgeMap;
