import React, { useState } from "react";

const Attendance = () => {
  const students = [
    { id: 1, name: "Rohan Sharma", class: "10th A" },
    { id: 2, name: "Priya Verma", class: "9th B" },
    { id: 3, name: "Aman Singh", class: "11th C" },
  ];

  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (id) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        📅 Attendance Management
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Class</th>
              <th className="py-3 px-6 text-center">Present / Absent</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">{s.name}</td>
                <td className="py-3 px-6">{s.class}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
