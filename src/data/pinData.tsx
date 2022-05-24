import PinData from "../pages/MapPage/components/BadgeMap/utilities/PinData";
import MapImageData from "../pages/MapPage/components/BadgeMap/utilities/MapImageData";
import crab1 from "../images/crab1.png";
import crab2 from "../images/crab2.png";
import crab3 from "../images/crab3.png";
import crab4 from "../images/crab4.png";
import rainbow from "../images/rainbow.png";
import earth from "../images/earth.png";
import volcano from "../images/volcano.png";
import boulder from "../images/boulder.png";

const CRAB_SCALE = 1.0;
const CRAB_OPACITY = 0.8;
const BADGE_SCALE = 0.1;
const BADGE_OPACITY = 0.9;

const pinData: PinData[] = [
  new PinData(
    "Zoea",
    -123.1215,
    49.2684,
    new MapImageData(crab1, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(rainbow, BADGE_SCALE, BADGE_OPACITY)
  ),
  new PinData(
    "Megalopa",
    -123.118,
    49.2695,
    new MapImageData(crab2, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(earth, BADGE_SCALE, BADGE_OPACITY)
  ),
  new PinData(
    "Instar",
    -123.1112,
    49.2717,
    new MapImageData(crab3, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(volcano, BADGE_SCALE, BADGE_OPACITY)
  ),
  new PinData(
    "Adult",
    -123.104,
    49.272,
    new MapImageData(crab4, CRAB_SCALE, CRAB_OPACITY),
    new MapImageData(boulder, BADGE_SCALE, BADGE_OPACITY)
  ),
];

export default pinData;
