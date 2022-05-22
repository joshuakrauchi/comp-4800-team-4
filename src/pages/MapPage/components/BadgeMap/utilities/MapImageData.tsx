class MapImageData {
  url: string;
  scale: number;
  opacity: number;

  constructor(url: string, scale: number, opacity: number) {
    this.url = url;
    this.scale = scale;
    this.opacity = opacity;
  }
}

export default MapImageData;
