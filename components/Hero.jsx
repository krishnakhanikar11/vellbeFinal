import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="flex md:flex-row flex-col paddingY mt-10 paddingX ">
      <div className="flex-1 flex flexCenter md:my-0 my-10 ">
        <div>
          <h1 className="heading2  text-primary tracking-[-4%]">
            We celebrate your first step towards{" "}
            <span className="text-secondary ">WellBeing.</span>
          </h1>
          <p className="paragraph mt-2 mb-16">
            Empowering you to live your best life
          </p>

<div className="flex-col md:flex-row gap-x-5">
<a href="https://forms.gle/znZ65mb9egjkz4CCA">
            <button
              type="button"
              className="w-full md:mt-0 md:w-auto md:mr-4 inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
            >
              GET STARTED
            </button>
          </a>

          <a href="https://calendly.com/vivekbehl">
            <button
              type="button"
              className="mt-5 w-full md:mt-0 md:w-auto outline outline-offset-0gt outline-primary inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-primary bg-white text-base hover:text-secondary"
            >
              BOOK A VIDEO CALL
            </button>
          </a>
</div>
          
        </div>
      </div>
      <div className="flex-1 flex flexCenter md:my-0 my-10 ">
        <Image src="/hi.png" alt="vellbe" width={600} height={600} className="w-[100%] priority    h-[100%]" priority/>
      </div>
    </section>
  );
};

export default Hero;
