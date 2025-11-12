
import React, { useState } from "react";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaMapMarkedAlt,
  FaUserCog,
  FaSignOutAlt,
  FaIdBadge,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const gradientText =
    "bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent";

  return (
    <nav className="flex justify-between items-center bg-white shadow px-6 py-3 fixed top-0 left-0 right-0 z-30">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl focus:outline-none text-[#9c27b0] hover:text-[#64b5f6] transition"
      >
        ☰
      </button>

      {/* Center Menu Links */}
      <div className="hidden md:flex items-center justify-center flex-1 gap-8 font-medium">
        <Link
          to="/admin"
          className={`flex items-center gap-2 hover:opacity-80 transition ${gradientText}`}
        >
          <FaTachometerAlt /> <span>Dashboard</span>
        </Link>

        <Link
          to="/admin/students"
          className={`flex items-center gap-2 hover:opacity-80 transition ${gradientText}`}
        >
          <FaUserGraduate /> <span>Student</span>
        </Link>

        <Link
          to="/admin/library"
          className={`flex items-center gap-2 hover:opacity-80 transition ${gradientText}`}
        >
          <FaBook /> <span>Library</span>
        </Link>

        <Link
          to="/admin/tracking"
          className={`flex items-center gap-2 hover:opacity-80 transition ${gradientText}`}
        >
          <FaMapMarkedAlt /> <span>Tracking</span>
        </Link>
      </div>

      {/* Profile Dropdown */}
      <div className="relative hidden md:block">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center space-x-2"
        >
          {/* Admin Profile Image */}
          <img
            src="https://i.pravatar.cc/40" // demo image (you can replace with your admin profile image)
            alt="Admin"
            className="w-8 h-8 rounded-full border-2 border-[#9c27b0]"
          />
          <span
            className={`font-medium ${gradientText}`}
          >
            Admin
          </span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 border border-white bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white rounded-md shadow-lg py-2">
            <Link
              to="/admin/profile"
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 transition"
            >
              <FaIdBadge /> Profile
            </Link>
            <Link
              to="/admin/settings"
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 transition"
            >
              <FaCogs /> Settings
            </Link>
            <Link
              to="/logout"
              className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 transition text-white"
            >
              <FaSignOutAlt /> Logout
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
