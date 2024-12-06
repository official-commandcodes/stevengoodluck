import { motion } from "framer-motion";

const PhoneImage = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30 }} // Start slightly below and invisible
      animate={{ opacity: 1, y: 0 }} // Fade in and rise to position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth fade-in transition
      whileHover={{
        scale: 1.05, // Slightly enlarge on hover
        rotate: 2, // Add a subtle rotation
      }}
    >
      <motion.img
        src="/header-frame.png" // Replace with the phone image URL
        alt="Phone with chart"
        className="shadow-lg h-full"
        animate={{
          y: [0, -10, 0], // Floating effect: up and down motion
        }}
        transition={{
          duration: 3, // Time for one full float cycle
          repeat: Infinity, // Loop indefinitely
          repeatType: "reverse", // Reverse direction each cycle
        }}
      />
    </motion.div>
  );
};

export default PhoneImage;
