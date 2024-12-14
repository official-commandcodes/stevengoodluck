import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ContactButton from "./ContactButton";

import { useContactContext } from "../context/ContactContext";

function Growth({ heading, image, children }) {
  const { handleContact } = useContactContext();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the container is in view
      transition={{ duration: 0.6 }} // Add delay for staggered animation
      variants={fadeInUp}
    >
      <div className="w-full h-[65%] overflow-hidden" style={{ borderRadius: "1.5rem" }}>
        <img src={image} alt={heading} className="w-full h-full object-cover" />
      </div>

      <div className="h-[35%] flex flex-col justify-between pt-4">
        <h3 className="font-bold text-[1.8rem]">{heading}</h3>
        <p className="text-[1.2rem] py-3">{children}</p>

        <div className="w-fit">
          <ContactButton handleContact={handleContact}>More info</ContactButton>
        </div>
      </div>
    </motion.div>
  );
}

Growth.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Growth;
