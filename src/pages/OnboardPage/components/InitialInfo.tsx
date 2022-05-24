import OnboardFooter from "./OnboardFooter";

import sentinels from "../../../images/sentinelsLabel.png";
import talking1 from "../../../images/talking1.png";
import selection2 from "../../../images/selection2Alt.png";

import styles from "./styles";

const InitialInfo = (): JSX.Element => {
  return (
    <div className={styles.onboardContainer}>
      <img alt="sentinels label" className={styles.sentinelsLabel} src={sentinels} />
      <img alt="info crab" className={styles.talkingCrab} src={talking1} />
      <OnboardFooter path={selection2} />
    </div>
  );
};

export default InitialInfo;
