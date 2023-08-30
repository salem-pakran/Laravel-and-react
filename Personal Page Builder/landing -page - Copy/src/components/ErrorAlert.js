import React from "react";

const ErrorAlert = ({ error }) => {
  return (
    <>
      {error && (
        <div className="mt-4 w-full bg-red-100 rounded-md h-10 flex items-center px-6">
          <p className="font-primary text-base text-red-800 font-semibold">
            {error}
          </p>
        </div>
      )}
    </>
  );
};

export default ErrorAlert;
