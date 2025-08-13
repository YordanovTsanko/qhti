import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const AuthModal = ({ setAuthModal }) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const labelFromUrl = searchParams.get("auth");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 z-40" />

      <div
        role="dialog"
        aria-modal="true"
        className="relative z-50 w-full max-w-[60vw] mx-4 bg-white shadow-custom p-6"
      >
        <div className="border-b-2 border-black flex items-center justify-between">
          <div className="flex">
            {[
              { label: "ВЛЕЗ В ПРОФИЛА СИ", value: "login" },
              { label: "РЕГИСТРИРАЙ СЕ", value: "register" },
            ].map(({ label, value }, i) => {
              const isActive = labelFromUrl === value;
              return (
                <button
                  key={value}
                  onClick={() => navigate(`?auth=${value}`)}
                  className={`px-4 py-2 font-semibold text-xl transition duration-300 border-t-2 border-black 
          ${i === 0 ? "border-l-2" : "border-r-2"}
          ${
            isActive
              ? "bg-secondary text-white hover:bg-secondary/90"
              : "text-primary hover:text-primary/90"
          }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setAuthModal(false)}
            className="px-4 py-2 font-bold text-3xl text-red-500 tracking-widest hover:text-red-600 transition duration-300"
          >
            <IoMdClose />
          </button>
        </div>
        {labelFromUrl === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default AuthModal;
