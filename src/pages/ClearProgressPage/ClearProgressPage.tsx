import styles from "./styles";
import Button from "../../components/Buttons/Button/Button";

const ClearProgressPage = (): JSX.Element => {
  const clearProgress = (): void => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.closeButton}
        onClick={() => {
          window.location.href = "/map";
        }}
      >
        X
      </button>
      <h2 className={styles.text}>
        Are you sure you want to clear all your badges?
      </h2>
      <Button
        onClick={() => {
          window.location.href = "/map";
        }}
        text="No, Back to the Walk"
      />
      <button className={styles.clearButton} onClick={clearProgress}>
        Yes, clear my badges
      </button>
    </div>
  );
};

export default ClearProgressPage;
