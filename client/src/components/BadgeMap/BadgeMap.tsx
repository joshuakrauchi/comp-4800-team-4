import { useRef, useEffect } from "react";
import "ol/ol.css";

import {
  tryWatchLocation,
  addBadgePins,
  createUserPin,
  createMap,
} from "./utilities";
import sentinelsLabel from "../../images/sentinelsLabel.png";
import styles from "./styles";

const MAP_HEIGHT = "50vh";

const BadgeMap = (): JSX.Element => {
  const map = useRef(createMap());
  const userPin = useRef(createUserPin());
  const initialized = useRef(false);

  useEffect((): void => {
    if (initialized.current) return;

    map.current.setTarget("map");
    map.current.addLayer(userPin.current);
    addBadgePins(map.current);
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
