import "./BadgeAnimation.css";
import styles from "./styles";

abstract class BadgeProp {
  badge?: string;
  badgeName?: string;
  callback?: () => void;
}

/**
 *
 * @param props Expects an image for the badge (badge), the name of the badge (badgeName), and a callback (callback) for the exit button.
 * @returns A modal using the parameters given.
 */
const BadgeModal = (props: BadgeProp): JSX.Element => {
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
    </div>
  );
};

export default BadgeModal;
