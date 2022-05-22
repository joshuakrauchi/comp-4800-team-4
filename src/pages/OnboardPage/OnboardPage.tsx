import SwipeableViews from "react-swipeable-views";
import Landing from "./components/Landing";
import InitialInfo from "./components/InitialInfo";
import MapCrab from "./components/MapCrab";
import GetStarted from "./components/GetStarted";

const OnboardSwiper = (): JSX.Element => {
  return (
    <SwipeableViews enableMouseEvents>
      <Landing />
      <InitialInfo />
      <MapCrab />
      <GetStarted />
    </SwipeableViews>
  );
};

export default OnboardSwiper;
