import React from "react";
import {
  StarIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

const CustomerOpinion = ({
  opinion,
  customerName,
  customerDesc,
  prevOpinionSlide,
  nextOpinionSlide,
  image,
}) => {
  return (
    <div className="flex justify-center items-center px-4">
      <div
        id={prevOpinionSlide}
        className="cursor-pointer flex items-center justify-center bg-zinc-200 py-2 px-4 rounded-md"
      >
        <ArrowLongLeftIcon className="w-6 h-6 stroke-2 text-zinc-700" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full overflow-hidden">
          <img src={image} />
        </div>
        <div className="flex flex-col items-center mt-10 text-center w-3/5 mx-auto">
          <h2 className="font-display font-semibold text-2xl leading-snug text-gray-primary sm:text-3xl">
            {opinion}
          </h2>
          <div className="text-center mt-10 mb-6">
            <h6 className="font-primary text-gray-800 font-semibold">
              {customerName}
            </h6>
            <p className=" font-secondary text-gray-500">{customerDesc}</p>
          </div>
          <div className="flex gap-1 justify-center mb-24">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500" />
          </div>
        </div>
      </div>
      <div
        id={nextOpinionSlide}
        className="cursor-pointer flex items-center justify-center bg-zinc-200 py-2 px-4 rounded-md"
      >
        <ArrowLongRightIcon className="w-6 h-6 stroke-2 text-zinc-700" />
      </div>
    </div>
  );
};

export default CustomerOpinion;
