import { Link } from "react-router-dom";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

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
          <ul className="flex items-center gap-x-3 font-[400] md:text-[18px]">
            <li>
              <Link to="https://x.com/fullbodyteasers">
                <FaSquareXTwitter className="text-[#ffffff] text-[1.6rem]" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <FaLinkedin className="text-[#ffffff] text-[1.6rem]" />
              </Link>
            </li>

            <li>
              <Link to="/">
                <FaTelegram className="text-[#ffffff] text-[1.6rem]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-[4rem] text-[17px] md:text-[20px]">&copy; {new Date().getFullYear()} Bitsphere. All right reserved.</div>
    </footer>
  );
}

export default Footer;
