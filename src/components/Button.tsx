export abstract class ButtonProp {
  text?: string;
  disabled?: boolean;
  buttonStyle?: string;
  onClick?: () => void;
}

const Button = (props: ButtonProp): JSX.Element => {
  const styles = {
    div: "justify-center justify-self-center flex flex-row items-center my-8",
    button:
      `${props.buttonStyle} bg-crabOrange rounded-xl text-white text-lg font-semibold px-12 py-3 h-fit shadow-lg`,
  };

  return (
    <div className={styles.div}>
      <button disabled={props.disabled} onClick={props.onClick} className={styles.button}>{props.text}</button>
    </div>
  );
};

export default Button;
