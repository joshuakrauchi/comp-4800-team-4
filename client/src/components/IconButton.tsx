import Button, { ButtonProp } from "./Button";
import Missing from "../images/missing.png";

class IconButtonProp extends ButtonProp {
  icon?: string;
}

const IconButton = ({
  text = "default",
  icon = Missing,
}: IconButtonProp): JSX.Element => {
  const styles = {
    div: "flex flex-row justify-center items-center mb-26",
    image: "z-[10] mr-[-15px]",
  };

  return (
    <div className={styles.div}>
      <img className={styles.image} src={icon} alt={"logo"} />
      <Button text={text} />
    </div>
  );
};

export default IconButton;
