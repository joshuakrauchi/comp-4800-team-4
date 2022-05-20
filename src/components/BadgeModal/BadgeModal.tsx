import { useEffect, useState } from "react";

import "./BadgeAnimation.css";
import styles from "./styles";
import pinData from "../../data/pinData";
import missing from "../../images/missing.png";
import Button from "../Button";

abstract class QuizResults {
  badgeName?: string;
  currentBadgeState?: string;
  retake?: () => void;
}

/**
 *
 * @param props The badge name, as well as the current badge reward state.
 * JustCompleted - Was just rewarded the badge.
 * AlreadyCompleted - Has received the badge before.
 * FailedQuiz - Didn't get a score high enough to get the badge.
 * @returns A modal using the parameters given.
 */
const BadgeModal = (props: QuizResults): JSX.Element => {
  const [badgeURL, setBadgeURL] = useState("");
  const [badgeHeader, setBadgeHeader] = useState("");
  const [badgeFooter, setBadgeFooter] = useState("");

  useEffect(() => {
    if (props.currentBadgeState === "FailedQuiz") {
      setBadgeURL(missing);
    } else {
      pinData.forEach((element) => {
        if (element.name === props.badgeName) {
          setBadgeURL(element.badgeImage.url);
        }
      });
    }

    switch (props.currentBadgeState) {
      case "FailedQuiz":
        setBadgeHeader("Sorry dude, looks like you suck ass");
        setBadgeFooter("Don't worry, you'll learn to read one day");
        break;
      case "AlreadyCompleted":
        setBadgeHeader(`The ${props.badgeName} Badge`);
        setBadgeFooter(`You've Already Received the ${props.badgeName} Badge!`);
        break;
      case "JustCompleted":
        setBadgeHeader(`The ${props.badgeName} Badge`);
        setBadgeFooter(
          `Congratulations! You've Won the ${props.badgeName} Badge!`
        );
        break;
    }
  }, []);

  return (
    <div className={styles.badgeContainer}>
      <img alt="badge" className={styles.badge} src={badgeURL} />
      <h1 className={styles.badgeHeader}>{badgeHeader}</h1>
      <h2 className={styles.badgeFooter}>{badgeFooter}</h2>
      <Button
        onClick={() => {
          window.location.href = "/map";
        }}
        text="Back to the Map"
      />
      <Button onClick={props.retake} text="Take the Quiz Again" />
    </div>
  );
};

export default BadgeModal;
