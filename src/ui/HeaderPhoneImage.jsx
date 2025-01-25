import { motion } from "framer-motion";

const PhoneImage = () => {
  return (
    <motion.div
      className="md:w-[50%] h-full"
      initial={{ opacity: 0, y: 30 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Fade in and rise to position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in transition
    >
      <motion.img
        src="/header-frame.png" // Replace with the phone image URL
        alt="Phone with chart"
        className="shadow-lg w-full h-full"
      />
    </motion.div>
  );
};

export default PhoneImage;
