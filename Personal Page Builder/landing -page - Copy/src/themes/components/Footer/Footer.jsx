import React from "react";
import { CommandLineIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <>
      <div className="justify-center border-t-2 border-zinc-300">
        <div className="container mx-auto max-w-screen-lg px-4">
          <div className="flex items-center justify-between">
            <ul className="flex items-center font-display  text-sm font-semibold text-gray-600">
              <li className="px-4">Start</li>
              <li className="px-4">Services</li>
              <li className="px-4">Portfolio</li>
              <li className="px-4">News</li>
              <li className="px-4">Contact</li>
            </ul>
            <div className=" font-primary text-sm text-gray-600 flex justify-center py-6">
              <p>© 2023 salem-pakran. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
