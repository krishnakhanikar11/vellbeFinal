
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="flex md:flex-row flex-col paddingY">
      <div className="flex-1 flex flexCenter md:my-0 my-10 ">
        <div>
          <h1 className="heading3  text-primary tracking-[-4%]">
            Welcome to our holistic{" "}
            <span className="text-secondary ">Wellness Hub. </span>
          </h1>
          <p className="paragraph3 mt-2 mb-12">
            We've got everything you need to know about taking care of your
            total wellness
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex  items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <span className="text-primary font-medium text-lg  pl-4 pr-2">
                Emotional Well-Being
              </span>
            </div>

            <div className="flex  items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <span className="text-primary font-medium text-lg  pl-4 pr-2">
                Relationship Well-Being
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:mt-4">
            <div className="flex  items-center mb-6">
              <Image src="/tick.png" alt="tick" width={26} height={26} />
              <span className="text-primary font-medium text-lg  pl-4 pr-2">
                Physical Well-Being
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flexCenter md:my-0 my-10 ">
        <Image src="/about.png" alt="vellbe" width={450} height={450} className="md:w-[67%]" priority />
      </div>
    </section>
  );
};

export default About;