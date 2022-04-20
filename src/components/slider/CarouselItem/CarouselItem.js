import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import "../../../css/slider/CarouselItem/CarouselItem.css";
import Title from "../Title/Title";

const CarouselItem = ({ image }) => {
  const { url, name } = image;

  return (
    <div className="carousel-item" style={{ width: "100%" }}>
      <div className="image-container">
        <LazyLoadImage alt={name} src={url} />
        <Title title={name} />
      </div>
    </div>
  );
};

export default CarouselItem;
