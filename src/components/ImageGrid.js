import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images"); //listens to the collection in the databse and return any docs we have

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ scale: 1.1, opacity: 1 }}
            whileTap={{ scale: 1 }}
            layout
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="user upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
