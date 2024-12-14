import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa6";

import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const faqData = [
  { question: "What is Bitsphere Consulting?", answer: "At Bitsphere consulting, we understand that design is the heart of any digital product. That’s why we provide we need to provide majority a vast library of high-quality Platform faces to elegant icons." },
  { question: "What scholarship methods do you accept?", answer: "At Bitsphere consulting, we understand that design is the heart of any digital product. That’s why we provide we need to provide majority a vast library of high-quality Platform faces to elegant icons." },
  { question: "Are there any promotions or bonuses available?", answer: "At Bitsphere consulting, we understand that design is the heart of any digital product. That’s why we provide we need to provide majority a vast library of high-quality Platform faces to elegant icons." },
  { question: "What is your return and refund policy?", answer: "At Bitsphere consulting, we understand that design is the heart of any digital product. That’s why we provide we need to provide majority a vast library of high-quality Platform faces to elegant icons." },
  { question: "What is purpose of Bitsphere consulting?", answer: "At Bitsphere consulting, we understand that design is the heart of any digital product. That’s why we provide we need to provide majority a vast library of high-quality Platform faces to elegant icons." },
];

function Faqs() {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div>
      <Navbar />

      <div className="hidden md:block text-[24px] px-20 py-6">Bitsphere Consulting</div>

      <section className="p-sm-padding-hr md:px-[11rem]">
        <div className="flex flex-col justify-center items-center gap-y-3 text-center pb-10">
          <span className="bg-customPurple-300 flex justify-center items-center uppercase font-normal text-white w-[84px] h-[44px] rounded-[4px]">faq</span>
          <h2 className="font-bold text-[24px] md:text-[38px]">Frequently Asked Questions</h2>
          <p className="font-normal text-[16px] px-[3rem] md:text-[20px] md:px-[9rem]">Welcome to our FAQ page! We’ve compiled a list of commonly asked questions to provide you with quick and informative answers.</p>
        </div>

        <div className="border-y-2 border-[#61616199]">
          {faqData.map((item, index) => (
            <AccordionItem key={index} {...item} isLastEl={index + 1 === faqData.length} />
          ))}
        </div>

        <div className="px-0 py-0 md:px-[9rem] md:py-[3rem]">
          <div className="bg-customAmber-50 rounded-[0.5rem] flex flex-col justify-center items-center text-primary-900 px-12 py-8 text-center">
            <h3 className="font-bold text-[28px]">Still have a question?</h3>
            <p className="font-normal text-[16px] py-4">You can submit your question or request through our contact form. Please provide as much detail as possible so that we can assist you effectively.</p>
            <button className="bg-primary-900 px-10 py-3 rounded-[0.3rem] text-customAmber-50">Email Us</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Faqs;

/**
 *
 * @param {string} param1
 * @param {string} param2
 * @returns JSX
 *
 */
function AccordionItem({ question, answer, isLastEl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={` pb-5 ${isLastEl ? "" : "border-b-2 border-[#61616199]"}`}>
      <div onClick={() => setIsOpen(!isOpen)} tabIndex="-1" className="flex justify-between items-center cursor-pointer">
        <h3 className="text-[20px] md:text-[24px] font-bold pt-5">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FaChevronDown />
        </motion.div>
      </div>

      <motion.div initial={{ height: 0 }} animate={{ height: isOpen ? "auto" : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden text-[16px] md:text-[18px] font-normal">
        <p>{answer}</p>
      </motion.div>
    </div>
  );
}

AccordionItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isLastEl: PropTypes.bool.isRequired,
};
