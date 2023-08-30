//import ba from "../themes/images/background.jpg";
import React from "react";
import { Link, useParams } from "react-router-dom";

const UserDash = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col">
        <div className="h-80 bg-gray-700 rounded-md w-96">
          <img />
        </div>
        <div>
          <h4 className="font-primary text-lg text-white font-bold mb-1 mt-4">
            Photography theme
          </h4>
          <p className="font-secondary text-gray-very_light text-base mb-2">
            Layers uses terminology, concepts, <br />
            and layouts that are familiar to designers{" "}
          </p>
          <Link
            to={`/user-dashboard/${id}/theme`}
            className="font-secondary text-blond-primary text-sm font-medium"
          >
            Theme show
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
