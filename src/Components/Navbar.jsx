import { useState, useEffect } from "react";
import { scrollToSection } from "../utils/scrollTo";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm shadow-md border-b border-black">
      <nav className="max-w-6xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="text-2xl font-bold text-[#A27B5C] logo-font cursor-pointer"
        >
          Vaibhavi
        </button>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-[#DCD7C9] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#A27B5C]"
          aria-expanded={isOpen}
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

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto transition-all duration-300`}
        >
          <ul className="font-body font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-black md:flex-row md:gap-8 md:mt-0 md:bg-transparent">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`block w-full text-left py-2 px-3 rounded md:p-0 transition-all cursor-pointer ${
                    activeSection === id
                      ? "text-[#A27B5C] font-semibold"
                      : "text-[#DCD7C9] hover:text-[#A27B5C]"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
