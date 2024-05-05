import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-start pt-[5%] lg:gap-[5%] md:gap-[3%] gap-[8%] ">
      <div className="hidden md:block lg:block">
        <NavLink to="/">
          <img className="w-[112px] h-[24px]" src="/Header/Logo.svg" alt="" />
        </NavLink>
        <p className="font-semibold text-[14px] leading-[22px]  w-[258px] pt-3 pb-9">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <span className="font-semibold text-[14px] leading-[22px]  w-[258px]  pb-6 text-[#D9D9DC]">
          CoffeeStyle Inc. © 1996
        </span>
      </div>
      <div>
        <h5 className=" font-bold text-2xl  md:text-xl  lg:text-md leading-[18px] tracking-[2px] uppercase  pb-4">
          Menu
        </h5>
        <div className="flex flex-col gap-3 ">
          <NavLink
            className="font-semibold text-xl md:text-sm lg:text-sm leading-[18px] tracking-[2px]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-semibold   md:text-sm lg:text-sm  text-xl leading-[18px] tracking-[2px]"
            to="/ourproducts"
          >
            Our Products
          </NavLink>
          <a
            className="font-semibold  text-xl md:text-sm lg:text-sm    md:text-md lg:text-md leading-[18px] tracking-[2px]"
            to="/blog"
          >
            Blog
          </a>
          <NavLink
            className="font-semibold  md:text-sm lg:text-sm  text-xl leading-[18px] tracking-[2px]"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="font-semibold  md:text-sm lg:text-sm  text-xl  leading-[18px] tracking-[2px]"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="font-semibold  md:text-sm lg:text-sm  text-xl  leading-[18px] tracking-[2px]"
            to="/styleguide"
          >
            Style Guide
          </NavLink>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-2xl  md:text-xl  lg:text-md leading-[18px]  tracking-[2px] uppercase  pb-4">
          Follow us
        </h5>
        <div className="flex flex-col gap-3 text-[black]">
          <NavLink
            to="https://www.facebook.com/"
            className="font-semibold text-xl  md:text-sm lg:text-sm leading-[18px] tracking-[2px] "
          >
            Facebook
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            className="font-semibold   text-xl  md:text-sm lg:text-sm leading-[18px] tracking-[2px]"
          >
            Instagram
          </NavLink>
          <NavLink
            to="https://twitter.com/"
            className="font-semibold   text-xl  md:text-sm lg:text-sm eading-[18px] tracking-[2px]"
          >
            Twitter
          </NavLink>
          <NavLink
            to="https://www.pinterest.com/"
            className="font-semibold   text-xl  md:text-sm lg:text-sm leading-[18px] tracking-[2px]"
          >
            Pinterest
          </NavLink>
        </div>
      </div>
      <div className="hidden md:block lg:block">
        <h5 className="font-bold text-2xl  md:text-xl  lg:text-md leading-[18px] tracking-[2px] uppercase  pb-4">
          Contact us
        </h5>
        <p className="font-semibold text-[14px] leading-[22px]  pb-4">
          We’re Always Happy to Help
        </p>
        <p className="font-semibold text-[23px] leading-[36px] pb-6">
          us@coffeestyle.io
        </p>
        <span className="font-semibold text-[14px] leading-[22px]  w-[258px] pt-3 pb-6 text-[#D9D9DC]">
          Powered by Webflow
        </span>
      </div>
    </div>
  );
};

export default Footer;
