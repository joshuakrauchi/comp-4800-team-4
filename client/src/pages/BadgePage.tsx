import BadgeMap from "../components/BadgeMap/BadgeMap";
import IconButton from "../components/IconButton";
import InfoBox from "../components/InfoBox";
import Ellipse from "../images/Ellipse.png";

const BadgePage = (): JSX.Element => {
  return (
    <div className="App flex-col justify-center align-center h-screen w-screen">
      <BadgeMap />
      <IconButton text={"Find the next Badge!"} icon={Ellipse} />
      <div style={{ marginTop: 25 }} />
      <InfoBox
        information={[
          "Monitoring the Dungeness crab gives scientists insight into how the rest of the ecosystem is doing.",
          "We are using a network of humane traps along the Salish Sea to attract Dungeness megalopae using light. Find out what we have learned about these crabs!",
        ]}
      />
    </div>
  );
};

export default BadgePage;
