import React from 'react'


const CTA = () => {
  return (
    <section
      id="service"
      className="paddingX  paddingY  bg-cover  bg-[center_-4rem] bg-no-repeat"
      style={{ backgroundImage: `url(/bgGradient.png)`, height: "100vh" ,alt:"bg"}}
    >
      <div className="md:mt-[26%] mt-[96%] boxWidth">
        <h1 className="heading3  mb-6 md:w-[35%]  text-primary tracking-[-4%]">
          We at VellBe Life await your arrival.{" "}
          <span className="text-secondary ">Join us. </span>
        </h1>
        <a href="https://wa.me/message/5YDDLL4SIQZYO1">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
          >
            BOOK NOW
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTA;