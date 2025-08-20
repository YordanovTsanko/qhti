import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ServiceCard = ({ service }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white w-full rounded-2xl flex flex-col sm:flex-row items-center gap-3 p-4">
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
    </div>
  );
};

export default ServiceCard;
