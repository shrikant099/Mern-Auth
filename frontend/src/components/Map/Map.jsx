import React from "react";
import { motion } from "motion/react";

const Map = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-fuchsia-400">Visit Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We are always happy to meet in person. Drop by at our office or
            schedule a quick visit. Here's where you can find us:
          </p>
          <ul className="space-y-3 text-gray-400 text-base">
            <li>📍 120 Nirman Nagar Lane No. 7, Jaipur, India</li>
            <li>📞 +91 987****3210</li>
            <li>📧 contact@yourcompany.com</li>
            <li>🕒 Mon – Fri: 10:00 AM – 6:00 PM</li>
          </ul>
        </motion.div>

        {/* Right Google Map */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-xl">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.05320895495!2d75.62574683476568!3d26.885115145593463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1747226341258!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Map;
