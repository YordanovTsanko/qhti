import React from "react";
import Container from "../components/Container";
import NewProducts from "../components/Home/NewProducts";
import { temporaryProducts } from "../utils/tempoData";
import { categories } from "../utils/categories";
import adImg from "../assets/casino_landing_1500lv_756x479_2023.png";

const Home = () => {
  const BOX_WIDTH = 225;

  const firstRow = categories.slice(0, 4);
  const secondRow = categories.slice(4);

  return (
    <Container>
      <div className="flex flex-col items-center p-4">
        <h2 className="text-3xl font-bold text-white mb-10">
          БЪЛГАРСКИ МОРСКИ ПАЗАР
        </h2>
        <div className="flex flex-col space-y-4 items-center">
          <div
            className="grid grid-cols-4 gap-4"
            style={{ maxWidth: `${BOX_WIDTH * 4 + 3 * 16}px` }}
          >
            {firstRow.map(({ src, alt, label }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-4 flex flex-col cursor-pointer items-center hover:bg-secondary group transition duration-300"
                style={{ width: BOX_WIDTH }}
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
            {secondRow.map(({ src, alt, label }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-4 flex flex-col cursor-pointer items-center hover:bg-secondary group transition duration-300"
                style={{ width: BOX_WIDTH }}
              >
                <img src={src} alt={alt} className="h-20 w-auto" />
                <h4 className="text-secondary group-hover:text-white font-bold mt-2">
                  {label}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-b-2 border-white h-px bg-white w-full"></div>
        <div className="my-6 space-y-10">
          <NewProducts
            title="НАЙ-НОВО ОТ СОНАРИ"
            products={temporaryProducts}
          />
          <NewProducts title="НАЙ-НОВО ОТ ЛОДКИ" products={temporaryProducts} />
          <div>
            <img
              src={adImg}
              alt={"Ad Error"}
              className="h-44 w-full object-cover"
            />
          </div>
          <NewProducts
            title="НАЙ-НОВО ОТ ДВИГАТЕЛИ"
            products={temporaryProducts}
          />
          <NewProducts
            title="НАЙ-НОВО ОТ АКСЕСОАРИ"
            products={temporaryProducts}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
