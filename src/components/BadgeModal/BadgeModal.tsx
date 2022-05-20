import { useEffect, useState } from "react";

import "./BadgeAnimation.css";
import styles from "./styles";
import pinData from "../../data/pinData";
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
    pinData.forEach((element) => {
      if (element.name === props.badgeName) {
        setBadgeURL(element.badgeImage.url);
      }
    });

    switch (props.currentBadgeState) {
      case "FailedQuiz":
        setBadgeHeader("Oh No!");
        setBadgeFooter("Your score wasn't high enough to get the badge...");
        break;
      case "AlreadyCompleted":
        setBadgeHeader(`${props.badgeName}`);
        setBadgeFooter(`You've already received the ${props.badgeName} badge!`);
        break;
      case "JustCompleted":
        setBadgeHeader(`Congratulations!`);
        setBadgeFooter(
          `You've won the ${props.badgeName} badge!`
        );
        break;
    }
  }, [props.badgeName, props.currentBadgeState]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.badgeContainer}>
        <img
          alt="badge"
          className={
            styles.badge +
            (props.currentBadgeState === "FailedQuiz"
              ? " grayscale blur-sm"
              : " badge-animation")
          }
          src={badgeURL}
        />
        <h1 className={styles.badgeHeader}>{badgeHeader}</h1>
        <h2 className={styles.badgeFooter}>{badgeFooter}</h2>
      </div>
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
