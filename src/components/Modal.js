import { useRef } from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  //checks to see if user clicked outside of modal. If so, it will close out the modal
  let backdropRef = useRef();
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleBackdropClick}
      ref={backdropRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
