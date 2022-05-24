import styles from "./styles";
import Naturalist from "../../../../images/naturalist.png";

const CongratsStamp = (): JSX.Element => {
  return (
    <div className={styles.container} id="congrats-div">
      <div className={styles.textContainer}>
        <h2>Congratulations, you've collected all of the badges!</h2>
        <p className={styles.text}>
          If you see any real Dungeness crabs in your journey, please snap a
          photo and submit it to iNaturalist to help us track and monitor these
          creatures.
        </p>
      </div>
      <img
        className={styles.img}
        alt="naturalist logo"
        id="logo-img"
        src={Naturalist}
      />
    </div>
  );
};

export default CongratsStamp;
