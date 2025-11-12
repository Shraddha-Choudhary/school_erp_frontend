import React from "react";

const DashboardContent = () => {
  return (
    <div className="p-6 mt-16">
      <h2 className="text-2xl font-bold mb-4">Welcome Back, Admin 👋</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold">New Enquiries</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">35</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold">Active Tasks</h3>
          <p className="text-3xl font-bold text-yellow-600 mt-2">8</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
