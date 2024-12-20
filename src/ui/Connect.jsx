import { useRef, useState } from "react";
import toast from "react-hot-toast";

function Connect() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleFormSubmission(e) {
    e.preventDefault();

    if (!usernameRef?.current?.value || !emailRef?.current?.value || !messageRef?.current?.value) {
      return toast.error("Please fill all form fields.", {
        duration: 2000,
      });
    }

    setLoading(true);

    const response = await fetch("https://contact-form-emailer.onrender.com/api/get-in-touch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: usernameRef?.current?.value,
        email: emailRef?.current?.value,
        message: messageRef?.current?.value,
      }),
    });

    setLoading(false);

    const data = await response.json();

    if (response.ok) {
      return toast.success(data.message, {
        duration: 3000,
      });
    }
  }

  return (
    <section className="p-sm-padding-hr md:p-padding-hr flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-16 bg-primary-950" id="ContactSection">
      <div className="h-full self-start flex-1 text-white">
        <h2 className="text-[24px] md:text-[40px] font-[700] pb-3 md:pb-5">Connect with Our Crypto Experts</h2>
        <p className="text-[16px] md:text-[20px] font-[400]">Reach our to Bitsphere Consulting for tailored crypto exchange solutions.</p>
      </div>

      <form className="w-full flex-1" autoComplete="off" onSubmit={handleFormSubmission}>
        <div className="flex flex-col md:flex-row gap-x-4 w-full pb-6">
          <label htmlFor="username" className="w-full">
            <span className="block text-[18px] md:text-[24px] text-white">Name</span>
            <input type="text" ref={usernameRef} id="username" name="username" spellCheck="false" className="bg-customGray-100 rounded-lg w-full px-4 py-3" />
          </label>

          <label htmlFor="email" className="w-full pt-4 md:pt-0">
            <span className="block text-[18px] md:text-[24px] text-white">Email</span>
            <input type="email" ref={emailRef} name="email" id="email" spellCheck="false" className="bg-customGray-100 rounded-lg w-full px-4 py-3" />
          </label>
        </div>

        <label htmlFor="message">
          <span className="block text-[18px] md:text-[24px] text-white">Message</span>
          <textarea name="message" ref={messageRef} id="message" spellCheck="false" className="bg-customGray-100 rounded-lg w-full px-4 py-3 resize-none h-[10rem]"></textarea>
        </label>

        <button className="w-fit flex items-center gap-x-2 transition-all border-2 mt-6 border-customAmber-50 text-white rounded-full px-10 py-2 md:px-14 md:py-3 hover:bg-customAmber-50 duration-500 hover:text-primary-100">
          {loading && (
            <span>
              {/* prettier-ignore */}
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z" opacity="0.5" /><path fill="white" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"><animateTransform attributeName="transform" dur="1.2s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate" /></path></svg>
            </span>
          )}
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
}

export default Connect;
