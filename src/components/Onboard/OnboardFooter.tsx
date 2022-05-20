import { Outlet, Link } from "react-router-dom";
import Button from "../Button";
import styles from "./styles";
import "./onboard.css";
import { useBadge } from "../../context/BadgeContext";

abstract class FooterProp {
  path?: string;
  link?: string;
  text?: string;
}

const OnboardFooter = (prop: FooterProp): JSX.Element => {
  const { SetOnboardingComplete } = useBadge();
  if (prop.link == null) {
    return (
      <footer className={styles.onboardFooter}>
        <img alt="footer" className={styles.onboardFooterContents} src={prop.path} />
      </footer>
    );
  } else {
    return (
      <footer className={styles.onboardFooter}>
        <div className={styles.buttonAdjust}>
          <Link to={prop.link} className={styles.onboardFooterContents}>
            <Button onClick={() => {
              SetOnboardingComplete();
              window.location.href="/map"
              }} text={prop.text} />
          </Link>
          <Outlet />
        </div>
      </footer>
    );
  }
};

export default OnboardFooter;
