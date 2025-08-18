import React from "react";

const AdsProfileCard = ({ data }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8">
      <div className="w-28 h-28 bg-white rounded-full flex-shrink-0 flex flex-col justify-center">
        <img src={data?.image} className="w-auto h-24" alt="Error" />
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-white">ЕИК: {data?.eik}</p>
        <h2 className="text-white text-2xl mb-2 font-bold">{data?.name}</h2>
        <div className="bg-white/20 rounded-xl min-h-20 p-4">
          <p className="text-xs text-white font-sans">{data?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AdsProfileCard;
