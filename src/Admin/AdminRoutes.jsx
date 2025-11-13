import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

// ✅ Import all pages
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import EnquiriesPage from "./pages/EnquiriesPage";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Reports from "./pages/Reports";
import Students from "./pages/Students";
import Teacher from "./pages/Teacher";
import ListStudents from "./Pages/ListStudents";
import EditStudent from "./Pages/EditStudent";
import ViewProfile from "./Pages/ViewProfile";
import AddStudent from "./Pages/AddStudent";
import IdCard from "./Pages/IdCard";


const AdminRoutes = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <AdminSidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Navbar */}
        <AdminNavbar toggleSidebar={toggleSidebar} />

        {/* Page Routes */}
        <main className="mt-16 p-6">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<DashboardPage />} />

            {/* Students Management */}
            <Route path="students" element={<Students />} />
            <Route path="students/add" element={<AddStudent/>} />
            <Route path="students/list" element={<ListStudents/>} />
            <Route path="students/edit/:id" element={<EditStudent />} />
            <Route path="students/view/:id" element={<ViewProfile />} />
             <Route path="students/IdCard" element={<IdCard />} />


            {/* Teachers & Attendance */}
            <Route path="teacher" element={<Teacher />} />
            <Route path="attendance" element={<Attendance />} />

            {/* Fees & Reports */}
            <Route path="fees" element={<Fees />} />
            <Route path="reports" element={<Reports />} />

            {/* Other Pages */}
            <Route path="users" element={<UsersPage />} />
            <Route path="enquiries" element={<EnquiriesPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoutes;
