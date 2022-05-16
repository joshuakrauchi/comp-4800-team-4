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
    container: "flex flex-row w-full basis-full flex-wrap justify-center items-center",
    image: "z-[10] mr-[-30px]",
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={icon} alt={"logo"} />
      <Button text={text} />
    </div>
  );
};

export default IconButton;
