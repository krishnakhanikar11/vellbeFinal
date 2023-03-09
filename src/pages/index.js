import React from "react";
import Hero from "components/Hero";
import About from "components/About";
import Services from "components/Services";
import Steps from "components/Steps";
import CTA from "components/CTA";
import Example from "components/Navbar";
import Footer from "components/Footer";
import BackCta from "components/BackCta";
import CustomerCare from "components/CustomerCare";




const index = () => {
  return (
    <div className="w-full overflow-hidden ">
      
      <div className="bg-dimGreen flexStart ">
        <div className="boxWidth">
        <Example />
          <Hero />
        </div>
      </div>

      <div className="paddingX  flexStart">
        <div className="boxWidth">
          <About />
          <Services />
          <Steps />
        </div>
      </div>

      <BackCta />
      <div className="paddingX  flexStart">
        <div className="boxWidth">
          <CustomerCare />
        </div>
      </div>



      <CTA />
      <div className="paddingX  flexCenter">
        <div className="boxWidth">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default index;
