import React from "react";

const CoffeeMagazine = () => {
  return (
    <div className=" flex flex-col justify-center items-center pb-4">
      <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase pt-[6%] pb-[6%]">
        Buy 2 mugs and get a coffee magazine free
      </h5>

      <div className="flex">
        <div className="grid grid-cols-2 gap-4">
          <div className="...">
            <img src="../assets/IMAGE (2).svg" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="...">
              <img src="../assets/IMAGE (3).svg" />
            </div>
            <div className="...">
              <img src="../assets/IMAGE (4).svg" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase  pb-4">
            Premium Offer
          </h5>
          <h1 className="font-normal text-[36px] leading-[50px] w-[237px]">
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
