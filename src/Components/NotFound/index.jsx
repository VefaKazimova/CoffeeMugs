import React from "react";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="container mx-auto flex  justify-center items-center mt-10  md:text-start lg:text-start text-center p-3 ">
      <div className="flex flex-col justify-center items-center p-[3rem] lg:p-24 md:p-24 border-2 border-red-700 rounded-[50%]  ">
        <div>
          <MdOutlineNotListedLocation className="text-[100px] text-red-700" />
        </div>
        <p className="text-3xl text-bold mb-3">Səbətinizdə məhsul yoxdur</p>
        <span className="text-xl text-semibold">
          İstədiyiniz məhsulu səbətinizə əlavə edin
        </span>
        <NavLink to="/">
          <button className="px-4 py-2 border-black border-2 rounded-md mt-4">
            Esas sehife
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
