
import React from "react";
import ExpEdit from "./ExpEdit";

const Exp = ({ data }) => {
  const companies = data.map((item) => (
    <div className="exp">
      <div className="py-8 px-4 flex items-center rounded-sm justify-between border-b-2 hover:bg-zinc-100">
        <div className=" w-1/3">
          <h4 className="font-display font-semibold text-2xl text-zinc-800">
            {item.title}
          </h4>
          <p className="font-sans text-base text-zinc-600">{item.paragrah}</p>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="font-sans font-semibold text-sm text-zinc-800">
            Position
          </h6>
          <p className="font-sans text-sm text-zinc-600">{item.position}</p>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="font-sans font-semibold text-sm text-zinc-800">
            Work
          </h6>
          <p className="font-sans text-sm text-zinc-600">{item.work}</p>
        </div>
        {/* <div className=" h-12 w-12 bg-zinc-400 rounded-full"></div> */}
      </div>
      <div className="exp-model-edit">
        <ExpEdit
          key={item.id}
          id={item.id}
          title={item.title}
          paragrah={item.paragrah}
          position={item.position}
          work={item.work}
          date={item.date}
        />
      </div>
    </div>
  ));
  return <>{companies}</>;
};

export default Exp;
