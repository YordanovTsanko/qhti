import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReactComponent as HearthIcon } from "../assets/hearth.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

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
  const [mobileNav, setMobileNav] = useState(false);

  const handleClickProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleButtonClick = (path) => {
    handleClickProfile();
    setAuthModal(true);
    navigate(`?auth=${path}`, { replace: true });
  };

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e) => {
      if (e.key === "Escape") setMobileNav(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileNav]);

  return (
    <nav className="w-full bg-white border-b-[6px] border-secondary px-6 py-4 grid grid-cols-5 md:grid-cols-3 lg:flex lg:items-center lg:justify-between relative z-20">
      <div className="flex items-center lg:hidden ">
        <RxHamburgerMenu
          className="lg:h-8 lg:w-8 h-5 w-5 text-primary cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        />
      </div>

      <div className="flex items-center justify-center lg:justify-normal col-span-3 md:col-span-1">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 lg:h-14 w-auto" />
        </Link>
      </div>

      <div className="hidden lg:flex space-x-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`${link.bgColor} ${link.hover} shadow-lg transition text-white text-lg py-1 px-7 rounded-lg font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 lg:gap-8 relative justify-end lg:justify-normal">
        <div className="flex items-center space-x-2">
          <Link to="/favorites">
            <HearthIcon className="md:h-7 md:w-7 h-5 w-5" />
          </Link>
          <div
            className="flex items-end cursor-pointer"
            onClick={handleClickProfile}
          >
            <ProfileIcon className="md:h-7 md:w-7 h-5 w-5" />
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
          )}
        </div>
        <Link
          to="/"
          className="hidden md:block bg-primary tracking-widest text-white text-lg font-semibold py-2 px-3 rounded-3xl shadow hover:bg-primary/90 transition"
        >
          ДОБАВИ ОБЯВА
        </Link>
      </div>

      <AnimatePresence>
        {mobileNav && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNav(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.aside
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85%] bg-white shadow-lg p-6 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <Link to="/" onClick={() => setMobileNav(false)}>
                  <img src={logo} alt="Logo" className="h-10 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileNav(false)}
                  className="text-primary p-2"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-3 mb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileNav(false)}
                    className={`${link.bgColor} ${link.hover} text-white py-2 px-4 rounded-md font-medium`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="mt-4 w-full">
                  <Link
                    to="/"
                    onClick={() => setMobileNav(false)}
                    className="inline-block bg-primary text-white py-2 px-4 w-full text-center rounded-3xl font-semibold"
                  >
                    ДОБАВИ ОБЯВА
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
