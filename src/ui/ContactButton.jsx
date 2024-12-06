import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";

import PropTypes from "prop-types";

function ContactButton({ children, weight = false, to = "/contact" }) {
  // Spring animation for the heading
  const headingStyles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" }, // Start hidden and slightly above
    to: { opacity: 1, transform: "translateY(0)" }, // Fade in and move into place
    config: { tension: 200, friction: 20 }, // Control animation speed
    delay: 200, // Delay before animation starts
  });

  return (
    <span>
      <Link to={to}>
        <animated.div style={headingStyles} className={`w-fit border-2 border-customAmber-50 rounded-full px-14 py-3 transition-colors duration-500 ${weight ? "bg-customAmber-50 text-primary-100 hover:bg-transparent hover:text-white" : "hover:bg-customAmber-50 hover:text-primary-100"}`}>
          {children}
        </animated.div>
      </Link>
    </span>
  );
}

ContactButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  weight: PropTypes.bool,
};

export default ContactButton;
