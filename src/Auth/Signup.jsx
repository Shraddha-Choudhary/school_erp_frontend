import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6]">
      {/* White Card */}
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-[85%] max-w-5xl h-[500px] overflow-hidden">
        
        {/* Left Side - Logo */}
        <div className="flex flex-col justify-center items-center bg-white w-full md:w-[30%] p-6">
          <img src={logo} alt="logo" className="w-40 md:w-44 mb-4 drop-shadow-md" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-[60%] bg-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            Create Your Account
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Full Name
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaUser className="text-[#9c27b0] mr-2" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Mobile No */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Mobile No
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaPhone className="text-[#9c27b0] mr-2" />
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Email ID
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaEnvelope className="text-[#9c27b0] mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Password
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaLock className="text-[#9c27b0] mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#9c27b0] focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="mt-5 text-center">
            <Link to="/" className="text-[#64b5f6] text-sm hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
