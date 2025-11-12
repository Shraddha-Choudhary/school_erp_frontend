import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaEnvelope,
  FaCalendarCheck,
  FaMoneyBill,
  FaChartBar,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 font-bold border-b border-white/30 transition ${
      isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
    }`;

  return (
    <div
      className={`fixed top-0 left-0 h-full text-white transition-all duration-300 z-40 bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] transform ${
        isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/30">
        {isOpen && <h1 className="text-xl font-bold">Admin</h1>}
        <button onClick={toggleSidebar} className="text-white text-2xl font-bold">
          ☰
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="mt-6 space-y-2">
        {/* <NavLink to="/admin" end className={linkClass}>
          <FaHome />
          {isOpen && <span>Dashboard</span>}
        </NavLink> */}
        <NavLink to="/admin/users" className={linkClass}>
          <FaUsers />
          {isOpen && <span>Users</span>}
        </NavLink>
        <NavLink to="/admin/enquiries" className={linkClass}>
          <FaEnvelope />
          {isOpen && <span>Enquiries</span>}
        </NavLink>
        <NavLink to="/admin/attendance" className={linkClass}>
          <FaCalendarCheck />
          {isOpen && <span>Attendance</span>}
        </NavLink>
        <NavLink to="/admin/fees" className={linkClass}>
          <FaMoneyBill />
          {isOpen && <span>Fees</span>}
        </NavLink>
        <NavLink to="/admin/reports" className={linkClass}>
          <FaChartBar />
          {isOpen && <span>Reports</span>}
        </NavLink>
        {/* <NavLink to="/admin/students" className={linkClass}>
          <FaUserGraduate />
          {isOpen && <span>Students</span>}
        </NavLink> */}
        <NavLink to="/admin/teacher" className={linkClass}>
          <FaChalkboardTeacher />
          {isOpen && <span>Teacher</span>}
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;
