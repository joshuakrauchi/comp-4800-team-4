import { Outlet, Link } from "react-router-dom";
import OnboardFooter from "./OnboardFooter";
import Button from "../Button";

import sentinels from "../../images/sentinelsLabel.png";
import quizSnap from "../../images/quizSnap.png";
import quizCrab from "../../images/quizCrab.png";
import selection3 from "../../images/selection3.png";

import styles from "./styles";

abstract class BadgeProp {
  retake? : () => void;
  status?: string;
} 

const GetStarted = (props: BadgeProp): JSX.Element => {
  if (props.status === "Scanned") {
    <div className={styles.onboardContainer}>
      <img className={styles.sentinelsLabel} src={sentinels} />
      <img className={styles.infoSnap} src={quizSnap} />
      <img className={styles.infoCrab} src={quizCrab} />
      <OnboardFooter state={props.retake} text="Get Started!" />
    </div>
  }
  return (
    <div className={styles.onboardContainer}>
      <img className={styles.sentinelsLabel} src={sentinels} />
      <img className={styles.infoSnap} src={quizSnap} />
      <img className={styles.infoCrab} src={quizCrab} />
      <OnboardFooter link="/" text="Get Started!" />
    </div>
  );
};

export default GetStarted;
