import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
import Category from "../ui/Category";
import Growth from "../ui/Growth";
import Testimonial from "../ui/testimonial/Testimonial";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />

      {/* Categories */}
      <section className="px-padding-hr flex flex-col">
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
      <section className="p-padding-hr bg-customPurple-400">
        <h2 className="font-bold text-[2.3rem] pb-10">Unlock Holistic Exchange Growth</h2>

        <div className="grid grid-cols-2 gap-y-6 gap-x-10">
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
      <section className="p-padding-hr bg-primary-100">
        <Testimonial />
      </section>
    </div>
  );
}

export default LandingPage;
