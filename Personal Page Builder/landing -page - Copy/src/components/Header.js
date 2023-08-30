import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-col w-2/5 mr-4">
          <h2 className=" font-primary text-3xl text-white font-bold mb-4">
            Create your website with{" "}
            <span className=" font-extrabold text-blue-columbia">Layers.</span>{" "}
            no coding required
          </h2>
          <p className="font-secondary text-gray-very_light text-xl mb-8">
            No need for any programming <br />
            and design experience
          </p>
          <button
            type="button"
            className="w-28 h-11 bg-blue-columbia font-primary font-semibold text-sm text-gray-dark rounded-sm hover:bg-blond-primary transition-all"
          >
            Get Started
          </button>
        </div>

        <div className="bg-gray-medium w-3/5 h-96 rounded-md ml-4">
          <img />
        </div>
      </div>
    </div>
  );
};

export default Header;
