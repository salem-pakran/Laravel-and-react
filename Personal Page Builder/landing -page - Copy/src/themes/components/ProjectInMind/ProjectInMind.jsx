import React from "react";
import { Link } from "react-router-dom";
import ba from "../../images/background-call-to-action.jpg";

const ProjectInMind = () => {
  return (
    <div className="relative py-24 bg-blue-600 overflow-hidden">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className=" relative z-10 flex flex-col items-center">
            <h2 className="text-center font-display font-bold text-5xl text-white mb-4 w-10/12">
              Have Any Project in Mind? Don't Be Hesitate to Contact Us
            </h2>
            <p className="font-secondary text-gray-200 text-base mb-8">
              Ready to make something? Let's get on a call
            </p>
            <Link
              to=""
              className="font-display font-bold py-3 px-6 bg-white text-blue-600 font-primary text-base rounded"
            >
              Get in touch
            </Link>
          </div>
          <div className="absolute top-0 left-0 -z-1 w-full">
            <img className="w-full" src={ba} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInMind;
