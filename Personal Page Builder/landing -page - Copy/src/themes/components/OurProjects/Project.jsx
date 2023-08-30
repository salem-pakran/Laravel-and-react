import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import ProjectEdit from "./ProjectEdit";
import ProjectNewAdd from "./ProjectNewAdd";
//import ba from "../../images/background-call-to-action.jpg";

const Project = ({ img, title, desc, id }) => {
  return (
    <div className="relative project block">
      <div className="flex flex-col text-left">
        <div className="w-full h-48 bg-stone-700 rounded-sm overflow-hidden">
          <img src={img} />
        </div>
        <div className="p-4 hover:bg-zinc-800 transition rounded-br-md rounded-bl-md">
          <h4 className=" font-display mt-3 text-4xl font-semibold tracking-tight text-white dark:text-zinc-100 sm:text-lg">
            {title}
          </h4>
          <p className="font-sans text-sm text-gray-400 dark:text-zinc-400">
            {desc}
          </p>
          <a
            href="#"
            className="flex items-center text-left mt-4 text-sm font-semibold text-zinc-300"
          >
            <span>Go back home</span>
            <ArrowLongRightIcon className="w-6 h-6 ml-2" />
          </a>
        </div>
        <ProjectNewAdd />
      </div>
      <div className="project-model-edit h-52">
        <ProjectEdit id={id} title={title} desc={desc} />
      </div>
    </div>
  );
};

export default Project;
