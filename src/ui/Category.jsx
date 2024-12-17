import PropTypes from "prop-types";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import ContactButton from "./ContactButton";

import { useContactContext } from "../context/ContactContext";

function Category({ image, heading, children, reverse = false }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  const { handleContact } = useContactContext();

  if (inView) {
    controls.start("visible");
  }

  return (
    <div ref={ref} className={`flex flex-col md:flex-row md:h-[814px] ${reverse ? "flex-row-reverse" : ""}`}>
      {/* Image Animation */}
      <motion.div
        className="md:w-[50%] h-full"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
      >
        <img src={image} alt={heading} className="h-full w-full object-cover" />
      </motion.div>

      {/* Content Animation */}
      <motion.div
        className={`h-full md:w-[50%] text-center md:text-left pt-6 md:pt-24 ${reverse ? "md:pr-24" : "md:pl-20"}`}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h2 className="text-[2rem] md:text-[3.5rem] font-bold">{heading}</h2>
        <p className="leading-6 md:leading-8 font-light text-[0.9rem] md:text-[1.2rem] py-4 md:py-8">{children}</p>
        <ContactButton handleContact={handleContact}>Contact</ContactButton>
      </motion.div>
    </div>
  );
}

// Define PropTypes for the Category component
Category.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default Category;
