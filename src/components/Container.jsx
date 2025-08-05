import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex w-full max-w-[2000px] mx-auto">
      <div className="w-64 bg-gray-200/10">{/* Left Ads */}</div>
      <main className="flex-grow px-4">{children}</main>
      <div className="w-64 bg-gray-200/10">{/* Right Ads */}</div>
    </div>
  );
};

export default Container;
