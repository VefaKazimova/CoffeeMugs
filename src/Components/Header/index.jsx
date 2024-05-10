import React from "react";
import { NavLink } from "react-router-dom";
import MobileBar from "../MobileBar";
import { useSelector } from "react-redux";
const Header = () => {
  const count = useSelector((state) => state.value);
  return (
    <>
      <div className="container bg-white mx-auto pt-[2%] px-[6%] md:px-[5%] lg:px-[6%]  pb-[2%] flex  justify-around ">
        <div className="flex justify-between  w-full ">
          <NavLink to="/">
            <img className="w-[112px] h-[24px]" src="/Header/Logo.svg" alt="" />
          </NavLink>
          <div className="block lg:hidden md:hidden">
            <MobileBar />
          </div>
        </div>
        <div className=" gap-8 uppercase hidden md:flex  lg:flex">
          <NavLink
            className="font-mediu lg:text-[12px]  md:text-[8px] leading-[18px] tracking-[2px]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-mediumk  lg:text-[12px] md:text-[8px] leading-[18px] tracking-[2px]"
            to="/ourproducts"
          >
            Products
          </NavLink>
          <NavLink
            className="font-mediumk lg:text-[12px] md:text-[8px] leading-[18px] tracking-[2px]"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="font-medium lg:text-[12px] md:text-[8px] leading-[18px] tracking-[2px]"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="font-mediumk lg:text-[12px] md:text-[8px] leading-[18px] tracking-[2px]"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="font-medium  lg:text-[12px] md:text-[8px] leading-[18px] tracking-[2px]"
            to="/styleguide"
          >
            StyleGuide
          </NavLink>
          <NavLink
            to="/basket"
            className="font-medium  lg:text-[12px] md:text-[8px] leading-[18px] tracking-[2px]"
          >
            <div className="flex items-center  justify-center gap-[8px]">
              <img className="w-[16px] h-[20px] " src="/Header/IMAGE.png" />
              <p>CART</p>
              <span className="w-[20px] h-[18px] flex items-center justify-center bg-black text-white rounded-[9px]">
                {count}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
