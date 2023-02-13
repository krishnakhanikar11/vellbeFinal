import React from 'react'
import ServiceCard from "./ServiceCard";
import { services } from "../constants/index.js";





const Services = () => {
  return (
    <section
      id="service"
      className="flex md:flex-row flex-col paddingY"
    >
      <div>
        <div>
          <h1 className="heading3  text-primary tracking-[-4%]">
          Services we offer at{" "}
            <span className="text-secondary ">VellBeLife. </span>
          </h1>
          <p className="paragraph3 mt-2 mb-12 md:w-[60%]">
          Our services start from INR 999
          </p>
        </div>

        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-5 gap-y-6 ">
            {services.map((service, index) => (
              <ServiceCard
                index={index}
                id={service.id}
                slug={service.slug}
                key={service.id}
                picture={service.picture}
                title={service.title}
                content={service.content}
              />
            ))}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;