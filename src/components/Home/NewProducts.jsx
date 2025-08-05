import React from "react";

const NewProducts = ({ title, products }) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-white font-bold ml-4">{title}</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-5   gap-6 w-full">
        {products.map(({ src, alt, title, price, location, date }, i) => (
          <div key={i} className="bg-white overflow-hidden cursor-pointer">
            <img src={src} alt={alt} className="h-36 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-sm">{title}</h3>
              <p className="font-bold text-md mt-1 mb-3">{price}</p>
              <p className="text-xs text-gray-600">{location}</p>
              <p className="text-xs text-gray-500 mt-1">{date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
