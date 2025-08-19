import React, { useState } from "react";
import Container from "../../components/Container";
import AdsProfileCard from "../../components/Profile/AdsProfileCard";
import { temporaryProducts } from "../../utils/tempoData";
import AdsCard from "../../components/Home/AdsCard";

const MyProfile = () => {
  const [type, setType] = useState("ads");

  const data = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : [];

  return (
    <Container>
      <div className="flex flex-col items-center py-4 px-2 lg:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          ТВОЯТ ПРОФИЛ
        </h2>
        <div className="mb-8 border-b-2 w-[90%] border-white h-px bg-white"></div>
        <div className="mb-8 self-start px-10">
          <AdsProfileCard data={data} />
        </div>
        <div>
          <button
            onClick={() => setType("ads")}
            className={`${
              type === "ads"
                ? "text-white bg-secondary underline decoration-1"
                : "text-secondary bg-white"
            } text-2xl font-semibold py-1 px-8`}
          >
            ОБЯВИ
          </button>
          <button
            onClick={() => setType("services")}
            className={`${
              type === "services"
                ? "text-white bg-secondary underline decoration-1"
                : "text-secondary bg-white"
            } text-2xl font-semibold py-1 px-8`}
          >
            УСЛУГИ
          </button>
        </div>
        <div className="mb-5 border-b-2 w-[90%] border-white h-px bg-white"></div>
        <div>
          {type === "ads" ? (
            <div className="flex flex-col gap-4">
              {temporaryProducts ? (
                temporaryProducts.map((product) => (
                  <AdsCard product={product} myAds />
                ))
              ) : (
                <h2 className="text-red-600 bg-red-200 text-center py-2 px-4 rounded-xl font-bold text-md sm:text-xl lg:text-3xl">
                  ВСЕ ОЩЕ НЯМАТЕ ОБЯВИ
                </h2>
              )}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MyProfile;
