import { useEffect, useRef, useState } from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialItem from "./TestimonialItem";

const buttonStyle = "flex justify-center items-center w-10 h-10 md:w-14 md:h-14 rounded-full transition-colors duration-500";
function Testimonial() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Update total slides dynamically when content changes
  useEffect(() => {
    const totalItems = sliderRef.current?.innerSlider?.state.slideCount || 0;
    setTotalSlides(totalItems);
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 667) {
      setSlidesToShow(1);
    } else if (window.innerWidth > 667 && window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  // Managing slides for various screens
  useEffect(() => {
    // Initialize the slide count on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Disable default arrow
    centerMode: false, // Optional: Center the active slide
    afterChange: (current) => setCurrentSlide(current), // Update current slide index
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const isAtFirstSlide = currentSlide === 0;
  const isAtLastSlide = currentSlide >= totalSlides - slidesToShow;

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

        <TestimonialItem image="/company--1.png" testimonyBy="Mar Chamerb in Co-Founder Biffinity">
          Bitsphere Consulting’s expertise in the crypto space is unparalleled. Their innovative solutions have significantly boosted both our operational efficiency and security measures. Partnering with them has been a pivotal step in our business growth and relationship.
        </TestimonialItem>

        <TestimonialItem image="/company--2.png" testimonyBy="Mar Chamerb in Co-Founder Biffinity">
          Bitsphere Consulting’s expertise in the crypto space is unparalleled. Their innovative solutions have significantly boosted both our operational efficiency and security measures. Partnering with them has been a pivotal step in our business growth and relationship.
        </TestimonialItem>
      </Slider>

      <div className="pt-10 flex justify-center md:justify-start items-center gap-x-4">
        <button className={`${buttonStyle} ${isAtFirstSlide ? "bg-[#616161] cursor-not-allowed" : "bg-customAmber-50"}`} disabled={isAtFirstSlide} onClick={goToPrev}>
          <HiArrowLongLeft className="text-[#090A1C] text-xl md:text-3xl" />
        </button>
        <button className={`${buttonStyle}  ${isAtLastSlide ? "bg-[#616161] cursor-not-allowed" : "bg-customAmber-50"}`} disabled={isAtLastSlide} onClick={goToNext}>
          <HiArrowLongRight className="text-[#090A1C] text-xl md:text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
