// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Students = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const navigate = useNavigate();

//   const handleButtonClick = (id) => {
//     setActiveTab(id);

//     // ✅ navigate according to correct paths
//     if (id === "add") navigate("/admin/students/add");
//     else if (id === "list") navigate("/admin/students/list");
//     else if (id === "view") navigate("/admin/students/view/1"); // demo id
//     else if (id === "edit") navigate("/admin/students/edit/1"); // demo id
//     else if (id === "attendance") navigate("/admin/attendance");
//     else if (id === "fees") navigate("/admin/fees");
//     else if (id === "documents") navigate("/admin/documents");
//     else if (id === "certificates") navigate("/admin/certificates");
//     else if (id === "total") navigate("/admin/students/list");
//     else if (id === "delete") navigate("/admin/students/list");
//   };

//   const buttons = [
//     { id: "add", label: "Add Student" },
//     { id: "list", label: "List Students" },
//     { id: "view", label: "View Profile" },
//     { id: "edit", label: "Edit Student" },
//     { id: "attendance", label: "Attendance" },
//     { id: "fees", label: "Fees" },
//     { id: "documents", label: "Documents" },
//     { id: "certificates", label: "Certificates" },
//     { id: "total", label: "Total Students" },
//     { id: "delete", label: "Delete Student" },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//         Student Management
//       </h1>

//       {/* ===== TOP ACTION BUTTONS ===== */}
//       <div className="flex flex-wrap justify-center gap-8 mb-10">
//         {buttons.map((btn) => (
//           <div key={btn.id} className="flex flex-col items-center">
//             <button
//               onClick={() => handleButtonClick(btn.id)}
//               className={`relative px-6 py-2 font-semibold text-lg transition-all duration-300 
//                 bg-white bg-clip-text text-transparent bg-gradient-to-r from-[#9c27b0] to-[#64b5f6]
//                 hover:scale-105`}
//             >
//               {btn.label}
//             </button>

//             {activeTab === btn.id && (
//               <div className="w-20 h-[3px] mt-1 rounded-full bg-gradient-to-r from-[#9c27b0] to-[#64b5f6]" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Students;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaListAlt,
  FaUserCircle,
  FaEdit,
  FaCalendarCheck,
  FaMoneyBillWave,
  FaFileAlt,
  FaCertificate,
  FaUsers,
  FaTrash,
} from "react-icons/fa";

const Students = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setActiveTab(id);

    // ✅ navigate according to correct paths
    if (id === "add") navigate("/admin/students/add");
    else if (id === "list") navigate("/admin/students/list");
    else if (id === "view") navigate("/admin/students/view/1");
    else if (id === "edit") navigate("/admin/students/edit/1");
    else if (id === "attendance") navigate("/admin/attendance");
    else if (id === "fees") navigate("/admin/fees");
    else if (id === "documents") navigate("/admin/documents");
    else if (id === "certificates") navigate("/admin/certificates");
    else if (id === "total") navigate("/admin/students/list");
    else if (id === "delete") navigate("/admin/students/list");
  };

  const cards = [
    { id: "add", label: "Add Student", icon: <FaUserPlus size={36} /> },
    { id: "list", label: "List Students", icon: <FaListAlt size={36} /> },
    { id: "view", label: "View Profile", icon: <FaUserCircle size={36} /> },
    { id: "edit", label: "Edit Student", icon: <FaEdit size={36} /> },
    { id: "attendance", label: "Attendance", icon: <FaCalendarCheck size={36} /> },
    { id: "fees", label: "Fees", icon: <FaMoneyBillWave size={36} /> },
    { id: "documents", label: "Documents", icon: <FaFileAlt size={36} /> },
    { id: "certificates", label: "Certificates", icon: <FaCertificate size={36} /> },
    { id: "total", label: "Total Students", icon: <FaUsers size={36} /> },
    { id: "delete", label: "Delete Student", icon: <FaTrash size={36} /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        Student Management
      </h1>

      {/* ===== Cards Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`cursor-pointer flex flex-col items-center justify-center p-6 rounded-2xl border-2
              border-transparent bg-white hover:scale-105 transition-transform duration-300
              ${activeTab === card.id
                ? "bg-gradient-to-r from-[#9c27b0]/10 to-[#64b5f6]/10 border-4 border-gradient-to-r from-[#9c27b0] to-[#64b5f6]"
                : "border-gradient-to-r from-[#9c27b0] to-[#64b5f6]"
              }`}
            style={{
              borderImage: "linear-gradient(to right, #9c27b0, #64b5f6) 1",
            }}
          >
            <div className="text-[#9c27b0] mb-3">{card.icon}</div>
            <p className="text-lg font-semibold text-gray-700">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
