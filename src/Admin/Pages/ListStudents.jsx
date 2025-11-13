import React, { useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ListStudents = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      enrollmentNo: "E101",
      name: "Rohan Sharma",
      fatherName: "Rajesh Sharma",
      class: "10th",
      section: "A",
      mobileNo: "9876543210",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      enrollmentNo: "E102",
      name: "Priya Verma",
      fatherName: "Suresh Verma",
      class: "9th",
      section: "B",
      mobileNo: "9123456780",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      enrollmentNo: "E103",
      name: "Aman Singh",
      fatherName: "Ravi Singh",
      class: "11th",
      section: "C",
      mobileNo: "9001234567",
    },
  ]);

  const [search, setSearch] = useState({ name: "", enrollmentNo: "" });

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all students?")) {
      setStudents([]);
    }
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.name.toLowerCase()) &&
      s.enrollmentNo.toLowerCase().includes(search.enrollmentNo.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        📋 Student List
      </h1>

      {/* Search & Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search by Name"
            value={search.name}
            onChange={(e) => setSearch({ ...search, name: e.target.value })}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0] outline-none"
          />
          <input
            type="text"
            placeholder="Search by Enrollment No"
            value={search.enrollmentNo}
            onChange={(e) =>
              setSearch({ ...search, enrollmentNo: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0] outline-none"
          />
        </div>

        <button
          onClick={handleDeleteAll}
          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all shadow"
        >
          🗑️ Delete All
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md border border-gray-300">
        <table className="min-w-full text-sm text-gray-700 border border-gray-300">
          <thead className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Enrollment No
              </th>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Image
              </th>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Name
              </th>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Father Name
              </th>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Class
              </th>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Section
              </th>
              <th className="py-3 px-4 text-left border-r border-gray-300">
                Mobile No
              </th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-gray-300 hover:bg-gray-100 transition-all"
                >
                  <td className="py-3 px-4 border-r border-gray-300">
                    {s.enrollmentNo}
                  </td>
                  <td className="py-3 px-4 border-r border-gray-300">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  </td>
                  <td className="py-3 px-4 border-r border-gray-300 font-medium">
                    {s.name}
                  </td>
                  <td className="py-3 px-4 border-r border-gray-300">
                    {s.fatherName}
                  </td>
                  <td className="py-3 px-4 border-r border-gray-300">
                    {s.class}
                  </td>
                  <td className="py-3 px-4 border-r border-gray-300">
                    {s.section}
                  </td>
                  <td className="py-3 px-4 border-r border-gray-300">
                    {s.mobileNo}
                  </td>
                  <td className="py-3 px-4 flex justify-center space-x-4 text-lg">
                    <button className="text-blue-600 hover:scale-110 transition-all">
                      <FaEye />
                    </button>
                    <button className="text-green-600 hover:scale-110 transition-all">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="text-red-600 hover:scale-110 transition-all"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="py-6 text-center text-gray-500 font-medium"
                >
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListStudents;
