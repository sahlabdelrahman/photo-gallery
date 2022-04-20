import { useDispatch, useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";

import { updateActiveImage } from "../../store/actions/actions";

import CarouselItem from "./CarouselItem/CarouselItem";

import "../../css/slider/Carousel.css";

const Carousel = () => {
  const { images, activeImage } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch(updateActiveImage(activeImage + 1)),
    onSwipedRight: () => dispatch(updateActiveImage(activeImage - 1)),
  });

  return (
    <div {...handlers} className="carousel">
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
