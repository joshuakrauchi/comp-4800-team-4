import { Outlet, Link } from "react-router-dom";
import OnboardFooter from "./OnboardFooter";
import Button from "../Button";

import sentinels from "../../images/sentinelsLabel.png";
import selection3 from "../../images/selection3.png";

import styles from "./styles";

const GetStarted = (): JSX.Element => {
  return (
    <div className={styles.onboardContainer}>
      <img className={styles.sentinelsLabel} src={sentinels} />
      <h1 className={styles.landingHeader}>Information</h1>
      <div className={styles.onboardBottomText}>
        <h2 className={styles.landingFooter1}>Something here</h2>
        <h3 className={styles.landingFooter2}>Some more text</h3>
        <OnboardFooter link="/map" text="Get Started!" />
      </div>
    </div>
  );
};

export default GetStarted;
