import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Icon, Style } from "ol/style";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";

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
      opacity: 0.5,
    }),
  });

  return new VectorLayer({
    source: pinSource,
    style: pinStyle,
    name: name,
  });
}

export default createPinLayer;