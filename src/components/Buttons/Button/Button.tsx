import styles from "./styles";

export abstract class ButtonProp {
  text?: string;
  disabled?: boolean;
  buttonStyle?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProp): JSX.Element => {
  return (
    <div className={styles.div}>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={props.buttonStyle + " " + styles.button}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
