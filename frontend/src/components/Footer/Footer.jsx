import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div className="flex flex-col">
          <img src={logo} alt="Logo" className="w-12 h-14 object-contain mb-4" />
          <p className="text-gray-300 text-sm">
            Empowering your digital journey with simplicity and style. Join us and let's build something amazing together.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-fuchsia-400">Quick Links</h3>
          <Link to="/" className="text-gray-300 hover:text-fuchsia-300 transition">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-fuchsia-300 transition">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-fuchsia-300 transition">Contact</Link>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-fuchsia-400 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
        &copy; {new Date().getFullYear()} YourAppName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
