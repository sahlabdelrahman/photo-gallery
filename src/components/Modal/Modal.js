import { useDispatch } from "react-redux";
import { removeSelectedImage } from "../../store/actions/actions";

import { motion } from "framer-motion";

import "../../css/Modal/Modal.css";

import Arrows from "../slider/Arrows/Arrows";
import Carousel from "../slider/Carousel";

const Modal = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      dispatch(removeSelectedImage());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <Arrows />
      <Carousel />
    </motion.div>
  );
};

export default Modal;
