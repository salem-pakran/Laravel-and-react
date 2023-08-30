import React from "react";
import HeaderContentEdit from "./HeaderContentEdit";

const HeaderContent = ({ data }) => {
  const HeaderData = data.map((content) => (
    <div key={content.id} className="content-header">
      <div>
        <h1 className=" font-display text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {content.title}
        </h1>
        <p className="font-sans mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {content.para}
        </p>
      </div>
      <div className="content-header-edit">
        <HeaderContentEdit
          id={content.id}
          title={content.title}
          para={content.para}
        />
      </div>
    </div>
  ));

  return <>{HeaderData}</>;
};

export default HeaderContent;
