import BadgeMap from "../components/BadgeMap/BadgeMap";
import InfoBox from "../components/InfoBox";
import Button, { ButtonProp } from "../components/Button";
import IconButton from "../components/IconButton";

const MapPage = (): JSX.Element => {
  const styles = {
    mainContainer:
      "App px-10 py-8 overflow-scroll bg-background flex-col justify-center align-center h-screen w-screen",
    headerText: "text-center text-3xl text-darker font-semibold mb-5",
  };
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.headerText}>Collect All Of The Badges!</h1>
      <BadgeMap />
      <InfoBox
        information={[
          "Monitoring the Dungeness crab gives scientists insight into how the rest of the ecosystem is doing.",
          "We are using a network of humane traps along the Salish Sea to attract Dungeness megalopae using light. Find out what we have learned about these crabs!",
        ]}
      />
      <Button onClick={() => { window.open("https://sentinels.hakai.org/about"); }} buttonStyle="text-3xl" text={"Learn More"} />
    </div>
  );
};

export default MapPage;
