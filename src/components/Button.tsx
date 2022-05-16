import { MouseEventHandler } from "react";

export abstract class ButtonProp {
  text?: string;
  buttonStyle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProp): JSX.Element => {
  const styles = {
    div: "justify-center justify-self-center flex flex-row items-center my-8",
    button:
      `${props.buttonStyle} bg-primary rounded-xl text-white text-lg py-3 h-fit block w-5/6`,
  };

  return (
    <div className={styles.div}>
      <button onClick={props.onClick} className={styles.button}>{props.text}</button>
    </div>
  );
};

export default Button;
