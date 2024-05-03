import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container mx-auto pt-[2%] px-[3%]  pb-[3%] flex items-center justify-around">
        <div>
          <NavLink to="/">
            <img className="w-[112px] h-[24px]" src="/Header/Logo.svg" alt="" />
          </NavLink>
        </div>
        <div className="flex gap-[40px] uppercase">
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
          <NavLink
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
            to="/blog"
          >
            Blog
          </NavLink>
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
          <NavLink
            to="/styleguide"
            className="font-medium  text-[12px] leading-[18px] tracking-[2px]"
          >
            <div className="flex items-center  justify-center gap-[8px]">
              <img className="w-[16px] h-[20px] " src="/Header/IMAGE.png" />
              <p>CART</p>
              <span className="w-[20px] h-[18px] flex items-center justify-center bg-black text-white rounded-[9px]">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
