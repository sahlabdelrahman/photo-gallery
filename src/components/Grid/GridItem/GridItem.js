import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "../../../css/Grid/GridItem/GridItem.css";

const GridItem = ({ image }) => {
  const { name, url } = image;
  return (
    <div className="gridItem-wrapper">
      <LazyLoadImage alt={name} effect="blur" src={url} />
    </div>
  );
};

export default GridItem;
