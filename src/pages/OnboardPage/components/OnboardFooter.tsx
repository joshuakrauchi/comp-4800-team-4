import { Outlet } from "react-router-dom";
import Button from "../../../components/Buttons/Button/Button";
import styles from "./styles";
import "./onboard.css";
import { useBadge } from "../../../context/BadgeContext";

abstract class FooterProp {
  path?: string;
  link?: string;
  text?: string;
}

const OnboardFooter = (prop: FooterProp): JSX.Element => {
  const { setOnboardingComplete } = useBadge();
  if (prop.link == null) {
    return (
      <footer className={styles.onboardFooter}>
        <img
          alt="footer"
          className={styles.onboardFooterContents}
          src={prop.path}
        />
      </footer>
    );
  } else {
    return (
      <footer className={styles.onboardFooter}>
        <div className={styles.buttonAdjust}>
          <Button
            onClick={() => {
              setOnboardingComplete();
            }}
            text={prop.text}
          />
          <Outlet />
        </div>
      </footer>
    );
  }
};

export default OnboardFooter;
