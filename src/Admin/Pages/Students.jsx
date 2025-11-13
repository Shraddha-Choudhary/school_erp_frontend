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
  FaIdCard,
  FaUserGraduate,
  FaExchangeAlt,
} from "react-icons/fa";

const Students = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setActiveTab(id);

    if (id === "add") navigate("/admin/students/add");
    else if (id === "list") navigate("/admin/students/list");
    else if (id === "view") navigate("/admin/students/view/1");
    else if (id === "edit") navigate("/admin/students/edit/1");
    else if (id === "attendance") navigate("/admin/attendance");
    else if (id === "fees") navigate("/admin/fees");
    else if (id === "documents") navigate("/admin/documents");
    else if (id === "certificates") navigate("/admin/certificates");
    // else if (id === "idcard") navigate("/admin/IdCard");
    else if (id === "idcard") navigate("/admin/students/IdCard");

    else if (id === "character") navigate("/admin/character-certificate");
    else if (id === "transfer") navigate("/admin/transfer-certificate");
  };

  const cards = [
    { id: "add", label: "Add Student", icon: <FaUserPlus size={38} /> },
    { id: "list", label: "List Students", icon: <FaListAlt size={38} /> },
    { id: "view", label: "View Profile", icon: <FaUserCircle size={38} /> },
    { id: "edit", label: "Edit Student", icon: <FaEdit size={38} /> },
    { id: "attendance", label: "Attendance", icon: <FaCalendarCheck size={38} /> },
    { id: "fees", label: "Fees", icon: <FaMoneyBillWave size={38} /> },
    { id: "documents", label: "Documents", icon: <FaFileAlt size={38} /> },
    { id: "certificates", label: "Certificates", icon: <FaCertificate size={38} /> },
    { id: "idcard", label: "ID Card", icon: <FaIdCard size={38} /> },
    { id: "character", label: "Character Certificate", icon: <FaUserGraduate size={38} /> },
    { id: "transfer", label: "Transfer Certificate", icon: <FaExchangeAlt size={38} /> },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent drop-shadow-md">
        Student Management
      </h1>

      {/* ===== Cards Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`cursor-pointer flex flex-col items-center justify-center p-8 rounded-[10px] border-2 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105
              ${
                activeTab === card.id
                  ? "bg-gradient-to-r from-[#f3e5f5] to-[#e3f2fd] border-[#9c27b0]"
                  : "bg-white border-transparent"
              }`}
            style={{
              borderImage: "linear-gradient(to right, #9c27b0, #64b5f6) 1",
            }}
          >
            <div className="text-[#9c27b0] mb-4 drop-shadow-md">{card.icon}</div>
            <p className="text-lg font-semibold text-gray-700 text-center">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
