import React from "react";

const Main = () => {
  return (
    <div className="bg-imgMainSec w-full h-[430px] bg-[#050827] bg-no-repeat bg-center bg-contain relative ">
      <div className="flex text-white flex-col items-center justify-center   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <p className="font-normal  text-[12px] leading-[18px] tracking-[2px] uppercase">
          Best place to buy design
        </p>
        <h1 className="font-normal  text-[47px] leading-[60px]  pt-2 pb-3">
          Coffee Mugs
        </h1>
        <span className="font-normal   text-[17px] leading-[30px] lg:w-[790px] md:w-[600px]  w-[350px]  pb-7 text-center">
          The most versatile furniture system ever created. Designed to fit your
          life, made to move and grow.
        </span>
        <button className="bg-white py-[10px] px-[17px] text-black font-bold  text-[12px] leading-[18px] tracking-[2px] uppercase">
          Explore Our Products
        </button>
      </div>
    </div>
  );
};

export default Main;
