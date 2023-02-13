import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { faqs } from "../../constants/index";
import Footer from "components/Footer";
import Navbar from "../../components/Navbar"

const FAQ = () => {
  return (
    <div className="w-full overflow-hidden ">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>
      <div >
        <div className="paddingX paddingY bg-dimGreen h-[70vh] flex">
          <div className="flexCenter">
            <div>
              <h1 className="  heading2 text-primary tracking-[-4%]">
                How can we help you?
              </h1>
              <p className="font-poppins font-normal text-greenPara text-[14px] md:text-[18px] leading-[30.8px] mt-2 mb-16">
                Find answers to the most frequently asked questions
              </p>
            </div>
          </div>
        </div>

        <div className="paddingX paddingY ">
          <h1 className=" heading4 text-black tracking-[-4%]">
            Frequently Asked Questions
          </h1>
          <div className="w-full pt-8 ">
            <div className=" rounded-2xl bg-white p-2">
              {faqs.map((faq, key) => (
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        key={key}
                        className="flex w-full justify-between rounded-lg bg-white px-4 py-8 text-left text-lg font-medium text-black hover:bg-dimGreen focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
                      >
                        <span key={key}>{faq.question}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel key={key} className="px-4 pt-4 pb-2 font-poppins font-normal text-justify text-greenPara text-[14px] md:text-[16px] leading-[26.8px]">
                        {faq.ans}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
        <div className=" paddingX  flexStart">
        <div className="md:flex items-center justify-between  rounded-3xl p-10  bg-[#FFFBDF] w-full">
          <div className="flex-1 heading3 mb-10 md:mb-0">
            <div>
              <h3 className="heading3"></h3>
            Still have questions?{" "}
              <p className="text-secondary paragraph3 mt-4 md:mt-0">Can’t find the answer you’re looking for? Please chat to our friendly team.</p></div>
            
            
          </div>
          <div className="flex">
            <a href="https://wa.me/message/5YDDLL4SIQZYO1">
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
    </div>
  );
};

export default FAQ;
