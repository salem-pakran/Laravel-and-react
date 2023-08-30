import React from "react";
import CustomerOpinion from "../customerOpinion/CustomerOpinion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

import avatar1 from "../../images/avatars/avatar-1.png";
import avatar2 from "../../images/avatars/avatar-2.png";

const dataCustomer = [
  {
    id: "11111",
    image: avatar1,
    opinion:
      "Great quality products, affordable prices, fast and friendly delivery. I very recommend",
    customerName: "Mireya Roman",
    customerDesc: "Customer",
    rating: "",
  },
  {
    id: "22222",
    image: avatar2,
    opinion:
      "2- Great quality products, affordable prices, fast and friendly delivery. I very recommend",
    customerName: "Mireya Roman",
    customerDesc: "Customer",
    rating: "",
  },
];

const SectionGoodNews = () => {
  return (
    <div className=" bg-zinc-50 py-20">
      <div className="">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: "#next-customer-opinion",
            prevEl: "#prev-customer-opinion",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper text-center "
        >
          {dataCustomer.map((op) => (
            <SwiperSlide>
              <CustomerOpinion
                key={op.id}
                image={op.image}
                opinion={op.opinion}
                customerName={op.customerName}
                customerDesc={op.customerDesc}
                prevOpinionSlide="prev-customer-opinion"
                nextOpinionSlide="next-customer-opinion"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionGoodNews;
