import BadgeMap from "../components/BadgeMap/BadgeMap";
import IconButton from "../components/IconButton";
import Ellipse from "../images/Ellipse.png";

const MapPage = (): JSX.Element => {
    return (
        <div className="App flex-col justify-center align-center h-screen w-screen">
          <BadgeMap />
          <IconButton text={"tailwind 👋 POG"} icon={Ellipse} />
        </div>
      );
}

export default MapPage;
