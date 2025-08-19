import React, { useState } from "react";
import Container from "../../components/Container";
import SettingsProfileCard from "../../components/Profile/SettingsProfileCard";
import EditEmailForm from "../../components/Profile/EditEmailForm";
import EditPasswordForm from "../../components/Profile/EditPasswordForm";

const Settings = () => {
  const [formType, setFormType] = useState("email");

  const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : [];

  return (
    <Container>
      <div className="flex flex-col items-center py-4 px-2 lg:px-0">
        <h2 className="text-3xl font-bold text-center text-white mb-4 mt-4">
          ТВОЯТ ПРОФИЛ
        </h2>
        <div className="mb-8 border-b-2 w-[90%] border-white h-px bg-white"></div>
        <SettingsProfileCard user={user} />
        <div className="mb-8 border-b-2 w-[90%] border-white h-px bg-white"></div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 items-start w-full self-start px-10">
          <div className="flex flex-col border-2 border-secondary">
            <button
              onClick={() => setFormType("email")}
              className={`py-1 px-4 font-semibold ${
                formType === "email" ? "bg-secondary text-white" : "bg-white text-primary"
              }`}
            >
              EMAIL АДРЕС
            </button>
            <button
              onClick={() => setFormType("password")}
              className={`py-1 px-4 font-semibold ${
                formType === "password" ? "bg-secondary text-white" : "bg-white text-primary"
              }`}
            >
              ПРОМЕНИ ПАРОЛА
            </button>
          </div>
          {formType === "email" && <EditEmailForm />}
          {formType === "password" && <EditPasswordForm />}
        </div>
      </div>
    </Container>
  );
};

export default Settings;
