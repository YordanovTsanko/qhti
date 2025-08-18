import React from "react";
import Container from "../../components/Container";
import { temporaryProducts } from "../../utils/tempoData";
import AdsCard from "../../components/Home/AdsCard";

const MyFavorites = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-4 px-2 lg:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          ЛЮБИМИ
        </h2>
        <div className="mb-8 border-b-2 w-[90%] border-white h-px bg-white"></div>
        <div className="flex flex-col gap-4">
          {temporaryProducts ? (
            temporaryProducts.map((product) => (
              <AdsCard product={product} favorite />
            ))
          ) : (
            <h2 className="text-red-600 bg-red-200 text-center py-2 px-4 rounded-xl font-bold text-md sm:text-xl lg:text-3xl">
              ВСЕ ОЩЕ НЯМАТЕ ОБЯВИ
            </h2>
          )}
        </div>
      </div>
    </Container>
  );
};

export default MyFavorites;
