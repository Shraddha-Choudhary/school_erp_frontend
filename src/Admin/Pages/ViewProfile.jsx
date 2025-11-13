// import React from "react";

// const ViewProfile = () => {
//   const student = {
//     name: "Rohan Sharma",
//     class: "10th A",
//     rollNo: "101",
//     dob: "2008-05-14",
//     bloodGroup: "B+",
//     address: "Indore, MP",
//     mobile: "9876543210",
//     fatherName: "Rajesh Sharma",
//     motherName: "Anita Sharma",
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//         👤 Student Profile
//       </h1>

//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//             alt="profile"
//             className="w-32 h-32 rounded-full border-4 border-[#9c27b0]"
//           />
//           <div className="flex-1">
//             <h2 className="text-xl font-semibold text-[#9c27b0] mb-2">
//               {student.name}
//             </h2>
//             <p><strong>Class:</strong> {student.class}</p>
//             <p><strong>Roll No:</strong> {student.rollNo}</p>
//             <p><strong>DOB:</strong> {student.dob}</p>
//             <p><strong>Blood Group:</strong> {student.bloodGroup}</p>
//             <p><strong>Address:</strong> {student.address}</p>
//             <p><strong>Mobile:</strong> {student.mobile}</p>
//             <p><strong>Father's Name:</strong> {student.fatherName}</p>
//             <p><strong>Mother's Name:</strong> {student.motherName}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewProfile;
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ViewProfile = () => {
  const [searchFields, setSearchFields] = useState({
    enrollment: "",
    name: "",
    fatherName: "",
    mobile: "",
  });
  const [showProfile, setShowProfile] = useState(false);

  const handleInputChange = (e) => {
    setSearchFields({ ...searchFields, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // demo purpose
    if (
      searchFields.enrollment ||
      searchFields.name ||
      searchFields.fatherName ||
      searchFields.mobile
    ) {
      setShowProfile(true);
    } else {
      alert("Please enter at least one search field!");
    }
  };

  const student = {
    enrollmentNo: "101",
    firstName: "Rohan",
    middleName: "Kumar",
    lastName: "Sharma",
    gender: "Male",
    aadhaar: "1234-5678-9123",
    class: "10th",
    section: "A",
    fatherName: "Rajesh Sharma",
    motherName: "Anita Sharma",
    occupation: "Business",
    mobile: "9876543210",
    email: "rohan@gmail.com",
    category: "General",
    dob: "2008-05-14",
    bloodGroup: "B+",
    currentAddress: "Indore, MP",
    permanentAddress: "Indore, MP",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        🔍 View Student Profile
      </h1>

      {/* Search Bar Section */}
      <form
        onSubmit={handleSearch}
        className="max-w-5xl mx-auto bg-white shadow-md rounded-xl border p-6 mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Enrollment No */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Enrollment No
            </label>
            <input
              type="text"
              name="enrollment"
              value={searchFields.enrollment}
              onChange={handleInputChange}
              placeholder="Enter Enrollment No"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#9c27b0]"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={searchFields.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#9c27b0]"
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Father’s Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={searchFields.fatherName}
              onChange={handleInputChange}
              placeholder="Enter Father’s Name"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#9c27b0]"
            />
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile No
            </label>
            <input
              type="text"
              name="mobile"
              value={searchFields.mobile}
              onChange={handleInputChange}
              placeholder="Enter Mobile No"
              className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#9c27b0]"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white px-8 py-2 rounded-lg flex items-center gap-2 font-semibold hover:opacity-90 transition"
          >
            <FaSearch /> Search
          </button>
        </div>
      </form>

      {/* Profile Section */}
      {showProfile && (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 border-b pb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Student"
              className="w-32 h-32 rounded-full border-4 border-[#9c27b0]"
            />
            <div>
              <h2 className="text-2xl font-bold text-[#9c27b0]">
                {student.firstName} {student.lastName}
              </h2>
              <p className="text-gray-600">
                Enrollment No: <strong>{student.enrollmentNo}</strong>
              </p>
              <p className="text-gray-600">
                Class: {student.class} | Section: {student.section}
              </p>
            </div>
          </div>

          {/* Read-only Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(student).map(([key, value]) => (
              <div
                key={key}
                className={`${
                  key === "currentAddress" || key === "permanentAddress"
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <label className="block text-gray-700 font-medium mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                {key.includes("Address") ? (
                  <textarea
                    value={value}
                    readOnly
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                  />
                ) : (
                  <input
                    type="text"
                    value={value}
                    readOnly
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                  />
                )}
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewProfile;
