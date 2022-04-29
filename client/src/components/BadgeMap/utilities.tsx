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

import pinData from "../../data/pinData";
import pinImage from "../../images/pinImage.png";
import React from "react";

// Create a pin vector image layer for adding to the map.
const createPinLayer = (lon: number, lat: number, image: string): VectorLayer<VectorSource<Point>> => {
  let coords = fromLonLat([lon, lat]);
  const pinFeature = new Feature<Point>({
    geometry: new Point(coords),
  });

  const pinSource = new VectorSource<Point>({
    features: [pinFeature],
  });

  const pinImage = new Icon({
    src: image,
    scale: 1.0,
    opacity: 0.85,
  });

  const pinStyle = new Style({
    image: pinImage,
  });

  const pinLayer = new VectorLayer<VectorSource<Point>>({
    source: pinSource,
    style: pinStyle,
  });

  return pinLayer;
};

// Try to get the user's position. If allowed, update their position as much as possible.
const tryWatchLocation = (userPin: VectorLayer<VectorSource<Point>>): void => {
  if (!navigator.geolocation) return;

  // Update the location if given permission.
  navigator.geolocation.watchPosition((position: GeolocationPosition) => {
    updateLocation(position, userPin);
  });
};

const updateLocation = (currentPosition: GeolocationPosition, userPin: VectorLayer<VectorSource<Point>>): void => {
  let coords = currentPosition.coords;
  userPin
    .getSource()
    ?.getFeatures()[0]
    ?.getGeometry()
    ?.setCoordinates(fromLonLat([coords.longitude, coords.latitude]));
};

const addBadgePins = (map: Map): void => {
  Object.keys(pinData).forEach((key) => {
    let element = pinData[key as keyof typeof pinData];

    map.addLayer(createPinLayer(element.lon, element.lat, element.pinImage));
    map.addLayer(createPinLayer(element.lon, element.lat - 0.0001, element.crabImage));
  });
};

const createUserPin = (): VectorLayer<VectorSource<Point>> => {
  return createPinLayer(0, 0, pinImage);
};

const createMap = (mapElement: React.MutableRefObject<undefined>): Map => {
  // Change the default map controls to get rid of the regular attributions
  // on the bottom right and replace them with a collapsible button.
  const attribution = new Attribution({
    collapsible: true,
  });

  const mapControls = defaultControls({ attribution: false, zoom: false }).extend([attribution]);

  const mapLayer = new TileLayer({
    source: new OSM(),
  });

  const mapView = new MapView({
    center: [26371208.304614782, 6321386.5232699495],
    zoom: 19,
    minZoom: 18.8,
    constrainOnlyCenter: true,
    extent: [26370907.255707346, 6321082, 26371437.9, 6321574],
  });

  const initialMap = new Map({
    target: mapElement.current,
    layers: [mapLayer],
    view: mapView,
    controls: mapControls,
  });

  return initialMap;
};

export { tryWatchLocation, addBadgePins, createUserPin, createMap };
