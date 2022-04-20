import { useDispatch } from "react-redux";
import { removeSelectedImage } from "../../store/actions/actions";

import { motion } from "framer-motion";

import "../../css/Modal/Modal.css";

const Modal = ({ selectedImage }) => {
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
      <motion.img
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        src={selectedImage.url}
        alt="enlarged pic"
      />
    </motion.div>
  );
};

export default Modal;
