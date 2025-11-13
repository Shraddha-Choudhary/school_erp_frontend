import React, { useState } from "react";

const Attendance = () => {
  const students = [
    { id: 1, name: "Rohan Sharma", rollNo: "101", class: "10th", section: "A" },
    { id: 2, name: "Priya Verma", rollNo: "102", class: "9th", section: "B" },
    { id: 3, name: "Aman Singh", rollNo: "103", class: "11th", section: "C" },
    { id: 4, name: "Neha Patel", rollNo: "104", class: "10th", section: "A" },
  ];

  const [attendance, setAttendance] = useState({});
  const [filters, setFilters] = useState({
    name: "",
    rollNo: "",
    class: "",
    section: "",
  });

  // Toggle Attendance (simulate thumb punch)
  const toggleAttendance = (id) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Handle search input
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Filter students dynamically
  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      student.rollNo.toLowerCase().includes(filters.rollNo.toLowerCase()) &&
      student.class.toLowerCase().includes(filters.class.toLowerCase()) &&
      student.section.toLowerCase().includes(filters.section.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        📅 Attendance Management
      </h1>

      {/* Filter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Search by Name"
          value={filters.name}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Search by Roll No"
          value={filters.rollNo}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <input
          type="text"
          name="class"
          placeholder="Search by Class"
          value={filters.class}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
        />
        <input
          type="text"
          name="section"
          placeholder="Search by Section"
          value={filters.section}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Roll No</th>
              <th className="py-3 px-6 text-left">Class</th>
              <th className="py-3 px-6 text-left">Section</th>
              <th className="py-3 px-6 text-center">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <tr key={s.id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{s.name}</td>
                  <td className="py-3 px-6">{s.rollNo}</td>
                  <td className="py-3 px-6">{s.class}</td>
                  <td className="py-3 px-6">{s.section}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => toggleAttendance(s.id)}
                      className={`px-4 py-1 rounded-lg font-semibold ${
                        attendance[s.id]
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {attendance[s.id] ? "Present" : "Absent"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-gray-500 italic"
                >
                  No matching students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
