import React from "react";
import Container from "../components/Container";
import { temporaryProducts } from "../utils/tempoData";
import AdsCard from "../components/Home/AdsCard";
import adImg from "../assets/casino_landing_1500lv_756x479_2023.png";
import { useNavigate } from "react-router-dom";

const Ads = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="flex flex-col items-center py-4 px-1 md:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          БЪЛГАРСКИ МОРСКИ ПАЗАР
        </h2>
        <div className="flex items-center bg-secondary py-1 px-4 gap-2 sm:gap-4 rounded-2xl">
          <button
            type="button"
            onClick={() => navigate("/")}
            className=" text-white font-semibold text-xs sm:text-lg xl:text-xl underline underline-offset-2 hover:text-gray-300 transition duration-300"
          >
            НОВО ТЪРСЕНЕ
          </button>
          <div className="bg-white w-[1px] h-5"></div>
          <button
            type="button"
            className="text-white font-semibold  text-xs sm:text-lg xl:text-xl underline underline-offset-2 hover:text-gray-300 transition duration-300"
          >
            ПОДРОБНО ТЪРСЕНЕ
          </button>
          <div className="bg-white w-[1px] h-5"></div>
          <button
            type="button"
            className=" text-white font-semibold  text-xs sm:text-lg xl:text-xl underline underline-offset-2 hover:text-gray-300 transition duration-300"
          >
            КОРЕКЦИЯ НА ТЪРСЕНЕТО
          </button>
        </div>
        <div className="my-8 px-2 flex flex-col gap-4">
          {temporaryProducts ? (
            <>
              {temporaryProducts.map((product) => (
                <AdsCard product={product} />
              ))}
              <div>
                <img
                  src={adImg}
                  alt={"Ad Error"}
                  className="h-44 w-full object-cover"
                />
              </div>
            </>
          ) : (
            <h2 className="text-red-600 bg-red-200 text-center py-2 px-4 rounded-xl font-bold text-md sm:text-xl lg:text-3xl">
              НЯМА НАМЕРЕНИ ОБЯВИ С ТОЗИ ФИЛТЪР
            </h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Ads;
