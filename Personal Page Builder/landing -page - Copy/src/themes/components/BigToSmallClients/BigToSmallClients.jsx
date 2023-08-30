import React from "react";

const BigToSmallClients = () => {
  return (
    <div className=" hidden py-24">
      <div className="grid grid-cols-2 gap-6">
        <div></div>
        <div>
          <h4 className="font-primary font-bold text-gray-primary leading-snug text-4xl">
            From Big to Small Clients, Two Things I Always Promise
          </h4>
          <div className="grid grid-cols-2 mt-12 gap-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center h-8 w-16 bg-orange-500 rounded">
                <span className=" font-primary text-white font-bold">1</span>
              </div>
              <div className="flex flex-col ml-3">
                <h5 className=" font-primary font-bold text-lg text-gray-primary">
                  Design You Will Love
                </h5>
                <p className=" font-secondary text-gray-500 text-sm mt-2">
                  Donec metuse, vulputate at sapiens sit amet, auctor iaculis
                  lorem. in the hendrerit
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center h-8 w-16 bg-orange-500 rounded">
                <span className=" font-primary text-white font-bold">2</span>
              </div>
              <div className="flex flex-col ml-3">
                <h5 className=" font-primary font-bold text-lg text-gray-primary">
                  Friendly Relationship
                </h5>
                <p className=" font-secondary text-gray-500 text-sm mt-2">
                  Donec metuse, vulputate at sapiens sit amet, auctor iaculis
                  lorem. in the hendrerit
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-3 gap-6 mt-12">
            <div className="flex items-center">
              <h2 className=" font-primary font-bold text-5xl text-gray-primary">
                8
              </h2>
              <p className="ml-2 font-primary text-gray-500 text-base leading-6 w-2/4">
                Years Experience
              </p>
            </div>
            <div className="flex items-center">
              <h2 className=" font-primary font-bold text-5xl text-gray-primary">
                69
              </h2>
              <p className="ml-2 font-primary text-gray-500 text-base leading-6 w-2/4">
                Satisfied Clients
              </p>
            </div>
            <div className="flex items-center">
              <h2 className=" font-primary font-bold text-5xl text-gray-primary">
                207
              </h2>
              <p className="ml-2 font-primary text-gray-500 text-base leading-6 w-2/4">
                Project Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigToSmallClients;
