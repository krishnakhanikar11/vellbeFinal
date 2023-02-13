import React from 'react'
import { services } from '../../../constants/index.js';
import Navbar from 'components/Navbar.jsx';
import Footer from 'components/Footer.jsx';
import Image from 'next/image.js';
import Steps from 'components/Steps.jsx';


const ServiceDetails = ({post}) => {
  
  return (
    <div className="w-full overflow-hidden">
      <div className=" flexCenter">
        <div className="boxWidth">
          <Navbar />
        </div>
      </div>
      <div
        className="flexCenter bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${post.picturebg})`, height: "100vh" }}
      >
        <div className="boxWidth">
          <div className="paddingY paddingX ">
            <h1 className="  heading2 text-white tracking-[-4%]">
              {post.title}{" "}
            </h1>
            <p className="md:w-2/4 font-poppins font-normal text-[#D2D2D2] text-[14px] md:text-[18px] leading-[30.8px] mt-2 mb-16">
              {post.content}
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
              {post.mainContent}
            </p>
            <p className="text-justify paragraph3 mb-8">
            {post.mainContent2}
            </p>
            <Image
              src="/quote.png"
              alt="quote"
              width={100}
              height={60}
              className="w-[30px] h-[30px]"
            />
            <p className="quoteFont">{post.quote}</p>
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
  )
}

export async function getStaticProps({ params }) {
  const post = services.find((p) => p.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const paths = services.map((post) => ({
    params: {
      slug: post.slug.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}


export default ServiceDetails;