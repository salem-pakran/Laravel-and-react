import { CheckIcon } from "@heroicons/react/24/outline";

const Features = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 mt-28">
      <div className=" text-center flex flex-col">
        <h3 className=" font-primary text-2xl text-white font-bold mb-4">
          <span className=" font-extrabold text-blue-columbia">Layers</span>{" "}
          will help thousands of people who want <br />
          it Create a personal website
        </h3>
        <p className="font-secondary text-gray-very_light text-md">
          Layers is a site built for everybody. It's fast, powerful, easy to
          use. <br />
          No Code experience necessary.
        </p>
      </div>

      <div className="flex items-center justify-center gap-6 mt-14">
        <div className="bg-gray-dark p-8 rounded-md w-full">
          <div className="flex items-start">
            <div className="mr-4">
              <CheckIcon className="w-6 h-6 text-blue-columbia" />
            </div>
            <div>
              <h4 className="font-primary text-base text-white font-bold mb-2">
                Made for everybody
              </h4>
              <p className="font-secondary text-gray-very_light text-sm">
                Layers uses terminology, concepts, <br />
                and layouts that are familiar to designers{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-dark p-8 rounded-md w-full">
          <div className="flex items-start">
            <div className="mr-4">
              <CheckIcon className="w-6 h-6 text-blue-columbia" />
            </div>
            <div>
              <h4 className="font-primary text-base text-white font-bold mb-2">
                No coding required
              </h4>
              <p className="font-secondary text-gray-very_light text-sm">
                you don't need to know how to write code.
                <br />
                or even have any programming experience
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-dark p-8 rounded-md w-full">
          <div className="flex items-start">
            <div className="mr-4">
              <CheckIcon className="w-6 h-6 text-blue-columbia" />
            </div>
            <div>
              <h4 className="font-primary text-base text-white font-bold mb-2">
                Built-in Templates
              </h4>
              <p className="font-secondary text-gray-very_light text-sm">
                There are built-in design templates that <br />
                are updated often.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
