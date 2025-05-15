import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
            alt="Home Illustration"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to Our World 🌍
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            Discover who we are and what we do. We're building something
            meaningful — and you're invited to be a part of it.
          </p>

          <div className="flex gap-4">
            <Link
              to="/about"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-gray-300 hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
