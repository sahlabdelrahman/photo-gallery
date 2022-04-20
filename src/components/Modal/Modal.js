import { motion } from "framer-motion";

import "../../css/Modal/Modal.css";

import CloseIcon from "../slider/CloseIcon/CloseIcon";
import Arrows from "../slider/Arrows/Arrows";
import Carousel from "../slider/Carousel";
import Counter from "../slider/Counter/Counter";

const Modal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
    >
      <CloseIcon />
      <Arrows />
      <Carousel />
      <Counter />
    </motion.div>
  );
};

export default Modal;
