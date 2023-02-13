import React from 'react'
import Image from "next/image";
import Link from 'next/link'

const ServiceCard = ({ id, picture, title, content, slug }) => (
  <div>
    <Link href="/Service/[slug]" as={`/Service/${slug}`}>
    
      <div
        key={id}
        className=" md:h-[452px] h-[380px] md:rounded-[28px] rounded-[22px] border-[#CCCCCC]  border-[1px]    hover:shadow-lg hover:border-secondary"
      >
        <Image
          src={picture}
          alt={title}
          width={200}
          height={60}
          className="w-full md:h-[270px] h-[220px] md:rounded-[28px] rounded-[22px] p-1"
        />
        <div className="md:p-4 p-3">
          <h1 className="text-primary md:text-[24px] text-[22px] mb-2">
            {title}
          </h1>
          <p className="paragraph3">{content}</p>
        </div>
      </div>
    </Link>
    
  </div>
);

export default ServiceCard;