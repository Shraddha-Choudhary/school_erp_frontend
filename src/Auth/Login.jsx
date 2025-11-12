import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6]">
      {/* White Box */}
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-[85%] max-w-3xl h-[600px] md:h-[500px] overflow-hidden">
        {/* Left Side - Logo Section */}
        <div className="flex flex-col justify-center items-center bg-white w-full md:w-1/2 p-6 md:p-8">
          <img src={logo} alt="logo" className="w-44 mb-4 drop-shadow-md" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent text-center">
            Welcome To ERP School
          </h2>

          <form className="space-y-5 text-left" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                Email Address
              </label>
              <div className="flex items-center border rounded-md px-3 py-2">
                <FaEnvelope className="text-[#9c27b0] mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email address"
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

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-center flex flex-col gap-1">
            <Link
              to="/OTP"
              className="text-[#64b5f6] text-sm hover:underline"
            >
              Forgot your password..?
            </Link>
            <Link
              to="/Signup"
              className="text-[#64b5f6] text-sm hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
