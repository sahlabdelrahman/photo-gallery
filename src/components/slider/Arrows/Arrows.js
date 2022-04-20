import { useDispatch, useSelector } from "react-redux";

import { updateActiveImage } from "../../../store/actions/actions";

import "../../../css/slider/Arrows/Arrows.css";

const Arrows = () => {
  const dispatch = useDispatch();
  const { activeImage } = useSelector((state) => state.images);

  return (
    <div className="arrows">
      <span
        onClick={() => dispatch(updateActiveImage(activeImage - 1))}
        className="prev"
      >
        &#10094;
      </span>
      <span
        onClick={() => dispatch(updateActiveImage(activeImage + 1))}
        className="next"
      >
        &#10095;
      </span>
    </div>
  );
};

export default Arrows;
