import { CubeIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-dark py-12 pt-24">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CubeIcon className="w-8 h-8 text-blue-columbia text-xl" />
            <span className="font-primary text-blue-columbia font-extrabold text-2xl ml-2">
              Layer
            </span>

            <ul className=" ml-28 list-none text-md flex items-center font-primary font-bold">
              <li className="text-gray-light pr-6">Home</li>
              <li className="text-gray-light px-6">Templates</li>
              <li className="text-gray-light pl-6">Contact</li>
            </ul>
          </div>

          <div>
            <button
              type="button"
              className=" w-36 h-11 bg-blue-columbia font-primary font-semibold text-sm text-gray-dark rounded-sm ml-2 hover:bg-blond-primary transition-all"
            >
              <Link to="/signup">
              Create your site
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
