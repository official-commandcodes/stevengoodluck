import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineSegment } from "react-icons/md";

import ContactModal from "./ContactModal";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About Us" },
  { to: "/", text: "Team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state for managing modal toggling

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

  useEffect(() => {
    const teamIdBtn = document.getElementById("teamId");
    const teamSection = document.getElementById("teamSection");

    teamIdBtn.addEventListener("click", () => {
      teamSection.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <>
      <nav className="px-sm-padding-hr bg-customAmber-50 lg:px-padding-hr py-3 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Site Logo" />
        </Link>

        <ul className="hidden lg:flex items-center gap-x-6 text-primary-100">
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
                <Link to={to} id={text === "Team" ? "teamId" : ""}>
                  {text}
                </Link>
              </li>
            </motion.li>
          ))}
        </ul>

        <animated.button
          style={styles}
          className="hidden lg:block bg-customPurple-300 h-full px-5 py-2.5 rounded-md text-white font-light hover:bg-primary-100 transition-colors duration-500"
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
          onClick={() => setIsOpen(true)}
        >
          Schedule a Call
        </animated.button>

        <button className="block lg:hidden bg-customPurple-300 p-2">
          <MdOutlineSegment className="text-[2rem]" />
        </button>
      </nav>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
