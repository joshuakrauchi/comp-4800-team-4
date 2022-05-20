import styles from "./styles";
import Button from "../../components/Buttons/Button/Button";
import CongratsStamp from "./components/CongratsStamp/CongratsStamp";

const AllStampsEarned = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <CongratsStamp />
      <div className="flex justify-around">
        <Button
          text="Google Play"
          onClick={() => {
            window.open(
              "http://play.google.com/store/apps/details?id=org.inaturalist.android"
            );
          }}
        />
        <Button
          text="App Store"
          onClick={() => {
            window.open(
              "https://apps.apple.com/us/app/inaturalist/id421397028"
            );
          }}
        />
      </div>
      <Button
        text="Learn More"
        onClick={() => {
          window.open("https://sentinels.hakai.org/about");
        }}
      />
      <Button
        onClick={() => {
          window.location.href = "/clearprogress";
        }}
        buttonStyle="mt-10"
        text={"Clear Progress"}
      />
    </div>
  );
};

export default AllStampsEarned;
