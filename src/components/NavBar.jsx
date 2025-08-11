import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReactComponent as HearthIcon } from "../assets/hearth.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";
import { useState } from "react";

const navLinks = [
  {
    name: "НАЧАЛО",
    path: "/",
    bgColor: "bg-primary",
    hover: "hover:bg-primary/90",
  },
  {
    name: "УСЛУГИ",
    path: "/about",
    bgColor: "bg-primary",
    hover: "hover:bg-primary/90",
  },
  {
    name: "БЛОГ",
    path: "/contact",
    bgColor: "bg-secondary",
    hover: "hover:bg-secondary/90",
  },
];

const NavBar = ({ setAuthModal }) => {
  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);

  const handleClickProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleButtonClick = (path) => {
    handleClickProfile();
    setAuthModal(true);
    navigate(`?auth=${path}`, { replace: true });
  };

  return (
    <nav className="w-full bg-white border-b-[6px] border-secondary px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </Link>
      </div>

      <div className="hidden md:flex space-x-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`${
              link.bgColor + " " + link.hover
            } shadow-lg transition text-white text-lg py-1 px-7 rounded-lg font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-8 relative">
        <div className="flex items-center space-x-2">
          <Link to="/favorites">
            <HearthIcon className="h-7 w-7" />
          </Link>
          <div
            className="flex items-end cursor-pointer"
            onClick={handleClickProfile}
          >
            <ProfileIcon className="h-7 w-7" />
            <span
              className="inline-block text-primary ms-[7px]"
              style={{
                fontSize: "1rem",
                lineHeight: "1",
                transform: "rotate(90deg) scaleX(1.2) scaleY(2)",
                transformOrigin: "center",
              }}
            >
              {">"}
            </span>
          </div>
          {openProfile && (
            <div className="absolute top-12 right-0 bg-white shadow-custom flex flex-col z-10">
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
                className="text-primary text-start pe-20 ps-4 py-1 font-semibold hover:text-primary/90 transition duration-300"
              >
                РЕГИСТРИРАЙ СЕ
              </button>
            </div>
          )}
        </div>
        <Link
          to="/"
          className="bg-primary tracking-widest text-white text-lg font-semibold py-2 px-3 rounded-3xl shadow hover:bg-primary/90 transition"
        >
          ДОБАВИ ОБЯВА
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
