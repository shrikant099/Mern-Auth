import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { delay, motion } from "motion/react";
import { useName } from "@/context/UserContext";
const SignUp = () => {
  const { setName, setToken } = useName(); // use context setter

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://mern-auth-vowh.onrender.com/api/v1/user/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.data.success) {
        Cookies.set("token", response.data.token);
        Cookies.set("userId", response.data.data.name);

        // set name in context
        setName(response.data.data.name);
        setToken(response.data.token);

        toast.success("✅ Registration Successful!", {
          position: "top-center",
          autoClose: 2000,
        });

        //navigate user after login and signup
        navigate("/");
      } else {
        toast.error(response.data.message || "Something went wrong", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "❌ Server Error", {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-100 flex items-center justify-center px-4"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already registered?{" "}
          <span className="text-indigo-600 hover:underline cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
      {/* ToastContainer to show toasts */}
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
      />{" "}
    </motion.div>
  );
};

export default SignUp;
