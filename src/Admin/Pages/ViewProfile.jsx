import React from "react";

const ViewProfile = () => {
  const student = {
    name: "Rohan Sharma",
    class: "10th A",
    rollNo: "101",
    dob: "2008-05-14",
    bloodGroup: "B+",
    address: "Indore, MP",
    mobile: "9876543210",
    fatherName: "Rajesh Sharma",
    motherName: "Anita Sharma",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        👤 Student Profile
      </h1>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-[#9c27b0]"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-[#9c27b0] mb-2">
              {student.name}
            </h2>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Roll No:</strong> {student.rollNo}</p>
            <p><strong>DOB:</strong> {student.dob}</p>
            <p><strong>Blood Group:</strong> {student.bloodGroup}</p>
            <p><strong>Address:</strong> {student.address}</p>
            <p><strong>Mobile:</strong> {student.mobile}</p>
            <p><strong>Father's Name:</strong> {student.fatherName}</p>
            <p><strong>Mother's Name:</strong> {student.motherName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
