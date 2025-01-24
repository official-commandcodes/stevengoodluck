import PropTypes from "prop-types";

import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
import Category from "../ui/Category";
import Growth from "../ui/Growth";
import Testimonial from "../ui/testimonial/Testimonial";
import Connect from "../ui/Connect";
import LeadingInnovators from "../ui/Crypto/LeadingInnovators";
import ContactButton from "../ui/ContactButton";
import Footer from "../ui/Footer";
import AnimatedText from "../ui/AnimatedText";
import { useContactContext } from "../context/ContactContext";

function LandingPage() {
  const { handleContact } = useContactContext();

  return (
    <div>
      <Navbar />
      <Header />

      {/* Categories */}
      <section className="border_top_line px-sm-padding-hr pb-14 md:pb-0 md:px-padding-hr flex flex-col gap-y-10 md:gap-y-0">
        <Category reverse={false} image="/category--1.png" heading="Venture Capital">
          Bitsphere Consulting specialize in connecting ambitious entrepreneurs and startups with renowned venture capital firms, fostering strategic partnerships that drive innovation, secure funding, and accelerate growth. By bridging the gap between visionary ideas and the resources needed to bring them to life.
        </Category>

        <Category reverse={true} image="/category--2.png" heading="Tier 1 CEX and Launchpads">
          We offer unparalleled access to top-tier launchpads and centralized exchanges, empowering projects to achieve successful token launches and reach global audiences. By leveraging our extensive network and expertise, we ensure seamless onboarding, enhanced visibility, and robust market entry strategies. Whether you’re launching a new project or scaling an existing one, our connections open doors to premier platforms that drive growth, liquidity, and trust in the blockchain ecosystem.
        </Category>

        <Category image="/category--3.png" heading="Tailored advisory">
          Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market knowledge and relationships help you reach your project goals hhhhh niche girl gren priority efficiently.
        </Category>
      </section>

      {/* Holistic Growth */}
      <section className="p-sm-padding-hr md:p-padding-hr bg-customPurple-400">
        <h2 className="font-bold text-[1.7rem] md:text-[2.3rem] pb-10">Unlock Holistic Exchange Growth</h2>

        <div className="grid md:grid-cols-2 gap-y-16 gap-x-10">
          <Growth heading="Comprehensive Exchange Audits" image="/growth--1.png">
            Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market tly.
          </Growth>

          <Growth heading="Regulatory Compliance Solutions" image="/growth--2.png">
            Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market tly.
          </Growth>

          <Growth heading="Custom Crypto Integration" image="/growth--3.png">
            Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market tly.
          </Growth>

          <Growth heading="Strategic Market Positioning" image="/growth--4.png">
            Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market tly.
          </Growth>
        </div>
      </section>

      {/* Reviews */}
      <section className="p-sm-padding-hr md:p-padding-hr bg-primary-100">
        <Testimonial />
      </section>

      {/* Connect */}
      <Connect />

      {/* Innovators */}
      <LeadingInnovators />

      {/* Discover Bitsphere */}
      <section className="bg-primary-950 h-[25rem] flex justify-center items-center">
        <div className="p-6 md:p-0 md:w-[577px] flex flex-col justify-center items-center">
          <AnimatedText />
          <ContactButton handleContact={handleContact} weight={true}>
            Contact
          </ContactButton>
        </div>
      </section>

      {/* Digital Assets Management */}
      <section className="bg-customAmber-50 p-sm-padding-hr md:p-[4rem] text-[#090A1C] text-center">
        <div>
          <h2 className="text-[20px] md:text-[34px] font-[700]">Empowering Growth with Tailored Blockchain Solutions</h2>
          <p className="text-[17px] md:text-[22px] font-[400]">We provide tailored blockchain solutions and industry expertise to help businesses, developers, and investors thrive in a fast-changing digital world.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-x-[3rem] py-[1rem] md:py-[5rem]">
          <Center title="VC Fundraising Expertise:">Specialized in connecting Web3 projects with top-tier venture capital firms for successful fundraising rounds.</Center>
          <Center title="Comprehensive Project Support">Offering tailored end-to-end solutions, from concept validation to post-funding growth strategies.</Center>
          <Center title="Global Network Access">Leveraging an extensive network of investors, advisors, and industry leaders to accelerate your project&apos;s reach.</Center>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-x-[3rem] ">
          <Center title="Strategic Partnerships">Facilitating collaborations with launchpads, incubators, and other key players in the Web3 ecosystem.</Center>
          <Center title="Investor-Ready Preparation">Assisting with pitch deck creation, tokenomics, and financial model your project investment-ready.</Center>
          <Center title="Post-Funding Advisory">Providing guidance on fund allocation, token launches, and scaling to ensure sustainable growth.</Center>
          <Center title="Regulatory & Compliance Support">Ensuring your project adheres to global regulatory requirements for seamless fundraising and market entry.</Center>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;

function Center({ title, children }) {
  return (
    <div className="p-4 md:p-0">
      <h2 className="font-[700] text-[18px] md:text-[24px] pb-1 md:pb-3">{title}</h2>
      <p className="font-[400] text-[14px] md:text-[17px]">{children}</p>
    </div>
  );
}

Center.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
