import { useEffect, useState } from "react";

import "./BadgeAnimation.css";
import styles from "./styles";
import pinData from "../../data/pinData";
import Button from "../../components/Buttons/Button/Button";

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
        setBadgeFooter("Your Score Was Too Low...");
        break;
      case "AlreadyCompleted":
        setBadgeHeader("Complete!");
        setBadgeFooter(`You've Already Received the ${props.badgeName} Badge!`);
        break;
      case "JustCompleted":
        setBadgeHeader("Congratulations!");
        setBadgeFooter(`You've Received the ${props.badgeName} Badge!`);
        break;
    }
  }, [props.badgeName, props.currentBadgeState]);

  return (
    <div>
      <div className={styles.container}>
        <button
          className={styles.closeButton}
          onClick={() => {
            window.location.href = "/map";
          }}
        >
          X
        </button>
        <h1>{badgeHeader}</h1>
        <img
          alt="badge"
          className={
            styles.badgeImage +
            (props.currentBadgeState === "FailedQuiz"
              ? " grayscale blur-sm"
              : " badge-animation")
          }
          src={badgeURL}
        />
        <h2>{badgeFooter}</h2>
      </div>
      <Button
        onClick={() => {
          window.location.href = "/map";
        }}
        text={
          props.currentBadgeState === "FailedQuiz"
            ? "Go Back to the Map"
            : "Find the Next Badge"
        }
      />
      <button className={styles.retakeButton} onClick={props.retake}>
        Retake Quiz
      </button>
    </div>
  );
};

export default BadgeModal;
