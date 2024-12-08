import { useSpring, animated } from "@react-spring/web";

import HeaderPhoneImage from "../ui/HeaderPhoneImage";
import ContactButton from "./ContactButton";

function Header() {
  // Spring animation for the heading
  const headingStyles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" }, // Start hidden and slightly above
    to: { opacity: 1, transform: "translateY(0)" }, // Fade in and move into place
    config: { tension: 200, friction: 20 }, // Control animation speed
    delay: 200, // Delay before animation starts
  });

  return (
    <header className="pl-padding-hr py-5 pb-0">
      <div className="text-[24px] pt-6 ">Bitsphere Consulting</div>

      <div className="flex items-center justify-between gap-x-10 h-full">
        <div className="flex flex-col gap-y-[3rem] w-[50%] pr-32">
          <animated.h1 style={headingStyles} className="font-extrabold text-[4rem] leading-[4.5rem]">
            Achieve Your Exchange Goals <br /> with Bitsphere Consulting
          </animated.h1>

          <animated.p style={headingStyles} className="text-[1.2rem] font-light">
            Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market knowledge and relationships help you reach your project goals efficiently.
          </animated.p>

          <ContactButton>Contact</ContactButton>
        </div>

        <HeaderPhoneImage />
      </div>
    </header>
  );
}

export default Header;
