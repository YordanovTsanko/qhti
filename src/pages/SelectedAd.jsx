import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useNavigate, useParams } from "react-router-dom";
import { companyUser, temporaryProducts } from "../utils/tempoData";
import { RiFlag2Fill } from "react-icons/ri";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import SellerDetailsCard from "../components/Home/SellerDetailsCard";
import SelectedProductImageCarousel from "../components/Home/SelectedProductImageCarousel";
import adImg from "../assets/casino_landing_1500lv_756x479_2023.png";
import NewProducts from "../components/Home/NewProducts";

const SelectedAd = () => {
  const [data, setData] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setData(temporaryProducts.find((item) => item.id === parseInt(id)));
  }, [id]);

  return (
    <Container>
      <div className="px-2 lg:px-0">
        <div className="flex items-center gap-2 rounded-2xl mt-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className=" text-white font-semibold text-xs sm:text-sm underline underline-offset-2 hover:text-gray-300 transition duration-300"
          >
            НОВО ТЪРСЕНЕ
          </button>
          <div className="bg-white w-[1px] h-4"></div>
          <button
            type="button"
            className="text-white font-semibold  text-xs sm:text-sm underline underline-offset-2 hover:text-gray-300 transition duration-300"
          >
            КОРЕКЦИЯ НА ТЪРСЕНЕТО
          </button>
          <div className="bg-white w-[1px] h-4"></div>
          <button
            type="button"
            className=" text-white font-semibold  text-xs sm:text-sm underline underline-offset-2 hover:text-gray-300 transition duration-300"
          >
            РЕЗУЛТАТИ ОТ ТЪРСЕНЕТО
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-4 relative">
          <div className="col-span-3 md:col-span-2 ">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-4xl font-bold text-white">
                {data?.title}
              </h2>
              <RiFlag2Fill className="text-red-600 h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <SelectedProductImageCarousel images={data?.src} />
            <div className="flex justify-between p-4">
              <div className="text-white">
                <h3 className="text-xs text-gray-200">
                  РЕДАКТИРАНА НА{" "}
                  <span className="font-bold">18.08.2025 Г.</span> В{" "}
                  <span className="font-bold">11:04 Ч.</span>
                </h3>
                <h3 className="text-xs text-gray-200 ">
                  ОБЯВАТА Е ПОСЕТЕНА <span className="font-bold">300</span> ПЪТИ
                </h3>
              </div>
              <div
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex items-center gap-2 text-white cursor-pointer group"
              >
                {isFavorite ? (
                  <FaHeart className="group-hover:text-gray-300 h-6 w-6" />
                ) : (
                  <FaRegHeart className="group-hover:text-gray-300 h-6 w-6" />
                )}{" "}
                <h3 className="group-hover:text-gray-300">ДОБАВИ В ЛЮБИМИ</h3>
              </div>
            </div>
            <div className="bg-white shadow-custom p-3">
              <h2 className="text-secondary font-bold text-lg mb-2">
                БАЗОВИ ДАННИ:
              </h2>
              <div className="flex items-center justify-between bg-gray-300 py-1 px-2">
                <h2>ГОДИНА</h2>
                <h2>ЯНУАРИ 2017</h2>
              </div>
              <div className="flex items-center justify-between py-1 px-2">
                <h2>СЪСТОЯНИЕ</h2>
                <h2>УПОТРЕБЯВАН</h2>
              </div>
              <div className="flex items-center justify-between bg-gray-300 py-1 px-2">
                <h2>МАРКА</h2>
                <h2>SIMRAD</h2>
              </div>
              <div className="flex items-center justify-between py-1 px-2">
                <h2>МОДЕЛ</h2>
                <h2>CRUISE</h2>
              </div>
              <div className="flex items-center justify-between bg-gray-300 py-1 px-2">
                <h2>ЕКРАН</h2>
                <h2>5'</h2>
              </div>
            </div>

            <div className="bg-white shadow-custom p-3 mt-5">
              <h2 className="text-secondary font-bold text-lg mb-2">
                ТЕХНИЧЕСКИ ДАННИ:
              </h2>
              <div className="flex items-center justify-between bg-gray-300 py-1 px-2">
                <h2>КОНСКИ СИЛИ</h2>
                <h2>200</h2>
              </div>
              <div className="flex items-center justify-between py-1 px-2">
                <h2>МАКС БРОЙ ХОРА</h2>
                <h2>10</h2>
              </div>
              <div className="flex items-center justify-between bg-gray-300 py-1 px-2">
                <h2>ДЪЛЖИНА</h2>
                <h2>10</h2>
              </div>
              <div className="flex items-center justify-between py-1 px-2">
                <h2>ШИРИНА</h2>
                <h2>5</h2>
              </div>
              <div className="flex items-center justify-between bg-gray-300 py-1 px-2">
                <h2>ГАЗЕНЕ</h2>
                <h2>2</h2>
              </div>
            </div>

            <div className="my-5 shadow-custom">
              <img
                src={adImg}
                alt={"Ad Error"}
                className="h-44 w-full object-cover"
              />
            </div>

            <div className="bg-white shadow-custom p-3 mt-5">
              <h2 className="text-secondary font-bold text-lg mb-2">
                ХАРАКТЕРИСТИКИ:
              </h2>
              <div className="grid grid-cols-2 gap-x-8">
                <h2 className="bg-gray-300 py-1 px-2">FISH REVEAL</h2>
                <h2 className="bg-gray-300 py-1 px-2">IPS ЕКРАН</h2>
                <h2 className=" py-1 px-2">DOWN SCAN</h2>
                <h2 className=" py-1 px-2">HDMI ПОРТ</h2>
                <h2 className="bg-gray-300 py-1 px-2">SIDE SCAN</h2>
                <h2 className="bg-gray-300 py-1 px-2">ETHERNET</h2>
              </div>
            </div>
            <div className="bg-white shadow-custom p-3 mt-5 w-full">
              <h2 className="text-secondary font-bold text-lg mb-2">
                ДОПЪЛНИТЕЛНА ИНФОРМАЦИЯ:
              </h2>
              <div className="bg-gray-300 p-3 h-28 overflow-hidden">
                <p className="text-sm max-w-lg break-words whitespace-normal overflow-hidden">
                  Сонара е чисто нов купуван от Булстар, не е използван и вече
                  не е в гаранция. 2017 година е, не се използва. Комплект с
                  кабел и сонар
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 ">
            <div className="sticky top-4">
            <SellerDetailsCard
              seller={companyUser}
              reference={data?.referenceNumber}
              price={data?.price}
              vat={data?.vat}
            /></div>
          </div>
        </div>
        <div className="mt-8">
          <NewProducts title="ПОДОБНИ ПРОДУКТИ" products={temporaryProducts} />
        </div>
        <div className="my-8 shadow-custom">
          <img
            src={adImg}
            alt={"Ad Error"}
            className="h-44 w-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default SelectedAd;
