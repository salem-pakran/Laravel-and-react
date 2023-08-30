import React, { useEffect ,useState } from "react";
import CustomerOpinion from "../customerOpinion/CustomerOpinion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper";
import Project from "./Project";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/outline";
import ProjectNewAdd from "./ProjectNewAdd";

import axios from "axios";
import swal from "sweetalert";

const OurProjects = () => {
  
  const [project, setProject] = useState({
    ourProjects:[],
  });

  useEffect(() => {

    axios.get('api/linkes_Content/fatchLinkes_Content' ).then( res  => {
      
      setProject({...project , ourProjects: res.data.Portfolio});
      console.log(res.data.Portfolio);

    });
    //dispatch(fetchProjects());
  }, []);

  const projects = project.ourProjects.map((pro) => (
    <SwiperSlide>
      <Project
        key={pro.id}
        img={pro.image}
        title={pro.title}
        desc={pro.desc}
        id={pro.id}
      />
    </SwiperSlide>
  ));

  return (
    <div className="bg-zinc-900 pt-1 pb-12 px-12 mt-12">
      <div className="flex items-center justify-between mt-12">
        <h2 className="font-display font-medium text-4xl tracking-tight text-zinc-600 dark:text-zinc-100 sm:text-7xl">
          Take a look at protfolio projects
        </h2>

        <div className="flex">
          <div
            id="prev-customer-opinion"
            className="mr-2 cursor-pointer flex items-center justify-center bg-zinc-800 py-2 px-4 rounded-md"
          >
            <ArrowLongLeftIcon className=" w-6 h-6 stroke-2 text-zinc-300" />
          </div>

          <div
            id="next-customer-opinion"
            className="ml-2 cursor-pointer flex items-center justify-center bg-zinc-800 py-2 px-4 rounded-md"
          >
            <ArrowLongRightIcon className=" w-6 h-6 stroke-2 text-zinc-300" />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: "#next-customer-opinion",
            prevEl: "#prev-customer-opinion",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {projects}
        </Swiper>
      </div>
    </div>
  );
};

export default OurProjects;
