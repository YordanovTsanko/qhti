import React from "react";

const SellerDetailsCard = ({ seller, reference, price, vat }) => {
  return (
    <div className="bg-white rounded-[50px] shadow-custom flex flex-col items-center p-4">
      <div className="flex items-center gap-4 w-full">
        <div className="w-28 h-28 rounded-full border-4 border-primary flex flex-col items-center justify-center">
          <img src={seller.image} alt="Error" className="w-24 h-auto" />
        </div>
        <div className="font-sans flex flex-col justify-center">
          <h3 className="text-xs font-bold">{seller.name}</h3>
          <h3 className="text-xs font-bold text-secondary">
            {seller.type === "business" ? "ФИРМА" : "ЧАСТНО ЛИЦЕ"}
          </h3>
        </div>
      </div>
      <h2 className="text-3xl font-bold mt-4 text-center text-primary">{price}</h2>
      {price !== "ПО ДОГОВАРЯНЕ" && (
        <h2 className="text-xs text-center font-bold">{vat ? "НАЧИСЛЕНО ДДС" : "НЕ СЕ НАЧИСЛЯВА ДДС"}</h2>
      )}

      <h3 className="text-xs text-center font-bold text-secondary mt-4">
        ТЕЛЕФОН ЗА ВРЪЗКА:
      </h3>
      <h2 className="text-4xl text-center font-bold">{seller.phone}</h2>

      <h3 className="text-xs text-center font-bold text-secondary mt-4">EMAIL:</h3>
      <h2 className="text-2xl text-center font-bold ">{seller.email}</h2>

      <h3 className="text-xs text-center font-bold text-secondary mt-4">
        РЕФЕРЕНЦИЯ НА ОБЯВАТА: {`${reference}`}
      </h3>
    </div>
  );
};

export default SellerDetailsCard;
