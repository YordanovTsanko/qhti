import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReactComponent as HearthIcon } from "../assets/hearth.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";

const navLinks = [
  { name: "НАЧАЛО", path: "/home", bgColor: "bg-primary" },
  { name: "УСЛУГИ", path: "/about", bgColor: "bg-primary" },
  { name: "БЛОГ", path: "/contact", bgColor: "bg-secondary" },
];

const NavBar = () => {
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
            className={`${link.bgColor} text-white text-md py-1 px-6 rounded-lg font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/favorites">
          <HearthIcon className="h-6 w-6 text-primary" />
        </Link>
        <Link to="/profile">
          <ProfileIcon className="h-6 w-6 text-primary" />
        </Link>
        <Link
          to="/"
          className="bg-primary text-white font-semibold py-2 px-2 rounded-3xl shadow hover:bg-primary/90 transition"
        >
          ДОБАВИ ОБЯВА
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
