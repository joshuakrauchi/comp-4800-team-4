import adult from "../../images/adult.png";
import selection1 from "../../images/selection1.png";
import styles from "./styles";

const Landing = (): JSX.Element => {
    return (
        <div className={styles.onboardContainer}>
            <h1 className={styles.landingHeader}>Welcome!</h1>
            <img className={styles.landingCrab} src={adult} />
            <div className={styles.onboardBottomText}>
                <h2 className={styles.landingFooter1}>Dungeness Crab</h2>
                <h3 className={styles.landingFooter2}>Life Cycle Walk</h3>
                <img className={styles.onboardSelection} src={selection1} />
            </div>
        </div>
    );
};

export default Landing;