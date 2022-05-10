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
import { Coordinate } from "ol/coordinate";

import MapImageData from "./MapImageData";
import pinData from "../../../data/pinData";
import pinImage from "../../../images/pinImage.png";

const MAP_INITIAL_ZOOM = 16;
const MAP_MINIMUM_ZOOM = 0;
const MAP_MAXIMUM_ZOOM = 20;
// UTM coordinates used below. In order from [minX, minY, maxX, maxY].
const MAP_EXTENT = [-13706000, 6320000, -13702000, 6322300];
const MAP_INITIAL_POSITION = [-13704000, 6321150];
const PRELOAD_LEVELS = 5;

// Create a pin vector image layer for adding to the map.
const createPinLayer = (
  lon: number,
  lat: number,
  image: MapImageData
): VectorLayer<VectorSource<Point>> => {
  let coords = fromLonLat([lon, lat]);
  const pinFeature = new Feature<Point>({
    geometry: new Point(coords),
  });

  const pinSource = new VectorSource<Point>({
    features: [pinFeature],
  });

  const pinImage = new Icon({
    src: image.url,
    scale: image.scale,
    opacity: image.opacity,
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

const updateLocation = (
  currentPosition: GeolocationPosition,
  userPin: VectorLayer<VectorSource<Point>>
): void => {
  let coords = currentPosition.coords;
  userPin
    .getSource()
    ?.getFeatures()[0]
    ?.getGeometry()
    ?.setCoordinates(fromLonLat([coords.longitude, coords.latitude]));
};

const createBadgePins = (
  foundBadges: boolean[]
): VectorLayer<VectorSource<Point>>[] => {
  let pinLayers = [];
  for (let i = 0; i < pinData.length && i < foundBadges.length; ++i) {
    let pin = pinData[i];
    let pinLayer;
    let found = foundBadges[i];

    if (found) {
      pinLayer = createPinLayer(pin.lon, pin.lat, pin.badgeImage);
    } else {
      pinLayer = createPinLayer(pin.lon, pin.lat, pin.pinImage);
    }

    pinLayers.push(pinLayer);
  }

  return pinLayers;
};

const createUserPin = (): VectorLayer<VectorSource<Point>> => {
  return createPinLayer(0, 0, new MapImageData(pinImage, 1.0, 1.0));
};

const createMap = (): Map => {
  // Change the default map controls to get rid of the regular attributions
  // on the bottom right and replace them with a collapsible button.
  const attribution = new Attribution({
    collapsible: true,
  });

  const mapControls = defaultControls({
    attribution: false,
    zoom: false,
  }).extend([attribution]);

  const mapView = new MapView({
    center: MAP_INITIAL_POSITION,
    zoom: MAP_INITIAL_ZOOM,
    minZoom: MAP_MINIMUM_ZOOM,
    maxZoom: MAP_MAXIMUM_ZOOM,
    extent: MAP_EXTENT,
  });

  const createdMap = new Map({
    target: "dummy",
    layers: [],
    view: mapView,
    controls: mapControls,
  });

  return createdMap;
};

const createBackgroundLayer = (): TileLayer<OSM> =>
  new TileLayer({ source: new OSM(), preload: PRELOAD_LEVELS });

const getDistanceSquared = (point1: Coordinate, point2: Coordinate): number => {
  const x1 = point1[0];
  const y1 = point1[1];
  const x2 = point2[0];
  const y2 = point2[1];

  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
};

/**
 * Gets the pin index of the pin that is located closest to the user in the world.
 * The pin must not be found.
 * If all pins are found, returns -1.
 */
const getClosestPinIndex = (
  reference: VectorLayer<VectorSource<Point>>,
  destinations: VectorLayer<VectorSource<Point>>[],
  foundBadges: boolean[]
): number => {
  const referenceCoords = reference
    .getSource()
    ?.getFeatures()[0]
    ?.getGeometry()
    ?.getCoordinates();
  let destinationCoords = destinations[0]
    .getSource()
    ?.getFeatures()[0]
    ?.getGeometry()
    ?.getCoordinates();
  if (!referenceCoords || !destinationCoords) return -1;

  let shortestDistanceIndex = -1;
  let shortestDistance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < destinations.length; ++i) {
    if (foundBadges[i]) continue;

    destinationCoords = destinations[i]
      .getSource()
      ?.getFeatures()[0]
      ?.getGeometry()
      ?.getCoordinates();

    if (!destinationCoords) return -1;

    let currentDistance = getDistanceSquared(
      referenceCoords,
      destinationCoords
    );

    if (currentDistance < shortestDistance) {
      shortestDistance = currentDistance;
      shortestDistanceIndex = i;
    }
  }

  return shortestDistanceIndex;
};

export {
  createBackgroundLayer,
  tryWatchLocation,
  createBadgePins,
  createUserPin,
  createMap,
  getClosestPinIndex,
};
