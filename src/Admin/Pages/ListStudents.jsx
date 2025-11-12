import React from "react";

const ListStudents = () => {
  const students = [
    { id: 1, name: "Rohan Sharma", class: "10th A", rollNo: "101" },
    { id: 2, name: "Priya Verma", class: "9th B", rollNo: "202" },
    { id: 3, name: "Aman Singh", class: "11th C", rollNo: "303" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        📋 List of Students
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Roll No</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Class</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">{s.rollNo}</td>
                <td className="py-3 px-6">{s.name}</td>
                <td className="py-3 px-6">{s.class}</td>
                <td className="py-3 px-6 space-x-3">
                  <button className="text-blue-600 hover:underline">View</button>
                  <button className="text-green-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudents;
