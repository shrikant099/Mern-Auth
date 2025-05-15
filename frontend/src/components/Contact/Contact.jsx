import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useName } from "@/context/UserContext";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { name: userName } = useName();
  const navigate = useNavigate();

  // ✅ States for controlled inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !subject || !message) {
      toast.error("Missing Details");
      return;
    }

    if (userName) {
      const formData = new FormData();
      formData.append("access_key", "2d319f4c-0f95-4e5b-a254-364f28f9f6fc");
      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.success) {
          toast.success("✅ Message sent successfully!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          toast.error("❌ Failed to send message!");
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again.");
      }
    } else {
      toast.error("Please Login before Contact !!");
      navigate("/login");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-16 text-white flex items-center justify-center">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold mb-4 text-center">
          Let's <span className="text-sky-600">Talk</span>
        </h1>
        <p className="text-center text-gray-300 mb-12">
          Drop us a message, {userName ? userName : ""} — whether it's feedback, an
          idea, or just a hello 👋
        </p>

        <motion.form
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm text-gray-300">Your Name</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-2">
            <Label className="text-sm text-gray-300">Your Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2 flex flex-col space-y-2">
            <Label className="text-sm text-gray-300">Subject</Label>
            <Input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Let’s build something amazing!"
              className="bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col space-y-2">
            <Label className="text-sm text-gray-300">Message</Label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us everything..."
              className="min-h-[150px] bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="cursor-pointer w-full py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition duration-300"
            >
              🚀 Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>

      {/* ✅ Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
