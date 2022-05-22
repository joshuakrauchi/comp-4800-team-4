import MapImageData from "./MapImageData";

class PinData {
  name: string;
  lon: number;
  lat: number;
  pinImage: MapImageData;
  badgeImage: MapImageData;

  constructor(
    name: string,
    lon: number,
    lat: number,
    pinImage: MapImageData,
    badgeImage: MapImageData
  ) {
    this.name = name;
    this.lon = lon;
    this.lat = lat;
    this.pinImage = pinImage;
    this.badgeImage = badgeImage;
  }
}

export default PinData;
