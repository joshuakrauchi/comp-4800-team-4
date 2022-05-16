import { Outlet, Link } from "react-router-dom";
import selection3 from "../../images/selection3.png";
import Button from "../Button";
import styles from "./styles";

const GetStarted = (): JSX.Element => {
    return (
        <div className={styles.onboardContainer}>
            <h1 className={styles.landingHeader}>Information</h1>
            <div className={styles.onboardBottomText}>
                <h2 className={styles.landingFooter1}>Something here</h2>
                <h3 className={styles.landingFooter2}>Some more text</h3>
                <Link to="/map" className={styles.startButton}>
                    <Button text="Get Started!" />
                </Link>
            </div>
        </div>
    );
};

export default GetStarted;