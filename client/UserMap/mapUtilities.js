import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import MapView from "ol/View";
import Feature from "ol/Feature";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Attribution, defaults as defaultControls } from "ol/control";
import { Icon, Style } from "ol/style";
import { Point } from "ol/geom";

import pinData from "../data/pinData";
import pinImage from "../images/pinImage.png";

// Create a pin vector image layer for adding to the map.
const createPinLayer = (lon, lat, name, image) => {
  let coords = fromLonLat([lon, lat]);
  const pinFeature = new Feature({
    geometry: new Point(coords),
  });

  const pinSource = new VectorSource({
    features: [pinFeature],
  });

  const pinStyle = new Style({
    image: new Icon({
      src: image,
      scale: 1.0,
      opacity: 0.85,
    }),
  });

  return new VectorLayer({
    source: pinSource,
    style: pinStyle,
    name: name,
  });
};

// Try to get the user's position. If allowed, update their position as much as possible.
const tryWatchLocation = (userPin) => {
  if (!navigator.geolocation) return;

  // Update the location if given permission.
  navigator.geolocation.watchPosition((position) => {
    updateLocation(position, userPin);
  });
};

const updateLocation = (currentPosition, userPin) => {
  let coords = currentPosition.coords;
  userPin
    .getSource()
    .getFeatures()[0]
    .getGeometry()
    .setCoordinates(fromLonLat([coords.longitude, coords.latitude]));
};

const addBadgePins = (map) => {
  Object.keys(pinData).forEach((key) => {
    let name = key;
    let crab = pinData[key];

    map.addLayer(createPinLayer(crab.lon, crab.lat, name, crab.pinImage));
    map.addLayer(createPinLayer(crab.lon, crab.lat - 0.0001, name, crab.crabImage));
  });
};

const addUserPin = () => {
  return createPinLayer(0, 0, "Your Location", pinImage);
}

const createMap = (mapElement) => {
  // Change the default map controls to get rid of the regular attributions
  // on the bottom right and replace them with a collapsible button.
  const attribution = new Attribution({
    collapsible: true,
  });

  const mapControls = defaultControls({ attribution: false, zoom: false }).extend([attribution]);

  const initialMap = new Map({
    target: mapElement.current,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new MapView({
      center: [26371208.304614782, 6321386.5232699495],
        zoom: 19,
        minZoom: 18.8,
        constrainOnlyCenter: true,
        extent: [26370907.255707346, 6321082, 26371437.9, 6321574]
        // 26371252.27159731, 6321397.270212819
    }),
    controls: mapControls,
  });

  initialMap.on("singleclick", (event) => {
    initialMap.forEachFeatureAtPixel(event.pixel, (feature) => {
      console.log(feature.getGeometry().getFlatCoordinates());
    });
  });

  return initialMap;
};

export { tryWatchLocation, addBadgePins, addUserPin, createMap };
