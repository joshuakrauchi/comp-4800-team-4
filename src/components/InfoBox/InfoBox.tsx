import styles from "./styles";

abstract class InfoBoxProp {
  header?: string;
  information?: string[];
}

const IconBox = (props: InfoBoxProp): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>{props.header}</h2>
      {(() =>
        props.information?.map((i, index): JSX.Element => {
          return (
            <p className={styles.text} key={index}>
              {i}
            </p>
          );
        }))()}
    </div>
  );
};

export default IconBox;
