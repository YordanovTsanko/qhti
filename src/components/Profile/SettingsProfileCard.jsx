import React from "react";
import { GrEdit } from "react-icons/gr";

const SettingsProfileCard = ({ user }) => {
  return (
    <div className="mb-8 self-start px-20 flex flex-col sm:flex-row items-center gap-6">
      <div className="flex flex-col justify-center h-32 w-32 rounded-full bg-white relative flex-shrink-0 ">
        <img
          src={user?.image}
          alt="Error"
          className="rounded-full h-28 w-auto"
        />
        <div className="bg-white h-8 w-8 rounded-full flex items-center shadow-custom justify-center cursor-pointer absolute bottom-0 right-0   ">
          <GrEdit className="text-secondary" />
        </div>
      </div>
      <div className="text-white flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <div className="bg-white h-8 w-8 rounded-full flex items-center flex-shrink-0 justify-center cursor-pointer">
            <GrEdit className="text-secondary" />
          </div>
        </div>

        <div className="bg-white/15 h-full rounded-xl p-4 min-h-20 max-w-lg break-words relative pe-14">
          <p className="font-sans text-sm">{user?.desc}</p>
          <div className="bg-white h-8 w-8 rounded-full flex items-center justify-center cursor-pointer absolute bottom-2 right-2   ">
            <GrEdit className="text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfileCard;
