import { useRef } from "react";

import styles from "./styles";
import BadgeMap from "./components/BadgeMap/BadgeMap";
import InfoBox from "../../components/InfoBox/InfoBox";
import Button from "../../components/Buttons/Button/Button";
import { useBadge } from "../../context/BadgeContext";
import BadgeWidget from "./components/BadgeWidget/BadgeWidget";

const MapPage = (): JSX.Element => {
  const { getFoundBadges } = useBadge();
  const foundBadges = useRef(getFoundBadges());

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headerText}>Collect All Of The Badges!</h1>
      <BadgeWidget foundBadges={foundBadges.current} />
      <BadgeMap foundBadges={foundBadges.current} />
      <InfoBox
        information={[
          "Monitoring the Dungeness crab gives scientists insight into how the rest of the ecosystem is doing.",
          "We are using a network of humane traps along the Salish Sea to attract Dungeness megalopae using light. Find out what we have learned about these crabs!",
        ]}
      />
      <Button
        onClick={() => {
          window.open("https://sentinels.hakai.org/about");
        }}
        buttonStyle="text-3xl"
        text={"Learn More"}
      />
      <Button
        onClick={() => {
          window.location.href = "/clearprogress";
        }}
        buttonStyle="mt-10"
        text={"Clear Progress"}
      />
    </div>
  );
};

export default MapPage;
