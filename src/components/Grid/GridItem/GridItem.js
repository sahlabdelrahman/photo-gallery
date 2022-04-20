import { useDispatch } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { selectImage } from "../../../store/actions/actions";

import "react-lazy-load-image-component/src/effects/blur.css";
import "../../../css/Grid/GridItem/GridItem.css";

const GridItem = ({ image, index }) => {
  const dispatch = useDispatch();

  const { name, url } = image;

  const handleClicked = () => {
    dispatch(selectImage(image, index));
  };

  return (
    <div className="gridItem-wrapper" onClick={() => handleClicked()}>
      <div className="zoom-icon">
        <img
          src="https://img.icons8.com/ios/50/000000/collapse.png"
          alt="icon"
        />
      </div>
      <LazyLoadImage alt={name} effect="blur" src={url} />
    </div>
  );
};

export default GridItem;
