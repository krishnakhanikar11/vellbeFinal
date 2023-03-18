import React from 'react'
import Navbar from 'components/Navbar.jsx';
import Footer from 'components/Footer.jsx';
import Image from 'next/image.js';
import Steps from 'components/Steps.jsx';

const Aboutus = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>
      <div
        className="flexCenter bg-cover bg-center bg-no-repeat bg-[url('/combine.png')]"
        style={{  height: "100vh" }}
      >
        <div className="boxWidth">
          <div className="paddingY paddingX ">
            <h1 className="  heading2 text-white tracking-[-4%]">
              About us
            </h1>
            <p className="md:w-2/4 font-poppins font-normal text-[#D2D2D2] text-[14px] md:text-[18px] leading-[30.8px] mt-2 mb-16">
            Empowering you to live your best life
            </p>
          </div>
        </div>
      </div>

      <div className="paddingX flexStart paddingY">
        <div className=" w-full h-[1.69px] bg-[#C5E4B4] boxWidth"></div>
      </div>

      <div className="paddingX flexStart">
        <div className="boxWidth flex md:flex-row flex-col-reverse ">
          <div className="flex-col md:w-1/2">
            <p className="text-justify mb-8 paragraph3">
            Welcome to Vellbelife, a homegrown venture dedicated to improving three critical aspects of human well-being: emotional, physical, and relationship wellness.
            </p>
            <p className="text-justify paragraph3 mb-8">
            At Vellbelife, we understand that these three areas are intertwined and essential for living a happy, healthy life. That's why we've created a platform that offers resources and tools to help you cultivate balance in each area.
            </p>
            <Image
              src="/quote.png"
              alt="quote"
              width={100}
              height={60}
              className="w-[30px] h-[30px]"
            />
            <p className="quoteFont">Our team of experts, they are second to none,<br />
In well-being's aspects, they get things done,<br />
Their passion for change is ever so strong,<br />
For a radical shift, they strive all day long,<br />
Emotional, physical and relational, their aim,<br />
To help you live life with wellness as your claim</p>
          </div>
          <div className="flex md:w-1/2 md:px-16 px-0 md:mb-0 mb-8">
            <h1 className="heading3">Together we are <span className="text-secondary">Strong</span></h1>
          </div>
        </div>
      </div>

      <div className="bg-dimGreen paddingX flexStart">
        <Steps />
      </div>

      <div className="bg-dimGreen paddingX paddingY flexStart">
        <div className="md:flex items-center justify-between  rounded-3xl p-10  bg-white w-full">
          <div className="flex-1 heading3 mb-10 md:mb-0">
            <h3>
              We at VellBe<span className='font-normal'>Life</span>  await your arrival.{" "}
              <span className="text-secondary">Join us</span>
            </h3>
          </div>
          <div className="flex">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKK5XB5pIs3hFlVjz9_GXgqxFR2ZiYVbHkmskcJvzSTTzjHw/viewform">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
              >
                GET IN TOUCH
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="paddingX flexCenter">
        <div className="boxWidth">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Aboutus