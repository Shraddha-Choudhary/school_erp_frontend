import React from "react";

const UsersPage = () => (
  <div className="p-6">
    <h1
      className="text-3xl  mb-8 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent"
    >
      User Management
    </h1>

    {/* Table Container */}
    <div className="rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full border-collapse rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead>
          <tr className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white">
            <th className="py-3 px-4 text-left border border-transparent">No.</th>
            <th className="py-3 px-4 text-left border border-transparent">Full Name</th>
            <th className="py-3 px-4 text-left border border-transparent">Mobile No</th>
            <th className="py-3 px-4 text-left border border-transparent">Email ID</th>
            <th className="py-3 px-4 text-left border border-transparent">Role</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4 bg-white font-semibold text-gray-700 border border-[#9c27b0]/50">1</td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              Shraddha
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              9876543210
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              shraddha@gmail.com
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 border border-[#9c27b0]/50">
              Admin
            </td>
          </tr>

          <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4 bg-white font-semibold text-gray-700 border border-[#9c27b0]/50">2</td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              Ravi
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              9123456789
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              ravi@gmail.com
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 border border-[#9c27b0]/50">
              Teacher
            </td>
          </tr>

          <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4 bg-white font-semibold text-gray-700 border border-[#9c27b0]/50">3</td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              Ananya
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              9990011223
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              ananya@gmail.com
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 border border-[#9c27b0]/50">
              User
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default UsersPage;
