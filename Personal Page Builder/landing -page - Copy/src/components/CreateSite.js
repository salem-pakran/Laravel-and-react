import { Link } from "react-router-dom";
//import ba from "../themes/images/background.jpg";

const CreateSite = () => {
  return (
    <div className=" bg-gray-dark py-16 mt-40">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col w-2/5 mr-4">
            <h2 className=" font-primary text-3xl text-white font-bold mb-4">
              Create a website that magnifies your project
            </h2>
            <p className="font-secondary text-gray-very_light text-md mb-8">
              Create a professional website in 5 minutes <br />
              and book your project a place on the Internet.
            </p>
            <button
              type="button"
              className="w-36 h-11 bg-blue-columbia font-primary font-semibold text-sm text-gray-dark rounded-sm hover:bg-blond-primary transition-all"
            >
              <Link to="/signup">
              Create your site
              </Link>
            </button>
          </div>

          <div className="bg-gray-medium w-3/5 h-96 rounded-md ml-4 -mb-48">
            <img />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSite;
