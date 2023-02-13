import Image from "next/image";

const StepCard = ({ id, heading, subHeading, picture }) => {
    return (
      <div >
        <div key={id} className="flexCenter">
          <Image src={picture} alt={id} width={400} height={400} className="w-[112px] h-[112px] mr-2" />
          <div className="md:p-4 p-1">
            <h1 className="text-primary md:text-[20px] text-[18px] mb-2">
              {heading}
            </h1>
            <p className="font-poppins font-normal text-greenPara text-[14px] md:text-[16px] leading-[26.8px]">{subHeading}</p>
          </div>
        </div>
      </div>
    );
  };

export default StepCard;