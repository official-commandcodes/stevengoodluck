import PropTypes from "prop-types";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import ContactButton from "./ContactButton";

function Category({ image, heading, children, reverse = false }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is visible
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <div ref={ref} className={`flex h-[814px] ${reverse ? "flex-row-reverse" : ""}`}>
      {/* Image Animation */}
      <motion.div
        className="w-[50%] h-full"
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
        className={`h-full w-[50%] pt-24 ${reverse ? "pr-24" : "pl-20"}`}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h2 className="text-[3.5rem] font-bold">{heading}</h2>
        <p className="leading-8 font-light text-[1.2rem] py-8">{children}</p>
        <ContactButton>Contact</ContactButton>
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
