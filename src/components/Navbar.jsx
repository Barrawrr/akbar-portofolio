import { useState } from "react";
import { Link } from "react-router-dom";
import ToogleTheme from "../hooks/ToogleTheme";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Smooth scroll helper
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // tinggi navbar
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
    closeMenu(); // close mobile menu
  };

  const menu = [
    { name: "Beranda", to: "/" },
    { name: "Tentang Saya", to: "/about" },
    { name: "Portofolio", to: "portfolio", isAnchor: true },
    { name: "Blog", to: "blog", isAnchor: true },
    { name: "Kontak", to: "contact", isAnchor: true },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary dark:bg-primary-dark bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="dark:text-white text-2xl font-bold">Bar</h1>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="relative w-8 h-6 flex flex-col justify-between items-center lg:hidden group" aria-label="Toggle menu">
          <span className={`h-1 w-full bg-primary-dark dark:bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`h-1 w-full bg-primary-dark dark:bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-full bg-primary-dark dark:bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              {item.isAnchor ? (
                <a
                  href={`#${item.to}`}
                  onClick={(e) => handleScroll(e, item.to)}
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition duration-300 ${hovered === item.name ? "text-gray-400 opacity-60" : "dark:text-white text-black"}`}
                >
                  {item.name}
                </a>
              ) : (
                <Link to={item.to} onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)} className={`transition duration-300 ${hovered === item.name ? "text-gray-400 opacity-60" : "dark:text-white text-black"}`}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <ul className="bg-primary text-black dark:bg-primary-dark dark:text-white flex flex-col items-center gap-6 py-6 font-medium">
          {menu.map((item) => (
            <li key={item.name}>
              {item.isAnchor ? (
                <a href={`#${item.to}`} onClick={(e) => handleScroll(e, item.to)}>
                  {item.name}
                </a>
              ) : (
                <Link to={item.to} onClick={closeMenu}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
