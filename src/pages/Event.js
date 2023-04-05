import React from 'react'
import {client} from '../../lib/client'
import { urlFor } from '../../lib/client'
import Footer from 'components/Footer'
import Navbar from '../../components/Navbar'
import Link from 'next/link'



const Event = ({ events }) => {
  return (
    <div className="w-full overflow-hidden ">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="paddingX paddingY bg-dimGreen h-[70vh] flex">
          <div className="flexCenter">
            <div>
              <h1 className="  heading2 text-primary tracking-[-4%]">
                Vellbe Events
              </h1>
              <p className="font-poppins font-normal text-greenPara text-[14px] md:text-[18px] leading-[30.8px] mt-2 mb-16">
                Come and find us at these events
              </p>
            </div>
          </div>
        </div>

        <div className="paddingX paddingY ">
          <div className="flex justify-between items-center mb-8">
            <div className="in-flex">
              <h1 className=" heading4 text-black tracking-[-4%]  ">
                Latest Events
              </h1>
            </div>

            {/* <p className="paragraph3">{`total blogs: ${blogs.total}`}</p> */}
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {events.items.map((event, id) => (
              <Link key={id} href={`/Event/[slug]`} as={`/Event/${event.slug}`}>
                <div className=" md:h-[452px] h-auto md:rounded-[28px] rounded-[22px] border-[#CCCCCC]  border-[1px]    hover:shadow-lg hover:border-secondary">
                  <img
                    src={urlFor(event.bgImage)}
                    alt={event.title}
                    width={200}
                    height={60}
                    className="w-full md:h-[220px] object-cover h-[220px] md:rounded-[28px] rounded-[22px] p-1"
                  />
                  <div className="md:p-4 p-3 ">
                    {/* <div className="bg-dimGreen p-2 w-[150px]  md:w-[180px] flexCenter rounded-full">
                      <h1 className="paragraph3">{event.category}</h1>
                    </div> */}
                    <h1 className="text-primary md:text-[26px] text-[24px] mb-4 mt-4 w-[90%]">
                      {event.title}
                    </h1>
                    <div className="flex gap-x-6">
                      <p className="paragraph3">{event.publishedAt}</p>
                      <p className="font-poppins font-normal text-[#81887E] text-[16px] md:text-[18px] leading-[26.8px] ;">
                        ∙ {event.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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

export async function getStaticProps() {
  const query = `{"items": *[_type=="event"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    'slug':slug.current,
    body,
    category,
    readTime,
    bgImage,
    
},"total": count(*[_type=="event"])}`;

  const events = await client.fetch(query);
  /* fetch request that uses client we created and imported. The query variable we just added, and assigns the return to a new variable named events */
  return {
    props: { events },
  };
}

/* we are making a GROQ query to tell what data to look for,how to order the data and what pieces of that data we want returned to us */
/* *[_type=="event"] is telling our client to grab every entry we have in our db that has a name of blog */

export default Event;