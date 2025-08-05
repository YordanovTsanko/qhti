import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/white-logo.png";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";

const Footer = () => {
  const footerLinks = [
    { label: "ОБЩИ УСЛОВИЯ", path: "/terms" },
    { label: "ПОЛИТИКА ЗА ПОВЕРИТЕЛНОСТ", path: "/privacy" },
    { label: "ПОЛИТИКА ЗА ПОЛЗВАНЕ НА БИСКВИТКИ", path: "/cookies" },
  ];

  return (
    <div>
      <div className="bg-secondary w-full p-8 flex justify-between">
        <div className="flex flex-col space-y-2">
          <Link
            to="/about"
            className="font-bold text-xl text-white mb-2 hover:text-gray-300 transition"
          >
            ЗА ЯХТИ.БГ
          </Link>
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white text-sm font-semibold hover:text-gray-300 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-2 items-end">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 mb-2 w-auto" />
          </Link>
          <Link
            to="/something"
            className="text-white text-sm font-bold hover:text-gray-300 transition"
          >
            БИОНД МЕДИЯ ООД
          </Link>
          <Link
            to="/something"
            className="text-white text-sm font-semibold hover:text-gray-300 transition"
          >
            info@qhti.bg
          </Link>
          <FacebookIcon className="h-7 w-7 hover:fill-gray-200 transition cursor-pointer" fill="white" />
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <h2 className="text-xs py-1 text-primary font-bold">
          2024 &reg; BEYOND MEDIA LTD
        </h2>
      </div>
    </div>
  );
};

export default Footer;
