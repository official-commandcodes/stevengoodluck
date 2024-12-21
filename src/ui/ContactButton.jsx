import { useSpring, animated } from "@react-spring/web";

import PropTypes from "prop-types";

function ContactButton({ children, weight = false, handleContact }) {
  // Spring animation for the heading
  const headingStyles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" }, // Start hidden and slightly above
    to: { opacity: 1, transform: "translateY(0)" }, // Fade in and move into place
    config: { tension: 200, friction: 20 }, // Control animation speed
    delay: 200, // Delay before animation starts
  });

  return (
    <span>
      <animated.button onClick={handleContact} style={headingStyles} className={`w-fit border-2 border-customAmber-50 rounded-[5rem] py-2 px-6 md:px-14 md:py-3 transition-colors duration-500 ${weight ? "bg-customAmber-50 text-primary-100 hover:bg-transparent hover:text-white" : "hover:bg-customAmber-50 hover:text-primary-100"}`}>
        {children}
      </animated.button>
    </span>
  );
}

ContactButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  weight: PropTypes.bool,
  handleContact: PropTypes.func.isRequired,
};

export default ContactButton;
