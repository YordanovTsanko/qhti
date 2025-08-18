import React from "react";
import profilePicture from "../../assets/profile-picture.avif";
import { useNavigate } from "react-router-dom";

const ProfileDropDown = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("auth");
    return navigate("/");
  };

  return (
    <div className="absolute top-12 right-0 w-auto min-w-44 bg-white shadow-custom flex flex-col z-30">
      <div className="p-2 flex items-center h-full">
        <img
          src={profilePicture}
          alt="profile-picture"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col justify-center h-14 pe-2">
          <h2 className="font-semibold ps-1">МОНИКА ПАЛАЗОВА</h2>
          <div className="h-px w-full bg-gray-600 justify-self-end"></div>
        </div>
      </div>

      <button
        type="button"
        className="bg-secondary text-start text-white ps-2 py-1 font-semibold hover:bg-secondary/90 transition duration-300"
      >
        ОБЯВИ
      </button>
      <button
        type="button"
        className="text-primary text-start ps-2 py-1 font-semibold hover:text-primary/90 hover:bg-gray-200/70 transition duration-300"
      >
        ЛЮБИМИ
      </button>
      <button
        type="button"
        className="text-primary text-start ps-2 py-1 font-semibold hover:text-primary/90 hover:bg-gray-200/70 transition duration-300"
      >
        МОЯТ ПРОФИЛ
      </button>
      <button
        type="button"
        className="text-primary text-start ps-2 py-1 font-semibold hover:text-primary/90 hover:bg-gray-200/70 transition duration-300"
      >
        НАСТРОЙКИ
      </button>
      <button
        type="button"
        className="text-primary text-start ps-2 py-1 font-semibold hover:text-primary/90 hover:bg-gray-200/70 transition duration-300"
      >
        МОЯТ БЕЛЕЖНИК
      </button>
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
