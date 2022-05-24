import styles from "./styles";
import allBadges from "../../images/allBadges.png";
import sentinelsLabel from "../../images/sentinelsLabel.png";
import Button from "../../components/Buttons/Button/Button";

const CongratulationsPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <img
        className={styles.sentinelsLabel}
        src={sentinelsLabel}
        alt="sentinels label"
      />
      <img className={styles.badgeImage} src={allBadges} alt="all badges" />
      <h1>Congratulations!</h1>
      <h2 className={styles.text}>You are now a Dungeness Crab Master!</h2>
      <Button
        onClick={() => {
          window.location.href = "/inaturalist";
        }}
        text="Proceed"
      />
    </div>
  );
};

export default CongratulationsPage;
