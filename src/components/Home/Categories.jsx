import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../../utils/categories";

const Categories = () => {
  const navigate = useNavigate();

  const handleSelection = (endpoint) => {
    navigate(`?filter=${encodeURIComponent(endpoint)}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
        {categories.map(({ src, alt, label, eu }, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => handleSelection(eu)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleSelection(eu);
              }
            }}
            className="flex-shrink-0 w-20 sm:w-48 2xl:w-52 flex flex-col items-center justify-center gap-3 bg-white rounded-2xl p-4 cursor-pointer hover:bg-secondary group transition-shadow duration-200 shadow-sm"
            aria-label={`Категория ${label}`}
          >
            <div className="flex items-center justify-center h-10 md:h-24 w-full">
              <img src={src} alt={alt} className="h-16 md:h-20 w-auto object-contain mx-auto" />
            </div>
            <h4 className="text-center text-secondary group-hover:text-white font-bold text-xs sm:text-sm md:text-base">
              {label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
