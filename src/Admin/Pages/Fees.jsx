


import React, { useState } from "react";
import { FaEdit, FaTrash, FaDownload, FaPlus } from "react-icons/fa";

const Fees = () => {
  const [feesData, setFeesData] = useState([
    {
      id: 1,
      name: "Ankit Sharma",
      class: "10th A",
      total: 30000,
      paid: 20000,
      pending: 10000,
      dueDate: "2025-11-30",
      paymentMode: "Online",
    },
    {
      id: 2,
      name: "Priya Verma",
      class: "9th B",
      total: 28000,
      paid: 28000,
      pending: 0,
      dueDate: "Paid",
      paymentMode: "Cash",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newFee, setNewFee] = useState({
    name: "",
    class: "",
    total: "",
    paid: "",
    pending: "",
    dueDate: "",
    paymentMode: "",
  });

  const handleInput = (e) => {
    setNewFee({ ...newFee, [e.target.name]: e.target.value });
  };

  const handleAddFee = () => {
    if (!newFee.name || !newFee.total) return alert("Please fill all fields");
    setFeesData([
      ...feesData,
      { ...newFee, id: feesData.length + 1, pending: newFee.total - newFee.paid },
    ]);
    setShowForm(false);
    setNewFee({
      name: "",
      class: "",
      total: "",
      paid: "",
      pending: "",
      dueDate: "",
      paymentMode: "",
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        💰 Fees Management
      </h1>

      {/* Add New Fee Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        >
          <FaPlus /> Add New Fee
        </button>
      </div>

      {/* Add Fee Form */}
      {showForm && (
        <div className="border p-4 rounded-xl shadow-md bg-gray-50 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-[#9c27b0]">
            Add Fee Record
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Student Name"
              value={newFee.name}
              onChange={handleInput}
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={newFee.class}
              onChange={handleInput}
              className="border p-2 rounded-md"
            />
            <input
              type="number"
              name="total"
              placeholder="Total Fees"
              value={newFee.total}
              onChange={handleInput}
              className="border p-2 rounded-md"
            />
            <input
              type="number"
              name="paid"
              placeholder="Paid Amount"
              value={newFee.paid}
              onChange={handleInput}
              className="border p-2 rounded-md"
            />
            <input
              type="date"
              name="dueDate"
              value={newFee.dueDate}
              onChange={handleInput}
              className="border p-2 rounded-md"
            />
            <select
              name="paymentMode"
              value={newFee.paymentMode}
              onChange={handleInput}
              className="border p-2 rounded-md"
            >
              <option value="">Select Payment Mode</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
          <button
            onClick={handleAddFee}
            className="mt-4 bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            Save Record
          </button>
        </div>
      )}

      {/* Fees Table */}
      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="w-full border-collapse">
          <thead className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Student Name</th>
              <th className="p-3 text-left">Class</th>
              <th className="p-3 text-left">Total Fees</th>
              <th className="p-3 text-left">Paid</th>
              <th className="p-3 text-left">Pending</th>
              <th className="p-3 text-left">Due Date</th>
              <th className="p-3 text-left">Payment Mode</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feesData.map((fee) => (
              <tr
                key={fee.id}
                className="border-b hover:bg-gray-100 transition-all"
              >
                <td className="p-3">{fee.id}</td>
                <td className="p-3">{fee.name}</td>
                <td className="p-3">{fee.class}</td>
                <td className="p-3">₹{fee.total}</td>
                <td className="p-3 text-green-600">₹{fee.paid}</td>
                <td
                  className={`p-3 ${
                    fee.pending > 0 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  ₹{fee.pending}
                </td>
                <td className="p-3">{fee.dueDate}</td>
                <td className="p-3">{fee.paymentMode}</td>
                <td className="p-3 flex justify-center gap-4">
                  <button className="text-blue-500 hover:scale-110">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:scale-110">
                    <FaTrash />
                  </button>
                  <button className="text-green-500 hover:scale-110">
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;
