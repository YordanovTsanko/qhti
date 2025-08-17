import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaCheck, FaRegHeart, FaHeart } from "react-icons/fa";

const AdsCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-2xl py-5 px-4 flex flex-col sm:flex-row gap-8 shadow-custom cursor-pointer">
      <div className="flex flex-shrink-0 gap-2 justify-center sm:justify-normal">
        <img src={product.src[0]} className="h-40 w-40" alt="Error" />
        <div className="flex flex-col gap-2">
          {product.src.slice(1).map((src, i) => (
            <img src={src} className="h-[48px] w-auto" alt="Error" key={i} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between max-w-lg">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <div className="flex max-w-[350px] gap-2 mt-2 flex-wrap">
              {product.check.map((check, i) => (
                <div
                  key={i}
                  className="flex flex-none items-center me-2 gap-1 overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  <FaCheck className="text-secondary" />
                  <p className="text-sm">{check}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col items-center hidden sm:flex">
            <h2 className="text-xl font-semibold">{product.price}</h2>
            <h3 className="text-sm font-semibold text-center">
              ЦЕНАТА Е С ДДС
            </h3>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-sm text-gray-500">{product.desc}</p>
          <div className="flex items-center gap-1 self-end">
            <IoLocationSharp className="text-secondary" />
            <p className="text-sm text-secondary">{product.location}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsFavorite(!isFavorite)}
        className="cursor-pointer sm:-ms-5 self-start flex sm:block justify-between w-full sm:w-auto"
      >
        {!isFavorite ? (
          <FaRegHeart className="h-8 w-8 text-primary" />
        ) : (
          <FaHeart className="h-8 w-8 text-red-500" />
        )}
        <div className="flex-col items-center flex sm:hidden">
          <h2 className="text-xl font-semibold">{product.price}</h2>
          <h3 className="text-sm font-semibold text-center">ЦЕНАТА Е С ДДС</h3>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
