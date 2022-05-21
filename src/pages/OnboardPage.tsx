import SwipeableViews from "react-swipeable-views";
import Landing from "../components/Onboard/Landing";
import InitialInfo from "../components/Onboard/InitialInfo";
import MapCrab from "../components/Onboard/MapCrab";
import GetStarted from "../components/Onboard/GetStarted";

abstract class BadgeProp {
  retake? : () => void;
  status?: string;
} 

const OnboardSwiper = (props: BadgeProp): JSX.Element => {
  return (
    <SwipeableViews enableMouseEvents>
      <Landing />
      <InitialInfo />
      <MapCrab />
      <GetStarted retake={props.retake}/>
    </SwipeableViews>
  );
};

export default OnboardSwiper;
