import "./BadgeAnimation.css";
import styles from "./styles";

abstract class QuizResults {
  badge?: string;
  badgeName?: string;
  callback?: () => void;
  retake?: () => void;
  previous?: string;
} 

/**
 *
 * @param props Expects an image for the badge (badge), the name of the badge (badgeName), and a callback (callback) for the exit button.
 * @returns A modal using the parameters given.
 */
const BadgeModal = (props: QuizResults): JSX.Element => {
  if (props.previous == "JustComplete") {
    return (
      <div className={styles.badgeContainer}>
        <button className={styles.exitButton} onClick={props.callback}>
          X
        </button>
        <h1 className={styles.badgeHeader}>Congratulations!</h1>
        <img className={styles.badge} src={props.badge} />
        <h2 className={styles.badgeFooter}>
          You've Received the {props.badgeName} Badge!
        </h2>
        <button className={styles.quizButton} onClick={props.retake}>
          Take the Quiz Again!
        </button>
      </div>
    );
  }

  return (
    <div className={styles.badgeContainer}>
      <button className={styles.exitButton} onClick={props.callback}>
        X
      </button>
      <img className={styles.badge} src={props.badge} />
      <h1 className={styles.badgeFooter}>
        You've Already Received the {props.badgeName} Badge!
      </h1>
      <button className={styles.quizButton} onClick={props.retake}>
        Take the Quiz Again!
      </button>
    </div>
  );
};

export default BadgeModal;
