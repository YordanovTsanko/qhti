import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ReactComponent as HearthIcon } from "../assets/hearth.svg";
import { ReactComponent as ProfileIcon } from "../assets/profile.svg";

const navLinks = [
  { name: "НАЧАЛО", path: "/", bgColor: "bg-primary", hover: "hover:bg-primary/90" },
  { name: "УСЛУГИ", path: "/about", bgColor: "bg-primary", hover: "hover:bg-primary/90" },
  { name: "БЛОГ", path: "/contact", bgColor: "bg-secondary", hover: "hover:bg-secondary/90" },
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
            className={`${link.bgColor + " " + link.hover} shadow-lg transition text-white text-md py-1 px-6 rounded-lg font-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center space-x-2">
          <Link to="/favorites">
            <HearthIcon className="h-7 w-7" />
          </Link>
          <div className="flex items-end cursor-pointer">
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
        </div>
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
