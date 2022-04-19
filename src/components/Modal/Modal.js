import { motion } from "framer-motion";

import "../../css/Modal/Modal.css";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
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
        src={selectedImg}
        alt="enlarged pic"
      />
    </motion.div>
  );
};

export default Modal;
