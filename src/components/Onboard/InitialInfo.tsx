import OnboardFooter from "./OnboardFooter";

import sentinels from "../../images/sentinelsLabel.png";
import talking1 from "../../images/talking1.png";
import selection1 from "../../images/selection1Alt.png";

import styles from "./styles";

const InitialInfo = (): JSX.Element => {
  return (
    <div className={styles.onboardContainer}>
      <img alt="sentinels label" className={styles.sentinelsLabel} src={sentinels} />
      <img alt="info crab" className={styles.talkingCrab} src={talking1} />
      <OnboardFooter path={selection1} />
    </div>
  );
};

export default InitialInfo;
