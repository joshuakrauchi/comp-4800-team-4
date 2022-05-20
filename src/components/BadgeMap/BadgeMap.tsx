import { useRef, useEffect, useState } from "react";
import "ol/ol.css";

import {
  tryWatchLocation,
  createBadgePins,
  createUserPin,
  createMap,
  getClosestPinIndex,
  createBackgroundLayer,
  setCenterToClosestPin,
} from "./Utilities/utilities";
import sentinelsLabel from "../../images/sentinelsLabel.png";
import styles from "./styles";
import LayerGroup from "ol/layer/Group";
import IconButton from "../../components/IconButton";
import Ellipse from "../../images/Ellipse.png";

const MAP_HEIGHT = "50vh";

interface IBadgeMapProps {
  foundBadges: boolean[];
}

const BadgeMap = (props: IBadgeMapProps): JSX.Element => {
  const [foundBadges, setFoundBadges] = useState(props.foundBadges);
  const map = useRef(createMap());
  const backgroundLayer = useRef(createBackgroundLayer());
  const userPin = useRef(createUserPin());
  const [badgePins, setBadgePins] = useState(createBadgePins(foundBadges));
  const initialized = useRef(false);

  useEffect((): void => {
    if (initialized.current) return;

    map.current.setTarget("map");

    tryWatchLocation(userPin.current);

    initialized.current = true;
  }, []);

  useEffect(() => {
    for (let i = 0; i < badgePins.length; ++i) {
      if (!foundBadges[i]) continue;

      map.current.addLayer(badgePins[i]);
    }

    let closestPinIndex = getClosestPinIndex(
      userPin.current,
      badgePins,
      foundBadges
    );

    if (closestPinIndex >= 0) {
      map.current.addLayer(badgePins[closestPinIndex]);
    }
  }, [badgePins]);

  useEffect(() => {
    if (!map.current) return;

    map.current.setLayerGroup(new LayerGroup());

    map.current.addLayer(backgroundLayer.current);
    map.current.addLayer(userPin.current);

    setBadgePins(createBadgePins(foundBadges));
  }, [foundBadges]);

  return (
    <div className={styles.mapContainer}>
      <input
        type="checkbox"
        onChange={() => {
          setFoundBadges([
            !foundBadges[0],
            foundBadges[1],
            foundBadges[2],
            foundBadges[3],
          ]);
        }}
      />
      Found Badge 1
      <input
        type="checkbox"
        onChange={() => {
          setFoundBadges([
            foundBadges[0],
            !foundBadges[1],
            foundBadges[2],
            foundBadges[3],
          ]);
        }}
      />
      Found Badge 2
      <input
        type="checkbox"
        onChange={() => {
          setFoundBadges([
            foundBadges[0],
            foundBadges[1],
            !foundBadges[2],
            foundBadges[3],
          ]);
        }}
      />
      Found Badge 3
      <input
        type="checkbox"
        onChange={() => {
          setFoundBadges([
            foundBadges[0],
            foundBadges[1],
            foundBadges[2],
            !foundBadges[3],
          ]);
        }}
      />
      Found Badge 4
      <div className={styles.mapScreen}>
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
      <IconButton
        onClick={() => {
          setCenterToClosestPin(
            map.current,
            userPin.current,
            badgePins,
            foundBadges
          );
        }}
        text={"Find the next Badge!"}
        icon={Ellipse}
        buttonStyle=""
      />
    </div>
  );
};

export default BadgeMap;
