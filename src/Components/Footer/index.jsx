import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-start pt-[5%] gap-[5rem]">
      <div>
        <NavLink to="/">
          <img className="w-[112px] h-[24px]" src="/Header/Logo.svg" alt="" />
        </NavLink>
        <p className="font-normal text-[14px] leading-[22px]  w-[258px] pt-3 pb-9">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <span className="font-normal text-[14px] leading-[22px]  w-[258px]  pb-6 text-[#D9D9DC]">
          CoffeeStyle Inc. © 1996
        </span>
      </div>
      <div>
        <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase  pb-4">
          Menu
        </h5>
        <div className="flex flex-col gap-3 ">
          <NavLink
            className="font-medium text-[12px] leading-[18px] tracking-[2px]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
            to="/ourproducts"
          >
            Our Products
          </NavLink>
          <a
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
            to="/blog"
          >
            Blog
          </a>
          <NavLink
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
            to="/styleguide"
          >
            Style Guide
          </NavLink>
        </div>
      </div>
      <div>
        <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase  pb-4">
          Follow us
        </h5>
        <div className="flex flex-col gap-3 text-[black]">
          <NavLink
            to="https://www.facebook.com/"
            className="font-medium text-[12px] leading-[18px] tracking-[2px] "
          >
            Facebook
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
          >
            Instagram
          </NavLink>
          <NavLink
            to="https://twitter.com/"
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
          >
            Twitter
          </NavLink>
          <NavLink
            to="https://www.pinterest.com/"
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
          >
            Pinterest
          </NavLink>
        </div>
      </div>
      <div>
        <h5 className="font-normal text-[12px] leading-[18px] tracking-[2px] uppercase  pb-4">
          Contact us
        </h5>
        <p className="font-normal text-[14px] leading-[22px]  pb-4">
          We’re Always Happy to Help
        </p>
        <p className="font-normal text-[23px] leading-[36px] pb-6">
          us@coffeestyle.io
        </p>
        <span className="font-normal text-[14px] leading-[22px]  w-[258px] pt-3 pb-6 text-[#D9D9DC]">
          Powered by Webflow
        </span>
      </div>
    </div>
  );
};

export default Footer;
