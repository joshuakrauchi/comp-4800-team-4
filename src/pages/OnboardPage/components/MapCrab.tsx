import OnboardFooter from "./OnboardFooter";

import sentinels from "../../../images/sentinelsLabel.png";
import mapSnap from "../../../images/mapSnap.png";
import crab from "../../../images/mapCrab.png";
import selection3 from "../../../images/selection3Alt.png";

import styles from "./styles";

const MapCrab = (): JSX.Element => {
  return (
    <div className={styles.onboardContainer}>
      <img
        alt="sentinels label"
        className={styles.sentinelsLabel}
        src={sentinels}
      />
      <img alt="map snapshot" className={styles.infoSnap} src={mapSnap} />
      <img alt="info crab" className={styles.infoCrab} src={crab} />
      <OnboardFooter path={selection3} />
    </div>
  );
};

export default MapCrab;
