import OnboardFooter from "./OnboardFooter";

import sentinels from "../../../images/sentinelsLabel.png";
import adult from "../../../images/adult_shadow.png";
import rounds from "../../../images/rounds.png";
import selection1 from "../../../images/selection1.png";

import styles from "./styles";

const Landing = (): JSX.Element => {
  return (
    <div className={styles.onboardContainer}>
      <div className={styles.background}>
        <img
          alt="landing rounds"
          className={styles.landingRounds}
          src={rounds}
        />
      </div>
      <div className={styles.fg}>
        <img
          alt="sentinels label"
          className={styles.sentinelsLabel}
          src={sentinels}
        />
        <h1 className={styles.landingHeader}>Welcome!</h1>
        <img alt="info crab" className={styles.landingCrab} src={adult} />
        <div className={styles.onboardBottomText}>
          <h2 className={styles.landingFooter1}>Dungeness Crab</h2>
          <h3 className={styles.landingFooter2}>Life Cycle Walk</h3>
        </div>
        <OnboardFooter path={selection1} />
      </div>
    </div>
  );
};

export default Landing;
