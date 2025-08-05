import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../utils/categories";

const Categories = () => {
  const navigate = useNavigate();
  const BOX_WIDTH = 225;

  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4);

  const handleSelection = (endpoint) => {
    navigate(`?filter=${encodeURIComponent(endpoint)}`);
  };

  return (
    <div className="flex flex-col space-y-4 items-center">
      <div
        className="grid grid-cols-4 gap-4"
        style={{ maxWidth: `${BOX_WIDTH * 4 + 3 * 16}px` }}
      >
        {firstRow.map(({ src, alt, label, eu }, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-4 flex flex-col cursor-pointer items-center hover:bg-secondary group transition duration-300"
            style={{ width: BOX_WIDTH }}
            onClick={() => handleSelection(eu)}
          >
            <img src={src} alt={alt} className="h-20 w-auto" />
            <h4 className="text-secondary group-hover:text-white text-center font-bold mt-2">
              {label}
            </h4>
          </div>
        ))}
      </div>

      <div
        className="flex justify-center gap-4"
        style={{ maxWidth: `${BOX_WIDTH * 4 + 3 * 16}px`, width: "100%" }}
      >
        {secondRow.map(({ src, alt, label, eu }, i) => (
          <div
            key={i}
            className="rounded-2xl bg-white p-4 flex flex-col cursor-pointer items-center hover:bg-secondary group transition duration-300"
            style={{ width: BOX_WIDTH }}
            onClick={() => handleSelection(eu)}
          >
            <img src={src} alt={alt} className="h-20 w-auto" />
            <h4 className="text-secondary group-hover:text-white font-bold mt-2">
              {label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
