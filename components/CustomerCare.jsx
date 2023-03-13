import React from 'react'
import CustomerCard from './CustomerCard'
import { cares } from "../constants/index.js";

const CustomerCare = () => {
  return (
    <section id="customer" className="flex md:flex-row flex-col sm:pt-16 pt-10">
      <div>
        <div className="md:w-[40%] mb-12">
          <h1 className="heading3  text-primary tracking-[-4%]">
            We offer our wellness{" "}
            <span className="text-secondary  ">Services through. </span>
          </h1>
        </div>

        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-5 gap-y-6 ">
            {cares.map((care, index) => (
              <CustomerCard
                id={index}
                key={care.id}
                picture={care.bgImg}
                title={care.title}
                content={care.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;