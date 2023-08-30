import React from "react";
import { NavLink } from "react-router-dom";
import { CubeIcon } from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const Header2 = () => {
  return (
    <div className="flex items-center justify-between h-32">
      <div className="flex items-center">
        <CubeIcon className="w-8 h-8 text-blue-columbia text-xl" />
        <span className="font-primary text-blue-columbia font-extrabold text-2xl ml-2">
          Layer
        </span>
      </div>

      <ul className="ml-28 list-none text-md flex items-center font-primary font-bold">
        <NavLink
          to="/"
          className=" text-gray-very_light flex items-center hover:text-white transition-all"
        >
          Go to Home <ArrowLongRightIcon className="w-8 h-8 ml-2" />
        </NavLink>
      </ul>
    </div>
  );
};

export default Header2;
