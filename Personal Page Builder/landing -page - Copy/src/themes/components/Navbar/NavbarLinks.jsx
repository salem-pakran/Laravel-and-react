import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarLinkEdit from "./NavbarLinkEdit";
import NavbarLinkAdd from "./NavbarLinkAdd";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const NavbarLinks = ({ data }) => {
  const navbarLinks =
    data &&
    data.map((link, index) => {
      if (link.type == "link")
        return (
          <li
            key={link.id}
            className={`link relative block py-2 px-3 transition`}
          >
            <div className="">
              <span className="">{link.link}</span>
            </div>
            <div className="link-edit">
              <NavbarLinkEdit key={link.id} link={link.link} id={link.id} />
            </div>
          </li>
        );
    });

  return (
    <>
      <ul className="list-links h-10 relative font-display flex items-center rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navbarLinks}
        <NavbarLinkAdd />
      </ul>
      <Link
        to=""
        className="font-sans flex items-center text-zinc-600 text-sm font-medium hover:text-zinc-400 transition-all"
      >
        <span> Book A Call</span>
        <ArrowLongRightIcon className=" w-6 h-6 ml-2" />
      </Link>
    </>
  );
};

export default NavbarLinks;
