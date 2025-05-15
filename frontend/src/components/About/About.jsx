import React from "react";
import aboutUsImg from "../../assets/aboutus.png";
import { motion } from "motion/react";
import Map from "../Map/Map";

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* 🔥 Premium Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-500">
            Our Trusted Clients
          </h1>
          <div className="w-24 h-1 mx-auto mt-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* 🔄 Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left - Image (No border, no hover) */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutUsImg}
              alt="About Us"
              className="rounded-3xl shadow-xl object-cover w-full h-auto"
            />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-fuchsia-400">
              Who We <span className="text-white">Are</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              We’re a dedicated team crafting immersive, intelligent digital
              platforms. From sleek UI to solid backend — we do it all.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Innovation, performance, and attention to detail drive us. We
              don’t just build products — we build experiences.
            </p>

            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>🚀 Superfast & scalable web apps</li>
              <li>🔐 Bank-level secure architecture</li>
              <li>🎨 Clean, modern, accessible design</li>
              <li>⚡ Lightning-quick support response</li>
            </ul>
          </motion.div>
        </div>

        {/* map section */}
        <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 px-4 text-white">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Company{" "}
              <span className="text-fuchsia-400 drop-shadow-md">Location</span>
            </h1>
            <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
              Want to reach us? Here's where our office is located — feel free
              to visit us anytime!
            </p>
          </div>

          {/* Map Component */}
          <Map />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
