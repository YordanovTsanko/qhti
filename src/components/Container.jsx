import React from "react";
import adImg from "../assets/casino_landing_226x479.jpg";

const Container = ({ children }) => {
  return (
    <div className="flex w-full max-w-[2000px] mx-auto relative">
      <div className="w-64 p-4 hidden lg:block">
        <div className="sticky top-4">
          <img src={adImg} alt="Ad Error" className="w-full h-[500px]" />
        </div>
      </div>

      <main className="mx-auto">{children}</main>

      <div className="w-64 p-4 hidden lg:block">
        <div className="sticky top-4">
          <img src={adImg} alt="Ad Error" className="w-full h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Container;
