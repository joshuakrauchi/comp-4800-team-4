import { Outlet, Link } from "react-router-dom";
import Button from "../Button";
import styles from "./styles";
import "./onboard.css";

abstract class FooterProp {
  path?: string;
  link?: string;
  text?: string;
  state?: () => void;
}

const OnboardFooter = (prop: FooterProp): JSX.Element => {
  if (prop.link == null) {
    return (
      <footer className={styles.onboardFooter}>
        <img className={styles.onboardFooterContents} src={prop.path} onClick={prop.state}/>
      </footer>
    );
  } else {
    return (
      <footer className={styles.onboardFooter}>
        <div className={styles.buttonAdjust}>
          <Button text={prop.text} onClick={() => {window.location.href="/map"}}/>
          <Outlet />
        </div>
      </footer>
    );
  }
};

export default OnboardFooter;
