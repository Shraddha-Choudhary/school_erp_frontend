import React from "react";

const EnquiriesPage = () => (
  <div className="p-6">
    <h1
      className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent"
    >
      Enquiries Management
    </h1>

    {/* Table Container */}
    <div className="rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full border-collapse rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead>
          <tr className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white">
            <th className="py-3 px-4 text-left border border-transparent">No.</th>
            <th className="py-3 px-4 text-left border border-transparent">Name</th>
            <th className="py-3 px-4 text-left border border-transparent">Email</th>
            <th className="py-3 px-4 text-left border border-transparent">Mobile No</th>
            <th className="py-3 px-4 text-left border border-transparent">Message</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4 bg-white font-semibold text-gray-700 border border-[#9c27b0]/50">
              1
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              Anjali Sharma
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              anjali.sharma@gmail.com
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              9876543210
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              Need info about admission process
            </td>
          </tr>

          <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4 bg-white font-semibold text-gray-700 border border-[#9c27b0]/50">
              2
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              Raj Verma
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              rajverma@gmail.com
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              9123456789
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              Want to schedule a school tour
            </td>
          </tr>

          <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4 bg-white font-semibold text-gray-700 border border-[#9c27b0]/50">
              3
            </td>
            <td className="py-3 px-4 bg-white font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] border border-[#9c27b0]/50">
              Priya Singh
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              priyasingh@gmail.com
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              9812345678
            </td>
            <td className="py-3 px-4 bg-white font-medium text-gray-600 border border-[#9c27b0]/50">
              Requesting details about hostel facilities
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default EnquiriesPage;
