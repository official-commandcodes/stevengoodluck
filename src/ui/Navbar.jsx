import PropTypes from "prop-types";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { MdOutlineSegment } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";

import ContactModal from "./ContactModal";

const navItems = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About Us" },
  { to: "/", text: "Team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state for managing modal toggling
  const [showModal, setShowModal] = useState(false); // state for managing modal toggling

  // Animation variants for the navigation links using framer motion
  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1 },
  };

  // Animation variants for the mobile dropdown
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  function handleModalToggling() {
    setShowModal((show) => !show);
  }

  function handleSmoothTeam() {
    const teamSection = document.getElementById("teamSection");
    teamSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className="relative px-sm-padding-hr bg-customAmber-50 lg:px-padding-hr py-3 flex justify-between items-center">
        <Link to="/" className="w-[40px] h-[40px] md:w-auto md:h-auto">
          <img src="/logo.svg" alt="Site Logo" />
        </Link>

        <ul className="hidden lg:flex items-center gap-x-6 text-primary-100">
          {navItems.map(({ to, text }, index) => (
            <motion.li
              key={index}
              variants={linkVariants}
              initial="hidden"
              className="text-xl"
              animate="visible"
              whileHover="hover"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1, // Staggered animation
              }}
            >
              <Link onClick={text === "Team" ? handleSmoothTeam : () => {}} to={to} id={text === "Team" ? "teamId" : ""}>
                {text}
              </Link>
            </motion.li>
          ))}
        </ul>

        <SheduleCallButton mobile={false} setIsOpen={setIsOpen} />
        <button onClick={handleModalToggling} className="w-[40px] h-[40px] md:w-auto md:h-auto flex justify-center items-center lg:hidden bg-customPurple-300 py-1 px-2">
          {showModal ? <LiaTimesSolid className="text-[1.4rem]" /> : <MdOutlineSegment className="text-[1.4rem]" />}
        </button>
        {/* Mobile Dropdown */}
        <motion.div className="lg:hidden absolute z-50 left-0 right-0 top-[100%] bg-primary-900 px-8 py-6" variants={dropdownVariants} initial="hidden" animate={showModal ? "visible" : "hidden"}>
          <ul className="flex flex-col text-customAmber-50">
            {navItems.map(({ to, text }, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                className="text-xl py-2"
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
                <Link onClick={text === "Team" ? handleSmoothTeam : () => {}} to={to} id={text === "Team" ? "teamId" : ""}>
                  {text}
                </Link>
              </motion.li>
            ))}
          </ul>

          <span className="py-2">
            <SheduleCallButton mobile={true} setIsOpen={setIsOpen} />
          </span>
          {/* </div> */}
        </motion.div>
      </nav>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

function SheduleCallButton({ mobile, setIsOpen }) {
  // Hover schedule button animation using react spring
  const [styles, api] = useSpring(() => ({
    scale: 1, // Initial scale
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Initial shadow
  }));

  return (
    <animated.button
      style={styles}
      className={`${!mobile ? "hidden lg:block" : ""} bg-customPurple-300 px-5 py-2.5 rounded-md text-white font-light hover:bg-primary-100 transition-colors duration-500`}
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
  );
}

SheduleCallButton.propTypes = {
  mobile: PropTypes.bool,
  setIsOpen: PropTypes.func.isRequired,
};
