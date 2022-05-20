abstract class InfoBoxProp {
  information?: string[];
}

const IconBox = (props: InfoBoxProp): JSX.Element => {
  const styles = {
    div: "bg-secondary-bg rounded-3xl mx-5 px-5 pt-7 pb-2 flex-col",
    text: "text-center text-darker pb-5 text-base",
  };

  return (
    <div className={styles.div}>
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
