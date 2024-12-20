import { useSpring, animated } from "@react-spring/web";

import HeaderPhoneImage from "../ui/HeaderPhoneImage";
import ContactButton from "./ContactButton";

import { useContactContext } from "../context/ContactContext";

function Header() {
  const { handleContact } = useContactContext();

  // Spring animation for the heading
  const headingStyles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" }, // Start hidden and slightly above
    to: { opacity: 1, transform: "translateY(0)" }, // Fade in and move into place
    config: { tension: 200, friction: 20 }, // Control animation speed
    delay: 200, // Delay before animation starts
  });

  return (
    <header className="px-sm-padding-hr pb-14 md:pl-padding-hr md:py-5 md:pb-0">
      <div className="text-[19px] md:text-[24px] py-4 md:py-0 md:pt-6">Bitsphere Consulting</div>

      <div className="flex-col-reverse gap-y-16 md:gap-y-0 md:flex-row flex items-center justify-between md:gap-x-10 h-full">
        <div className="flex flex-col gap-y-[1.5rem] md:gap-y-[3rem] md:w-[50%] md:pr-32">
          <animated.h1 style={headingStyles} className="font-extrabold text-[2.7rem] max-w-[20rem] md:max-w-none leading-[3rem] md:text-[4rem] md:leading-[4.5rem]">
            Achieve Your Exchange Goals <br /> with Bitsphere Consulting
          </animated.h1>

          <animated.p style={headingStyles} className="text-[1.2rem] font-light">
            Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market knowledge and relationships help you reach your project goals efficiently.
          </animated.p>

          <ContactButton handleContact={handleContact}>Contact</ContactButton>
        </div>

        <HeaderPhoneImage />
      </div>
    </header>
  );
}

export default Header;
