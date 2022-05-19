export abstract class ButtonProp {
  text?: string;
}

const Button = (props: ButtonProp): JSX.Element => {
  const styles = {
    div: "justify-center justify-self-center",
    button:
      "bg-crabOrange rounded text-white text-lg font-semibold px-12 py-3 h-fit",
  };

  return (
    <div className={styles.div}>
      <button className={styles.button}>{props.text}</button>
    </div>
  );
};

export default Button;
