import Button, { ButtonProp } from "./Button";
import Missing from "../images/missing.png";

class IconButtonProp extends ButtonProp {
  icon?: string;
}

const IconButton = (
  props: IconButtonProp = {
    text: "default",
    icon: Missing,
  }
): JSX.Element => {
  const styles = {
    container:
      "flex flex-row w-full basis-full flex-wrap justify-center items-center",
    image: "z-[10] mr-[-30px]",
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={props.icon} alt={"logo"} />
      <Button
        disabled={props.disabled}
        buttonStyle={props.buttonStyle}
        onClick={props.onClick}
        text={props.text}
      />
    </div>
  );
};

export default IconButton;
