import React from "react";

const PopUpModel = ({ children, className }) => {
  return (
    <div
      className={`absolute bg-white rounded py-3 px-4 border border-zinc-400 z-50 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default PopUpModel;
