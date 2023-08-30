import React from "react";
import {
  AcademicCapIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import ServiceEdit from "./ServiceEdit";

const Service = ({ data }) => {
  const services = data.map((ser) => (
    <div className="service bg-transparent border border-zinc-300  p-6 rounded h-max hover:border-zinc-500 hover:bg-zinc-100 transition">
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-center">
          <AcademicCapIcon className="h-8 w-8 text-zinc-700 stroke-2" />
        </div>
        <h4 className="font-display text-base font-bold text-gray-primary mt-6">
          {ser.title}
        </h4>
        <p className="mt-1 font-sans text-xs text-zinc-500">{ser.desc}</p>
        <ArrowLongRightIcon className="mt-4 h-6 w-6 text-zinc-500 stroke-2" />
      </div>
      <div className="service-edit">
        <ServiceEdit
          key={ser.id}
          id={ser.id}
          title={ser.title}
          desc={ser.desc}
        />
      </div>
    </div>
  ));
  return <>{services}</>;
};

export default Service;
