import { Outlet, Link } from "react-router-dom";
import OnboardFooter from "./OnboardFooter";
import Button from "../Button";

import sentinels from "../../images/sentinelsLabel.png";
import quizSnap from "../../images/quizSnap.png";
import quizCrab from "../../images/quizCrab.png";
import selection3 from "../../images/selection3.png";

import styles from "./styles";

const GetStarted = (): JSX.Element => {
  return (
    <div className={styles.onboardContainer}>
      <img className={styles.sentinelsLabel} src={sentinels} />
      <img className={styles.infoSnap} src={quizSnap} />
      <img className={styles.infoCrab} src={quizCrab} />
      <OnboardFooter link="/map" text="Get Started!" />
    </div>
  );
};

export default GetStarted;
