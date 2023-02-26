import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Link from 'next/link'
import {client} from '../../lib/client'
import { urlFor } from '../../lib/client'

const Expert = ({ experts }) => {
  return (
    <div className="w-full overflow-hidden ">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className="paddingX paddingY bg-dimGreen h-[70vh] flex">
        <div className="flexCenter">
          <div>
            <h1 className="  heading2 text-primary tracking-[-4%]">
              Meet our Experts
            </h1>
            <p className="font-poppins font-normal text-greenPara text-[14px] md:text-[18px] leading-[30.8px] mt-2 mb-16">
              Find answers to the most frequently asked questions
            </p>
          </div>
        </div>
      </div>

      {/* experts card section */}
      <div className="paddingX paddingY grid md:grid-cols-3 grid-cols-1 gap-4 md:ml-24 md:mr-24">
        {experts.map((expert, id) => (
          <Link key={id} href={`/Expert/[slug]`} as={`/Expert/${expert.slug}`}>
            <div className=" md:h-[452px]   h-auto md:rounded-[28px] rounded-[22px] border-[#CCCCCC]  border-[1px]    hover:shadow-lg hover:border-secondary">
              <img
                src={urlFor(expert.profileImage)}
                alt={expert.name}
                width={200}
                height={60}
                className="w-full md:h-[220px] object-cover h-[220px] md:rounded-[28px] rounded-[22px] p-1"
              />
              <div className="md:p-4 p-4 mb-2 ">
                <h1 className="text-primary md:text-[26px] text-[24px] mb-4 mt-2 w-[90%]">
                  {expert.name}
                </h1>
                <p className="paragraph3">
                  <span>{expert.experience}+</span> years of experience
                </p>
                <p className="mt-4 font-poppins font-normal text-gray-500 text-[16px] md:text-[18px] leading-[26.8px] ">
                  Starts @
                  <span className="font-poppins font-semibold text-greenPara text-[16px] md:text-[18px] leading-[26.8px] ml-2">
                    {expert.rate}
                  </span>
                </p>
                <p className="mt-5 font-poppins font-normal text-gray-500 text-[16px] md:text-[18px] leading-[26.8px]">
                  Expert in
                  <span className="bg-dimGreen ml-2 pl-4 pr-4 pt-2 pb-2 text-greenPara text-[14px] md:text-[16px]  rounded-full">
                    {expert.expertize}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className=" paddingX paddingY flexStart">
        <div className="md:flex items-center justify-between  rounded-3xl p-10  bg-dimGreen w-full">
          <div className="flex-1 heading3 mb-10 md:mb-0">
            <h3>
              We at VellBe Life await your arrival.{" "}
              <span className="text-secondary">Join us</span>
            </h3>
          </div>
          <div className="flex">
            <a href="https://wa.me/message/5YDDLL4SIQZYO1">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
              >
                LEARN MORE
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
  );
};

export async function getStaticProps() {
  const query = `*[_type=="expert"] | order(position asc) {
      _id,
      name,
      expertize,
      'slug':slug.current,
      about,
      rate,
      profileImage,
      experience,
      position,
  }`;

  const experts = await client.fetch(query);
  /* fetch request that uses client we created and imported. The query variable we just added, and assigns the return to a new variable named blogs */
  return {
    props: { experts },
  };
}

export default Expert;