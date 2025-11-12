import React, { useState } from "react";

const EditStudent = () => {
  const [form, setForm] = useState({
    name: "Rohan Sharma",
    class: "10th A",
    mobile: "9876543210",
    address: "Indore, MP",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student details updated successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        ✏️ Edit Student Details
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <label className="block mb-3">
          <span className="font-semibold text-[#9c27b0]">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        <label className="block mb-3">
          <span className="font-semibold text-[#9c27b0]">Class</span>
          <input
            type="text"
            name="class"
            value={form.class}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        <label className="block mb-3">
          <span className="font-semibold text-[#9c27b0]">Mobile No</span>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          />
        </label>

        <label className="block mb-4">
          <span className="font-semibold text-[#9c27b0]">Address</span>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded-md mt-1"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full py-2 mt-3 bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white rounded-lg font-semibold"
        >
          Update Details
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
