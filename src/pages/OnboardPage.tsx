import SwipeableViews from "react-swipeable-views";
import Landing from "../components/Onboard/Landing";
import InitialInfo from "../components/Onboard/InitialInfo";
import MapCrab from "../components/Onboard/MapCrab";
import GetStarted from "../components/Onboard/GetStarted";

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
