import { useDispatch } from "react-redux";
import { removeSelectedImage } from "../../../store/actions/actions";

import "../../../css/slider/CloseIcon/CloseIcon.css";

const CloseIcon = () => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(removeSelectedImage())} className="close-icon">
      &times;
    </div>
  );
};

export default CloseIcon;
