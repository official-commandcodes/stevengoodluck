import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import Vision from "../ui/Vision";

function About() {
  return (
    <div>
      <Navbar />

      <header>
        <div className="text-[24px] px-20 py-6">Bitsphere Consulting</div>

        <div className="h-[80vh] relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <img src="/about-bg.jpeg" alt="About Background Image" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-4 justify-center items-center bg-[#13131352]">
            <h1 className="text-[48px] font-bold text-white">Welcome To Bitsphere Consulting </h1>
            <p id="groteskEl" className="text-[32px] font-medium">
              Guiding Light: Illuminate Your Journey with Faith.
            </p>
          </div>
        </div>
      </header>

      <section className="px-20 py-20 bg-primary-100">
        <h2 className="uppercase text-center pb-10 text-[40px] font-semibold">About us</h2>

        <div className="flex flex-col gap-y-8 text-[18px] font-normal">
          <p>Lorem ipsum dolor sit amet consectetur. Id scelerisque amet aliquam id tincidunt sapien felis faucibus. Egestas blandit faucibus nec nullam quisque tellus. Ultricies arcu nulla diam commodo suspendisse vitae enim. Convallis arcu sagittis nullam velit lorem risus aliquam elementum.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Id scelerisque amet aliquam id tincidunt sapien felis faucibus. Egestas blandit faucibus nec nullam quisque tellus. Ultricies arcu nulla diam commodo suspendisse vitae enim. Convallis arcu sagittis nullam velit lorem risus aliquam elementum.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Id scelerisque amet aliquam id tincidunt sapien felis faucibus. Egestas blandit faucibus nec nullam quisque tellus. Ultricies arcu nulla diam commodo suspendisse vitae enim. Convallis arcu sagittis nullam velit lorem risus aliquam elementum.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Egestas scelerisque aliquet nunc purus iaculis aenean vitae phasellus. Viverra massa eget commodo sed leo et lobortis aliquet. Enim ipsum ultrices sagittis egestas pharetra nulla. Urna purus ut massa adipiscing augue. Amet sed id sed etiam sit fusce. Vulputate id libero elementum sagittis massa. Facilisis donec sit eget nunc sed. Risus penatibus vulputate curabitur at porttitor velit lacus lacus at. Eu arcu elementum quam in viverra lacus.
            Tellus a orci mattis facilisis urna faucibus dignissim. Sit enim aliquam urna sed amet gravida mattis. Volutpat in mattis id malesuada hendrerit dui orci. Sed facilisis elementum enim mattis dolor cras. Gravida lorem donec viverra porttitor. Velit lacus condimentum morbi eleifend eu orci. Praesent vulputate in diam pellentesque facilisis tellus nulla tellus. Eu egestas turpis aliquam facilisi tincidunt consectetur. Mi dui amet senectus ac. Sed fames id facilisi egestas in. Ut
            praesent morbi eu dis nibh ornare vitae. Quis laoreet orci placerat ut ligula ut diam. Pharetra etiam malesuada mauris nibh fames aliquam massa adipiscing. Quam sollicitudin habitant massa egestas. Felis ut quis potenti leo. Ante sit nibh non nisl tristique adipiscing eu pellentesque eu. Egestas eget felis dolor cursus in vehicula sed. Fermentum sit diam vel sem posuere velit ultricies ipsum. Lectus velit sit porttitor arcu. Adipiscing ac lectus ac nec. Enim praesent leo ac dolor
            hendrerit donec libero pulvinar. Amet amet molestie proin tincidunt netus ac. Ornare nulla imperdiet ultrices cras ac augue id. Sed at vel eleifend ut diam elementum cursus. Sit egestas varius velit sit.
          </p>
        </div>
      </section>

      <section className="px-20 py-14 bg-customAmber-50">
        <h2 className="text-black font-bold text-[40px] pb-10">Our Vision for the Future</h2>

        <div className="grid grid-cols-3 gap-6">
          <Vision title="Community Driven">we will provide the best price for you , from the best quality we will give you a specials price compared to other places and we will give you other bonuses.</Vision>
          <Vision title="Action Oriented">AN easy process is our advantage, you don’t have to brother taking care of your needs, we will be ready help you until its finished.</Vision>
          <Vision title="Skilled Based">Quality first, all projects are backed by our fantastic support & 100% satisfaction guarantee.</Vision>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
