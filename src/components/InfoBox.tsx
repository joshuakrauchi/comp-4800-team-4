interface IInfoBoxProp {
  information?: string[];
}

const IconBox = (props: IInfoBoxProp): JSX.Element => {
  const styles = {
    div: "bg-gray-300 rounded px-20 pt-10 pb-5 mb-30 flex-col",
    text: "text-center text-sky-500 pb-5 text-base",
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
