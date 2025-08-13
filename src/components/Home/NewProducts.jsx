import React, { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const NewProducts = ({ title, products }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1536) {
        setItemsPerPage(5);
      } else if (window.innerWidth >= 1280) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(2);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-white font-bold ml-8">{title}</h2>
      <div className="flex items-center w-full mt-6">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className="pe-3 text-white disabled:opacity-50"
        >
          <RiArrowLeftSLine size={24} />
        </button>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 flex-1">
          {currentProducts.map(({ src, alt, title, price, location, date }, i) => (
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
        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 1}
          className="ps-3 text-white disabled:opacity-50"
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewProducts;
