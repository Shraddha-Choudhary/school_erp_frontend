import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Otp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#9c27b0] to-[#64b5f6]">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-[90%] max-w-md text-center border border-[#9c27b0]/30">
        {/* Back Arrow */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-[#9c27b0] mb-4"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] mb-2">
          Verify Your OTP
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Enter the 4-digit OTP sent to your registered email or phone number.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3, 4].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border-2 border-transparent rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 shadow-md"
              style={{
                background:
                  "linear-gradient(white, white) padding-box, linear-gradient(to right, #9c27b0, #64b5f6) border-box",
              }}
            />
          ))}
        </div>

        {/* Verify Button */}
        <button className="w-full bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
          Verify OTP
        </button>

        {/* Footer Text */}
        <p className="text-gray-600 text-sm mt-4">
          Didn’t receive the code?{" "}
          <button className="text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] font-semibold hover:underline">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default Otp;
