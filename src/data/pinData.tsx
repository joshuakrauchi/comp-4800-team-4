import PinData from "../components/BadgeMap/Utilities/PinData";
import MapImageData from "../components/BadgeMap/Utilities/MapImageData";
import crab1 from "../images/crab1.png";
import crab2 from "../images/crab2.png";
import crab3 from "../images/crab3.png";
import crab4 from "../images/crab4.png";
import rainbow from "../images/rainbow.png";
import earth from "../images/earth.png";
import volcano from "../images/volcano.png";
import boulder from "../images/boulder.png";

const CRAB_SCALE = 1.0;
const CRAB_OPACITY = 1.0;
const BADGE_SCALE = 0.25;
const BADGE_OPACITY = 1.0;

const pinData: PinData[] = [
  new PinData(
    "crab1",
    -123.108,
    49.272,
    new MapImageData(crab1, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(rainbow, BADGE_SCALE, BADGE_OPACITY)
  ),
  new PinData(
    "crab2",
    -123.106,
    49.272,
    new MapImageData(crab2, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(earth, BADGE_SCALE, BADGE_OPACITY)
  ),
  new PinData(
    "crab3",
    -123.104,
    49.272,
    new MapImageData(crab3, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(volcano, BADGE_SCALE, BADGE_OPACITY)
  ),
  new PinData(
    "crab4",
    -123.102,
    49.272,
    new MapImageData(crab4, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(boulder, BADGE_SCALE, BADGE_OPACITY)
  ),
];

export default pinData;
