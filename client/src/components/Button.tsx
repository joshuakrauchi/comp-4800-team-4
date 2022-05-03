export interface IButtonProp {
  text?: string;
}

const Button = (props: IButtonProp): JSX.Element => {
  const styles = {
    div: "justify-center justify-self-center",
    button:
      "bg-teal-600 rounded text-white text-lg font-semibold px-12 py-3 h-fit",
  };

  return (
    <div className={styles.div}>
      <button className={styles.button}>{props.text}</button>
    </div>
  );
};

export default Button;
