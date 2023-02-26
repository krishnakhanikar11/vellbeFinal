import { client } from 'lib/client';
import React from 'react'
import { urlFor } from 'lib/client';
import BlockContent from "@sanity/block-content-to-react";
import Navbar from "../../../components/Navbar"
import Footer from 'components/Footer';


const ExpertDetail = ({expert}) => {
  return (
    <div className="w-full overflow-hidden ">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>

      <div className=" bg-dimGreen h-[80vh] relative  w-full paddingX paddingY ">
        <div className="flex md:flex-row flex-col paddingY absolute top-[15%] md:top-[20%] ">
          <div >
            <img
              src={urlFor(expert.profileImage)}
              alt={expert.name}
              width={200}
              height={60}
              className=" md:h-[313px] md:w-[280px]  object-cover h-[220px] md:rounded-[28px] rounded-[22px] p-1"
            />
          </div>
          <div className="md:ml-10 ">
            <h1 className="text-primary md:text-[26px] text-[24px] mb-4 mt-2  text-left">
              {expert.name}
            </h1>
            <p className="paragraph3 text-left">
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
              <span className="bg-white ml-2 pl-4 pr-4 pt-2 pb-2 text-greenPara text-[14px] md:text-[16px]  rounded-full">
                {expert.expertize}
              </span>
            </p>
            <div className="flex mt-6">
            <a href="https://wa.me/message/5YDDLL4SIQZYO1">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-[#E4EEDF] bg-[#2D5616] text-base"
              >
                Book now
              </button>
            </a>
          </div>
          </div>
        </div>
      </div>

      <div className="paddingX flexStart ">
        <div className="boxWidth flex md:flex-row">
          <div className="flex-col md:w-1/2">
          <div className="wrapper text-justify">
            <div className='mt-6'><h2 >About {expert.name}</h2></div>
            
            <BlockContent
              className="text-justify"
              blocks={expert.about}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              projectId="7g5u83mr"
              dataset="production"
            />
          </div>
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
}


export async function getStaticPaths() {
    const query = `*[_type == "expert"]{'slug' : slug.current}`;
    const experts = await client.fetch(query);
  
    /* for each post we create url and assigning it as params for getStaticPaths to render at build time */
    const paths =
      experts?.map((expert) => ({
        params: {
          slug: expert.slug,
        },
      })) || [];
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const query = `*[_type == "expert" && slug.current == $slug]{
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
  
    const options = { slug: params.slug };
    const experts = await client.fetch(query, options);
  
    return {
      props: { expert: experts[0] },
    };
  }

export default ExpertDetail;