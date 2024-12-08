import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About Us" },
  { to: "/team", text: "Team" },
];

export default function Navbar() {
  // Animation variants for the navigation links using framer motion
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1 },
  };

  // Hover schedule button animation using react spring
  const [styles, api] = useSpring(() => ({
    scale: 1, // Initial scale
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Initial shadow
  }));

  return (
    <nav className="bg-customAmber-50 px-padding-hr py-3 flex justify-between items-center">
      <Link to="/">
        <img src="/logo.svg" alt="Site Logo" />
      </Link>

      <ul className="flex items-center gap-x-6 text-primary-100">
        {navItems.map(({ to, text }, index) => (
          <motion.li
            key={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.1, // Staggered animation
            }}
          >
            <li className="text-xl">
              <Link to={to}>{text}</Link>
            </li>
          </motion.li>
        ))}
      </ul>

      <animated.button
        style={styles}
        className="bg-customPurple-300 h-full px-5 py-2.5 rounded-md text-white font-light hover:bg-primary-100 transition-colors duration-500"
        onMouseEnter={() =>
          api.start({
            scale: 1.1, // Slightly enlarge on hover
            boxShadow: "0px 8px 15px #151730ae", // Add glowing shadow
          })
        }
        onMouseLeave={() =>
          api.start({
            scale: 1, // Return to normal size
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Return shadow to normal
          })
        }
      >
        Schedule a Call
      </animated.button>
    </nav>
  );
}
