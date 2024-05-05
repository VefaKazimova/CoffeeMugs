import React from "react";

const SignPage = () => {
  return (
    <div className="pl-[2%] pr-[2%] pt-[6%]">
      <div className="bg-[#1D1F2E] text-white pt-[6%] pb-[6%]">
        <div className=" flex flex-col justify-center items-center">
          <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase   ">
            Sign up and get free coffee bags
          </h5>
          <h1 className="font-normal text-[36px] leading-[50px] pt-3 ">
            Coffee Updates
          </h1>
          <div className=" w-[90%]  flex flex-col mt-6 lg:flex md:flex  gap-y-5 text-center   ">
            <input
              style={{
                backgroundColor: "transparent",
                width: "100%",
                padding: "10px 10px",
                textTransform: "uppercase",
                border: "1px solid gray",
                borderRadius: "4px",
              }}
              placeholder="customer@coffeestyle.io"
            />
            <button className=" rounded-sm font-normal text-[12px] leading-[18px] tracking-[2px] uppercase bg-[white] text-[black] py-[13px] px-[25px]  ">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
