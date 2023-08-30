import React from "react";
import HeaderImgEdit from "./HeaderImgEdit";

const HeaderImg = ({ data }) => {
  const dataImg = data.map((img) => (
    <div className="header-avatar w-1/3">
      <div
        key={img.id}
        className="h-16 w-16 bg-slate-400 rounded-full overflow-hidden"
      >
        <img src={img.image} />
      </div>
      <div className="header-avatar-edit">
        <HeaderImgEdit id={img.id} img={img.image} />
      </div>
    </div>
  ));
  return <>{dataImg}</>;
};

export default HeaderImg;
