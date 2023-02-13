import React from "react";

const BackCta = () => {
  return (
    <div
      className=" marginY bg-cover md:bg-center bg-[center_right_-14em] bg-no-repeat" 
      style={{ backgroundImage: `url("/bgCta.png")`, height: "100%",alt:"d" }}
    >
      <div className="paddingX paddingY ">
        <div className="flex paddingY">
          <div className="flexEnd">
            <div>
              <h1 className="heading3 text-white">We believe in a</h1>
              <h1 className="heading2 text-white mb-8">Healthier you</h1>

              <a href="https://wa.me/message/5YDDLL4SIQZYO1">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md font-medium pl-6 pr-6 pt-3 pb-3 text-secondary bg-white text-base"
                >
                  LEARN MORE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCta;
