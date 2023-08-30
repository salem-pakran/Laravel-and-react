import React from "react";
import { CubeIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="bg-gray-dark">
        <div className="container mx-auto max-w-screen-xl px-4 ">
              <div className="flex items-center justify-between py-4 ">
                <div className="flex items-center">
                  <CubeIcon className="w-8 h-8 text-blue-columbia text-xl" />
                  <span className="font-primary text-blue-columbia font-extrabold text-2xl ml-2">
                    Layer
                  </span>

                  <ul className=" ml-28 list-none text-md flex items-center font-primary font-bold">
                    <NavLink to="/" className="pr-6" end>
                      Home
                    </NavLink>
                    <NavLink to="/templates" className="text-gray-light px-6">
                      Templates
                    </NavLink>
                    <NavLink to="/contact" className="text-gray-light pl-6">
                      Contact
                    </NavLink>
                  </ul>
                </div>

                <div className="flex">
                  <Link
                    to="/login"
                    className="w-28 flex items-center justify-center h-11 bg-gray-medium font-primary font-semibold text-sm rounded-sm mr-2 hover:bg-blond-primary hover:text-gray-dark transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="w-28 h-11 flex items-center justify-center bg-blue-columbia font-primary font-semibold text-sm text-gray-dark rounded-sm ml-2 hover:bg-blond-primary transition-all"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
    </section>
    
  );
};

export default Navbar;
