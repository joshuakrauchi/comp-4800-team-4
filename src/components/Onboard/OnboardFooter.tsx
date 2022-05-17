import { Outlet, Link } from "react-router-dom";
import Button from "../Button";
import styles from "./styles";
import "./onboard.css";

abstract class FooterProp {
  path?: string;
  link?: string;
  text?: string;
}

const OnboardFooter = (prop: FooterProp): JSX.Element => {
  if (prop.link == null) {
    return (
      <footer className={styles.onboardFooter}>
        <img className={styles.onboardFooterContents} src={prop.path} />
      </footer>
    );
  } else {
    return (
      <footer className={styles.onboardFooter}>
        <Link to={prop.link} className={styles.onboardFooterContents}>
          <Button text={prop.text} />
        </Link>
        <Outlet />
      </footer>
    );
  }
};

export default OnboardFooter;
