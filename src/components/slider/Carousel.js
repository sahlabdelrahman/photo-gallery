import { useSelector } from "react-redux";

import CarouselItem from "./CarouselItem/CarouselItem";

import "../../css/slider/Carousel.css";

const Carousel = () => {
  const { images, activeImage } = useSelector((state) => state.images);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeImage * 100}%)` }}
      >
        {images?.map((image) => (
          <CarouselItem key={image.uuid} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
