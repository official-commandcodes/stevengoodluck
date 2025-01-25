import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const iconStyle = "w-[44px] h-[44px] rounded-full bg-white flex justify-center items-center";

function Footer() {
  return (
    <footer className="bg-primary-100 p-sm-padding-hr md:p-padding-hr flex flex-col">
      <div className="grid md:grid-cols-4 gap-y-6 md:gap-y-0 md:gap-x-10">
        <div>
          <div className="flex items-center gap-x-2 pb-5">
            <img src="/logo.svg" alt="" className="w-[80px] h-[80px]" />
            <div>
              <h3 className="text-[24px] md:text-[30px] font-[700]">Bitsphere</h3>
              <p className="font-[200] text-[18px] md:text-[24px] text-right">Consulting</p>
            </div>
          </div>
          <div className="font-[400] text-[16px]">One Central, Dubai World Trade Centre - Office 01-14, Level 1 The Offices 4 - Dubai - United Arab Emirates</div>
        </div>

        <div>
          <ul className="footer_li font-[400] md:text-[18px]">
            <h3 className="font-[700] text-[24px] md:text-[30px] pb-2 md:pb-4">Contact</h3>
            <li>
              Email: <Link to="malto:hello@bitsphere.org">hello@bitsphere.org</Link>
            </li>
            <li>
              Call: <Link to="tel:07036834086">+234-7036 834 086</Link>
            </li>
          </ul>

          <div className="flex items-center justify-center md:justify-start gap-x-3 pt-8">
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
        </div>
      </div>

      <div className="text-center pt-[4rem] text-[17px] md:text-[20px]">&copy; {new Date().getFullYear()} Bitsphere. All right reserved.</div>
    </footer>
  );
}

export default Footer;
