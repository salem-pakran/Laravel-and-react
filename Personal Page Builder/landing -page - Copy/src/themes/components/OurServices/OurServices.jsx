import React, { useEffect , useState} from "react";
import Service from "./Service";

import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../../../store/servicesSlice";
import ServiceAdd from "./ServiceAdd";
import axios from "axios";
import swal from "sweetalert";

const OurServices = () => {

  const [service, setService] = useState({
    services:[],
  });
 
  useEffect(() => {
    axios.get('api/linkes_Content/fatchLinkes_Content' ).then( res  => {
      
      setService({...service , services: res.data.Services});
      console.log(res.data.Services);

    });
    //dispatch(fetchServices());
  }, []);

  return (
    <div className="service-add bg-gray-50 py-20 justify-center">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center">
          <h2 className=" font-display mt-3 text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Services I Offer
          </h2>
          <p className="font-sans text-lg text-gray-400 dark:text-zinc-400">
            We help ambitious business like your generate more profit by
            building projects
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          <Service data={service.services} />
        </div>
        <div>
          <ServiceAdd />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
