import React from "react";

const CoffeeMagazine = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center pb-4">
      <h5 className="font-normal text-[12px] leading-[18px] tracking-[1px] lg:tracking-[2px] uppercase pt-[6%] pb-[6%]">
        Buy 2 mugs and get a coffee magazine free
      </h5>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        <div className="flex  gap-5 flex-wrap items-center justify-center">
          <div>
            <img src="../assets/IMAGE (2).svg" />
          </div>
          <div className="flex  md:flex flex-col lg:flex-col gap-y-5 gap-x-2 flex-wrap">
            <div>
              <img src="../assets/IMAGE (3).svg" />
            </div>
            <div>
              <img src="../assets/IMAGE (4).svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:items-start lg:items-start items-center">
          <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase  pb-4">
            Premium Offer
          </h5>
          <h1 className="font-normal text-[23px]  leading-[45px] md:text-[36px] lg:text-[36px] w-[270px]">
            Get our Coffee Magazine
          </h1>
          <p className="font-normal text-[16px] leading-[28px]  w-[280px] pt-3 pb-6">
            The most versatile furniture system ever created. Designed to fit
            your life.
          </p>
          <button className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase bg-[#1D1F2E] text-[white] py-[10px] px-[25px] ">
            Start Shopping
          </button>
        </div>
      </div>
      <div className="pt-[7%]">
        <img src="../assets/IMAGE.svg" />
      </div>
    </div>
  );
};

export default CoffeeMagazine;
