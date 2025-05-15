import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Cookie from "js-cookie";
import { Button } from "../ui/button";
import { useName } from "@/context/UserContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { name, setName, token, setToken } = useName();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-fuchsia-400 border-b-2 border-fuchsia-400 font-semibold"
      : "text-white hover:text-fuchsia-300 transition";

  const handleLogout = () => {
    Cookie.remove("userId");
    Cookie.remove("token");
    setName("");
    setToken("");
    setMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-3 flex items-center justify-between relative shadow-lg">
      {/* Logo + Greeting */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-10 h-12 object-contain" />
        </Link>
        <Link
          to="/"
          className="text-lg md:text-xl font-bold text-white hover:text-fuchsia-300 transition duration-500"
        >
          {name ? `Hello, ${name}` : "Hello, User"}
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-6">
        <NavLink to="/" className={activeClass}>Home</NavLink>
        <NavLink to="/about" className={activeClass}>About</NavLink>
        <NavLink to="/contact" className={activeClass}>Contact</NavLink>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        {name && token ? (
          <Button
            onClick={handleLogout}
            className="bg-fuchsia-600 text-white hover:bg-fuchsia-700"
          >
            Logout
          </Button>
        ) : (
          <>
            <Link to="/login">
              <Button className="bg-fuchsia-600 text-white hover:bg-fuchsia-700">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gray-100 text-black hover:bg-white">
                SignUp
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? <FaTimes size={22} className="text-white" /> : <FaBars size={22} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-4 flex flex-col space-y-4 z-50 md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={activeClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={activeClass}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={activeClass}>Contact</NavLink>

          {name && token ? (
            <Button onClick={handleLogout} className="bg-fuchsia-600 text-white hover:bg-fuchsia-700">
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button className="bg-fuchsia-600 text-white hover:bg-fuchsia-700">Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button className="bg-gray-100 text-black hover:bg-white">SignUp</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
