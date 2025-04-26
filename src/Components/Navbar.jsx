import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="bg-[#2C3930] shadow-md">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-[#A27B5C] logo-font">
            Vaibhavi
          </span>
        </Link>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#DCD7C9] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#A27B5C]"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-[#3F4F44] md:flex-row md:space-x-8 md:mt-0 md:bg-transparent">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/connect", label: "Connect" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={handleLinkClick}
                  className={`block py-2 px-3 rounded md:p-0 transition-all ${
                    location.pathname === path
                      ? "text-[#A27B5C] font-semibold"
                      : "text-[#DCD7C9] hover:text-[#A27B5C]"
                  }`}
                  aria-current={location.pathname === path ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
