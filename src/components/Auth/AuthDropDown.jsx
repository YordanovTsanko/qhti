import React from "react";

const AuthDropDown = ({handleButtonClick}) => {
  return (
    <div className="absolute top-12 right-0 w-44 bg-white shadow-custom flex flex-col z-30">
      <button
        type="button"
        onClick={() => {
          handleButtonClick("login");
        }}
        className="bg-secondary text-start text-white ps-4 py-1 font-semibold hover:bg-secondary/90 transition duration-300"
      >
        ВХОД
      </button>
      <button
        type="button"
        onClick={() => {
          handleButtonClick("register");
        }}
        className="text-primary text-start ps-4 py-1 font-semibold hover:text-primary/90 transition duration-300"
      >
        РЕГИСТРИРАЙ СЕ
      </button>
    </div>
  );
};

export default AuthDropDown;
