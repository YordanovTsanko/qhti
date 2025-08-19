import React from "react";
import profilePicture from "../../assets/profile-picture.avif";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropDown = ({ handleClickProfile }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    handleClickProfile();
    navigate("/");
  };

  const menuItems = [
    { label: "ОБЯВИ", to: "/", isPrimary: true },
    { label: "ЛЮБИМИ", to: "/my-favorites" },
    { label: "МОЯТ ПРОФИЛ", to: "/my-profile" },
    { label: "НАСТРОЙКИ", to: "/settings" },
    { label: "МОЯТ БЕЛЕЖНИК", to: "/my-notebook" },
  ];

  return (
    <div className="absolute top-12 right-0 w-auto min-w-56 md:min-w-44 bg-white shadow-custom flex flex-col z-30">
      <div className="p-2 flex items-center h-full">
        <img
          src={profilePicture}
          alt="profile-picture"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col justify-center h-14 ps-2 pe-4">
          <h2 className="font-semibold ">МОНИКА ПАЛАЗОВА</h2>
          <div className="h-px w-full bg-gray-600"></div>
        </div>
      </div>

      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          onClick={handleClickProfile}
          className={`${
            item.isPrimary
              ? "bg-secondary text-white hover:bg-secondary/90"
              : "text-primary hover:text-primary/90 hover:bg-gray-200/70"
          } text-start ps-2 py-1 font-semibold transition duration-300`}
        >
          {item.label}
        </Link>
      ))}

      <button
        type="button"
        onClick={handleLogout}
        className="text-primary text-start ps-2 py-1 font-semibold hover:text-primary/90 hover:bg-gray-200/70 transition duration-300"
      >
        ИЗХОД
      </button>
    </div>
  );
};

export default ProfileDropDown;
