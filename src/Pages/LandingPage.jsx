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
          Bitsphere Consulting connects projects with the right people for Tier 1 and centralized exchanges. Our market knowledge and relationships help you reach your project goals efficiently.
        </Category>

        <Category reverse={true} image="/category--2.png" heading="Optimized Solutions">
          Elevate your crypto exchange experience with tailored, innovative solutions exclusively designed for the future of blockchair
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
      <section className="bg-customAmber-50 p-sm-padding-hr md:p-[6rem] text-[#090A1C] text-center">
        <div>
          <h2 className="text-[24px] md:text-[40px] font-[700]">Holistic Approaches to Digital Asset Management</h2>
          <p className="text-[17px] md:text-[24px] font-[400]">At Bitsphere Consulting, we champion holistic digital asset management, fostering innovation and security in UAE’s crypto exchanges.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-x-[3rem] py-[1rem] md:py-[5rem]">
          <Center title="Client-Centric">We prioritize the needs of our clients, ensuring tailored solutions for each union challenge.</Center>
          <Center title="Expertise">Our team brings deep knowledge and experience in the crypto exchange sector.</Center>
          <Center title="Collaboration">We work closely who ensure receive their goals, fostering strong sorroudings</Center>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-x-[3rem] ">
          <Center title="+20 years">Providing Road solutions for crypto exchanges.</Center>
          <Center title="24/7 Support">We offer round-the-cook support for all our work</Center>
          <Center title="99.9% Uptime">We offer round-the-cook support for all our work</Center>
          <Center title="Global Reach">Serving comes free various arts of the world.</Center>
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
      <h2 className="font-[700] text-[24px] md:text-[34px] pb-1 md:pb-3">{title}</h2>
      <p className="font-[400] text-[16px] md:text-[22px]">{children}</p>
    </div>
  );
}

Center.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
