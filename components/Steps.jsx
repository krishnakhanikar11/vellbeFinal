import React from 'react'
import { steps } from '../constants/index.js';
import StepCard from './StepCard';


const Steps = () => {
    return (
      <section
        id="service"
        className="flex md:flex-row flex-col paddingY"
      >
        <div>
          <div className='md:w-[35%]'>
            <h1 className="heading3  text-primary tracking-[-4%]">
              Vellbe life helps you in this journey in just{" "}
              <span className="text-secondary ">3 steps </span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-5 gap-y-6 mt-12 ">
            {steps.map((step,key) => (
                <StepCard
                id ={step.id}
                key={key}
                heading={step.heading}
                subHeading={step.subHeading}
                picture={step.picture}
                />
            ))}
            
          </div>
        </div>
      </section>
    );
  };

export default Steps;