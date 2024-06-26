import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-[4%] pb-[8%]">
      <h1 className="font-normal text-[22px] pb-4 text-center w-[350px]   leading-[40px] lg:text-[28px] md:w-[578px] md:text-[25px]">
        Even the all-powerful Pointing has no control about the blind texts.
      </h1>
      <p className="font-normal  text-[16px] w-[360px] text-center  text-[#74767F] leading-[28px] lg:w-[578px] md:w-[578px]  ">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control about the
        blind texts it is an almost unorthographic life One day however a small
        line of blind text by the name of Lorem Ipsum decided to leave for the
        far World of Grammar.
      </p>
      <button className="relative bg-white pt-6 leading-[28px] text-[#AD7362] font-normal text-[15px] after:content-[''] after:absolute after:bottom-[-8px] after:transform after:-translate-x-1/2 after:-translate-y-1/2  after:left-1/2 after:w-[130px] after:h-[2px] after:bg-[#ECDFDB] ">
        Read the full Story
      </button>
    </div>
  );
};

export default About;
