import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { IoIosHome } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa6";
import { FaBlogger } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";

const MobileBar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <>
      <React.Fragment>
        <div onClick={toggleDrawer(true)}>
          <MenuIcon style={{ fontSize: "xx-large" }} />
        </div>
        <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 350,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <div className=" flex justify-center mb-5">
                <img src="/Header/Logo.svg" alt="" />
              </div>
              <div className="flex flex-col text-3xl gap-6 p-3 text-brand">
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-x-105  "
                  to="/"
                >
                  <IoIosHome className="text-brand text-4xl" /> Home
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/ourproducts"
                >
                  <FaProductHunt className="text-brand text-4xl" />
                  Products
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/blog"
                >
                  <FaBlogger className="text-brand text-4xl" />
                  Blog
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/about"
                >
                  <FcAbout className="text-brand text-4xl" />
                  About
                </NavLink>
                <NavLink
                  className="hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105 "
                  to="/contact"
                >
                  <IoMdContact className="text-brand text-4xl" />
                  Contact
                </NavLink>
                <NavLink
                  to="/styleguide"
                  className="font-medium  lg:text-[12px] md:text-[8px] leading-[18px] "
                >
                  <div className=" hover:text-secondry flex  gap-3 transform translate-x-0 duration-300 hover:scale-105">
                    <img
                      className="w-[16px] h-[20px] "
                      src="/Header/IMAGE.png"
                    />
                    <p>CART</p>
                    <span className="w-[20px] h-[18px] flex items-center justify-center bg-black text-white rounded-[9px]">
                      0
                    </span>
                  </div>
                </NavLink>
              </div>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MobileBar;
