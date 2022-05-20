import styles from "./styles";
import Button from "../../components/Button";

const ClearProgressPage = (): JSX.Element => {
  const clearProgress = (): void => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          Are you sure you want to clear your progress?
        </h1>
        <h2 className={styles.footer}>
          This can't be undone! You'll have to start all over.
        </h2>
      </div>
      <Button
        onClick={() => {
          window.location.href = "/map";
        }}
        text="No, take me back!"
      />
      <Button buttonStyle="mt-20 bg-secondary" onClick={clearProgress} text="Yes, clear my progress" />
    </div>
  );
};

export default ClearProgressPage;
