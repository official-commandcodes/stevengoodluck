import { ChevronLeft, ChevronRight } from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import TestimonialItem from "./TestimonialItem";

const buttonStyle = "flex justify-center items-center w-14 h-14 rounded-full bg-customAmber-50 hover:bg-customAmber-100 transition-colors duration-500";

function Testimonial() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Disable default arrow
    centerMode: true, // Optional: Center the active slide
    centerPadding: "0", // Disable extra padding in center mode
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="relative w-full">
      <Slider {...settings} ref={sliderRef}>
        <TestimonialItem image="/company--1.png" testimonyBy="Mar Chamerb in Co-Founder Biffinity">
          Bitsphere Consulting transformed our crypto exchange operations seamlessly. Their holistic solutions are innovative and reliable, ensuring our platform’s efficiency and security. Collaborating with them has been a game-changer for our business globally.
        </TestimonialItem>

        <TestimonialItem image="/company--2.png" testimonyBy="Mar Chamerb in Co-Founder Biffinity">
          Bitsphere Consulting’s expertise in the crypto space is unparalleled. Their innovative solutions have significantly boosted both our operational efficiency and security measures.
        </TestimonialItem>

        <TestimonialItem image="/company--3.png" testimonyBy="Mar Chamerb in Co-Founder Biffinity">
          Bitsphere Consulting’s expertise in the crypto space is unparalleled. Their innovative solutions have significantly boosted both our operational efficiency and security measures. Partnering with them has been a pivotal step in our business growth and relationship.
        </TestimonialItem>

        <TestimonialItem image="/company--2.png" testimonyBy="Mar Chamerb in Co-Founder Biffinity">
          Bitsphere holpad us to achieve Kraken listing where it felt almost an impossible reach. The team are incredibly professional and provide updates in a timely manner. Their relationships in the market is vast.
        </TestimonialItem>
      </Slider>

      <div className="pt-10 flex items-center gap-x-4">
        <button className={buttonStyle} onClick={goToPrev}>
          <ChevronLeft color="black" size={30} />
        </button>
        <button className={buttonStyle} onClick={goToNext}>
          <ChevronRight color="black" size={30} />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
