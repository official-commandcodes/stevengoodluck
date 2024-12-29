import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { useSpring, animated } from "@react-spring/web";

import PropTypes from "prop-types";

const iconStyle = "w-[35px] h-[35px] rounded-full bg-primary-900 flex justify-center items-center";

function ContactModal({ isOpen, onClose }) {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.9)",
    config: { duration: 300 },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 flex justify-center items-start md:px-24 md:py-16 top-0 bottom-0 w-full h-full bg-[#13131352]" onClick={onClose}>
      <animated.form autoComplete="off" className="px-10 py-5 md:rounded-[1rem] bg-customAmber-50 h-full w-full md:h-fit md:w-1/2" style={animation} onClick={(e) => e.stopPropagation()}>
        <header className="flex items-center justify-between pb-3 border-b-[1px] border-[#60606052]">
          <h1 className="text-black text-[30px] font-semibold">Contact Us</h1>
          <button onClick={onClose}>
            <LiaTimesSolid className="text-[#606060] text-[1.3rem]" />
          </button>
        </header>

        <div>
          {/* Icons */}
          <div className="flex items-center gap-x-3 pt-4">
            <Link to="/" className={iconStyle}>
              <FaWhatsapp className="text-customAmber-50 text-[1.2rem]" />
            </Link>

            <Link to="/" className={iconStyle}>
              <FaFacebook className="text-customAmber-50 text-[1.2rem]" />
            </Link>

            <Link to="/" className={iconStyle}>
              <FaInstagram className="text-customAmber-50 text-[1.2rem]" />
            </Link>

            <Link to="/" className={iconStyle}>
              <FaYoutube className="text-customAmber-50 text-[1.2rem]" />
            </Link>
          </div>

          <div className="flex flex-col gap-y-4 py-4">
            <label htmlFor="username">
              <span className="block pb-1.5 text-primary-900">Name</span>
              <input type="text" placeholder="Your name" name="username" id="username" className="w-full py-2 px-2 rounded-md border-[#60606052] border-[1px] bg-transparent text-primary-900 focus:bg-customAmber-100 transition-colors" />
            </label>

            <label htmlFor="email">
              <span className="block pb-1.5 text-primary-900">Email</span>
              <input type="email" placeholder="Your Email" name="email" id="email" className="w-full py-2 px-2 rounded-md border-[#60606052] border-[1px] bg-transparent text-primary-900 focus:bg-customAmber-100 transition-colors" />
            </label>

            <label htmlFor="message">
              <span className="block pb-1.5 text-primary-900">Message</span>
              <textarea name="message" id="message" placeholder="Your message" className="resize-none w-full py-2 px-2 h-[140px] rounded-md border-[#60606052] border-[1px] bg-transparent text-primary-900 focus:bg-customAmber-100 transition-colors"></textarea>
            </label>
          </div>
        </div>

        <footer className="w-full flex justify-center items-center gap-x-7 pt-6 border-t-[1px] border-[#60606052]">
          <button className="px-7 py-2.5 rounded-[0.6rem] uppercase text-primary-900 text-[18px] font-bold">close</button>
          <button className="px-7 py-2.5 rounded-[0.6rem] bg-primary-900 uppercase text-[18px]  font-bold">submit</button>
        </footer>
      </animated.form>
    </div>
  );
}

export default ContactModal;

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
