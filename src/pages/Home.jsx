import React from "react";
import Container from "../components/Container";
import lodkiIqhti from "../assets/lodki_i_qhti.png";
import djetove from "../assets/djetove.png";
import morskaElektronika from "../assets/morska_elektronika.png";
import dvigateli from "../assets/dvigateli.png";
import kolesari from "../assets/kolesari.png";
import ribolov from "../assets/ribolov.png";
import chasti from "../assets/chasti.png";

const Home = () => {
  const categories = [
    { src: lodkiIqhti, alt: "Лодки и яхти", label: "ЛОДКИ И ЯХТИ" },
    { src: djetove, alt: "Джетове", label: "ДЖЕТОВЕ" },
    {
      src: morskaElektronika,
      alt: "Морска електроника",
      label: "МОРСКА ЕЛЕКТРОНИКА",
    },
    { src: dvigateli, alt: "Двигатели", label: "ДВИГАТЕЛИ" },
    { src: kolesari, alt: "Колесари", label: "КОЛЕСАРИ" },
    { src: ribolov, alt: "Риболов", label: "РИБОЛОВ" },
    { src: chasti, alt: "Части", label: "ЧАСТИ" },
  ];

  const BOX_WIDTH = 225; // 7rem * 16px = 112px, same as your previous width

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
            style={{ maxWidth: `${BOX_WIDTH * 4 + 3 * 16}px` }} // 4 boxes + 3 gaps (16px each)
          >
            {firstRow.map(({ src, alt, label }, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-4 flex flex-col cursor-pointer items-center"
                style={{ width: BOX_WIDTH }}
              >
                <img src={src} alt={alt} className="h-20 w-auto" />
                <h4 className="text-secondary text-center font-bold mt-2">
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
                className="rounded-2xl bg-white p-4 flex flex-col cursor-pointer items-center"
                style={{ width: BOX_WIDTH }}
              >
                <img src={src} alt={alt} className="h-20 w-auto" />
                <h4 className="text-secondary font-bold mt-2">{label}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-b-2 border-white h-px bg-white w-full"></div>
      </div>
    </Container>
  );
};

export default Home;
