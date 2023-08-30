import React from "react";
import { CubeIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const NavbarDash = () => {
  return (
    <div className="flex items-center justify-between py-16">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <CubeIcon className="w-8 h-8 text-blue-columbia text-xl" />
          <span className="font-primary text-blue-columbia font-extrabold text-2xl ml-2">
            Layer
          </span>
        </div>

        <ul className=" ml-28 list-none text-md flex items-center font-primary font-bold">
          <NavLink to="/user-dashboard/:id" className="active pr-6" end>
            Dashboard
          </NavLink>
          <NavLink
            to="user-dashboard/:id/templates"
            className="text-gray-light px-6"
          >
            Template
          </NavLink>
          <NavLink
            to="ser-dashboard/:id/saved"
            className="text-gray-light pl-6"
          >
            Saved
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDash;
