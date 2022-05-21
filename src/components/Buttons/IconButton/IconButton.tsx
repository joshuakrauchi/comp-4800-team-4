import styles from "./styles";
import Button, { ButtonProp } from "../Button/Button";
import Missing from "../../../images/missing.png";

class IconButtonProp extends ButtonProp {
  icon?: string;
}

const IconButton = (
  props: IconButtonProp = {
    text: "default",
    icon: Missing,
  }
): JSX.Element => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.icon} alt={"logo"} />
      <Button
        disabled={props.disabled}
        buttonStyle={props.buttonStyle + " " + styles.button}
        onClick={props.onClick}
        text={props.text}
      />
    </div>
  );
};

export default IconButton;
