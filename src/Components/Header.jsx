import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add event listener for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const closeMenu = () => {
    
  }
  return (
    <nav
      className={`sticky top-0 z-50 flex flex-row mx-auto gap-10 px-16 py-4 items-center transition-all duration-300 ${
        isScrolled ? "bg-[#303030] shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      {/* Portfolio - Scrolls to Home */}
      <span
        id="portfolio"
        className="text-3xl font-bold cursor-pointer text-blue-400"
        onClick={() => scrollToSection("home")}
      >
        Portfolio.
      </span>

      {/* Mobile Hamburger Icon */}
      <div
        className="lg:hidden ml-auto flex flex-col gap-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-1 bg-white rounded"></div>
        <div className="w-6 h-1 bg-white rounded"></div>
        <div className="w-6 h-1 bg-white rounded"></div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row text-left gap-8 ml-auto text-lg">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "skills", label: "Skills" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="px-4 py-2 rounded cursor-pointer transition duration-300 hover:text-sky-600"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-16 right-0 bg-[#303030] w-40 py-2 rounded-md text-white shadow-lg">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map(({ id, label }) => (
            <li
              key={id}
              className="px-4 py-2 cursor-pointer hover:text-sky-600"
            >
              <button onClick={() => scrollToSection(id)}>{label}</button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
