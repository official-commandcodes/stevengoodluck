import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const iconStyle = "w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center";

function Footer() {
  return (
    <footer className="bg-primary-100 p-padding-hr flex flex-col">
      <div className="grid grid-cols-4 gap-x-10">
        <div>
          <div className="flex items-center gap-x-2 pb-5">
            <img src="/logo.svg" alt="" className="w-[80px] h-[80px]" />
            <div>
              <h3 className="text-[30px] font-[700]">Bitsphere</h3>
              <p className="font-[200] text-[24px]">Consulting</p>
            </div>
          </div>
          <div className="font-[400] text-[18px]">Lorem ipsum dolor sit amet consectetur. Condimentum elementum molestie senectus leo a amet in. Sit suspendisse nMattis etnulla scelerisque egestas ante.</div>
        </div>

        <ul className="font-[400] text-[22px]">
          <h3 className="font-[700] text-[30px]">Company</h3>
          <li>About Us</li>
          <li>Blog</li>
          <li>Terms and Condition</li>
        </ul>

        <ul className="font-[400] text-[22px]">
          <h3 className="font-[700] text-[30px]">Resources</h3>
          <li>FAQs</li>
          <li>Privacy and Policy</li>
        </ul>

        <ul className="font-[400] text-[22px]">
          <h3 className="font-[700] text-[30px]">Contact</h3>
          <li>
            Email: <Link to="malto:hello@bitsphere.org">hello@bitsphere.org</Link>
          </li>
          <li>
            Call: <Link to="tel:07036834086">+234-7036 834 086</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-x-3 self-end">
        <Link to="/" className={iconStyle}>
          <FaWhatsapp className="text-[#090A1C] text-[1.6rem]" />
        </Link>

        <Link to="/" className={iconStyle}>
          <FaFacebook className="text-[#090A1C] text-[1.6rem]" />
        </Link>

        <Link to="/" className={iconStyle}>
          <FaInstagram className="text-[#090A1C] text-[1.6rem]" />
        </Link>

        <Link to="/" className={iconStyle}>
          <FaYoutube className="text-[#090A1C] text-[1.6rem]" />
        </Link>
      </div>

      <div className="text-center pt-[4rem] text-[22px]">&copy; {new Date().getFullYear()} Bitsphere. All right reserved.</div>
    </footer>
  );
}

export default Footer;
