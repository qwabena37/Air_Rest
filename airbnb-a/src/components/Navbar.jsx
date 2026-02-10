import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaHome } from "react-icons/fa";

export default function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600";

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Date & Time Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 text-center">
        {dateTime.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        | {dateTime.toLocaleTimeString()}
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow relative">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            <FaHome className="text-blue-600 text-xl" />
            Stay<span className="text-gray-800">Ease</span>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/locations" className={linkClass}>
              Locations
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebookF className="text-lg md:text-base" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
              <FaInstagram className="text-lg md:text-base" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition">
              <FaTiktok className="text-lg md:text-base" />
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-2xl ml-4 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Right Panel */}
        <div
          className={`fixed top-20 right-4 h-auto w-56 bg-white/90 backdrop-blur-md shadow-lg rounded-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col px-6 py-6 space-y-4">
            <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="/locations" className={linkClass} onClick={() => setMenuOpen(false)}>
              Locations
            </NavLink>
            <NavLink to="/gallery" className={linkClass} onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
}
