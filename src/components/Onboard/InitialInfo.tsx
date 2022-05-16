import OnboardFooter from "./OnboardFooter";

import sentinels from "../../images/sentinelsLabel.png";
import selection2 from "../../images/selection2.png";

import styles from "./styles";

const InitialInfo = (): JSX.Element => {
    return (
        <div className={styles.onboardContainer}>
            <img className={styles.sentinelsLabel} src={sentinels} />
            <h1 className={styles.landingHeader}>Information</h1>
            <div className={styles.onboardBottomText}>
                <h2 className={styles.landingFooter1}>Something here</h2>
                <h3 className={styles.landingFooter2}>Some more text</h3>
                <OnboardFooter path={selection2} />
            </div>
        </div>
    );
};

export default InitialInfo;