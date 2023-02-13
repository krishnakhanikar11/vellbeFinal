import React from "react";
import Image from "next/image";

const CustomerCard = ({ id, title, content, picture }) => {
  return (
    <div
      key={id}
      className=" md:h-[452px] h-[300px] md:rounded-[28px] rounded-[26px] border-[#CCCCCC]  border-[1px]"
    >
      <div className="relative h-[50%]">
        <Image
          src={picture}
          alt={id}
          width={400}
          height={400}
          className="w-full h-full z-0 absolute"
        />
        <div className="md:p-8 p-6 z-100 ">
          <h1 className="text-primary md:text-[24px] text-[22px] mb-2">
            {title}
          </h1>
        </div>
      </div>

      <div className="md:p-8 p-6">
        <p className="paragraph3">{content}</p>
      </div>
    </div>
  );
};

export default CustomerCard;
