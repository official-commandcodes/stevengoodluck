function Connect() {
  return (
    <section className="p-sm-padding-hr md:p-padding-hr flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-16 bg-primary-950" id="ContactSection">
      <div className="h-full self-start flex-1 text-white">
        <h2 className="text-[1.7rem] md:text-[40px] font-[700] pb-5">Connect with Our Crypto Experts</h2>
        <p className="text-[16px] md:text-[20px] font-[400]">Reach our to Bitsphere Consulting for tailored crypto exchange solutions.</p>
      </div>

      <form className="w-full flex-1" autoComplete="off">
        <div className="flex flex-col md:flex-row gap-x-4 w-full pb-6">
          <label htmlFor="username" className="w-full">
            <span className="block text-[18px] md:text-[24px] text-white">Name</span>
            <input type="text" id="username" name="username" spellCheck="false" className="bg-customGray-100 rounded-lg w-full px-4 py-3" />
          </label>

          <label htmlFor="email" className="w-full pt-4 md:pt-0">
            <span className="block text-[18px] md:text-[24px] text-white">Email</span>
            <input type="email" name="email" id="email" spellCheck="false" className="bg-customGray-100 rounded-lg w-full px-4 py-3" />
          </label>
        </div>

        <label htmlFor="message">
          <span className="block text-[18px] md:text-[24px] text-white">Message</span>
          <textarea name="message" id="message" spellCheck="false" className="bg-customGray-100 rounded-lg w-full px-4 py-3 resize-none h-[10rem]"></textarea>
        </label>

        <button className="w-fit border-2 mt-6 border-customAmber-50 text-white rounded-full px-10 py-2 md:px-14 md:py-3 hover:bg-customAmber-50 transition-colors duration-500 hover:text-primary-100">Send Message</button>
      </form>
    </section>
  );
}

export default Connect;
