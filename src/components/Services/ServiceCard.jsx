import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const ServiceCard = ({ service }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white w-full rounded-2xl flex flex-col sm:flex-row items-center gap-3 shadow-custom p-4 relative">
      <div className="w-44 h-44 flex flex-col items-center justify-center overflow-hidden flex-shrink-0">
        <img src={service?.src} alt="Error" className="w-44 auto" />
      </div>
      <div>
        <h2 className="text-xl font-semibold ">{service?.title}</h2>
        <div className="flex items-center gap-1">
          <IoLocationSharp className="text-secondary" />
          <p className="text-sm text-secondary">{service?.location}</p>
        </div>
        <h3 className="text-sm text-gray-500">{service?.desc}</h3>
      </div>
      <div onClick={() => setIsFavorite(!isFavorite)} className="cursor-pointer self-end sm:self-start">
        {!isFavorite ? (
          <FaRegHeart className="h-8 w-8 text-primary" />
        ) : (
          <FaHeart className="h-8 w-8 text-secondary" />
        )}
      </div>
      {service?.type && <div className="absolute bottom-4 left-4 md:left-auto md:right-4 flex items-center gap-2">
       <FaCircleCheck className="h-6 w-6 text-green-500"/>
       <h2 className="font-semibold text-md">ОТОРИЗИРАН СЕРВИЗ</h2>
      </div>}
    </div>
  );
};

export default ServiceCard;
