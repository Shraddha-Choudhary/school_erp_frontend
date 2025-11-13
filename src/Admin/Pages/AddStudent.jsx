import React, { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({
    enrollmentNo: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    fatherName: "",
    motherName: "",
    occupation: "",
    mobileNo: "",
    email: "",
    address: "",
    permanentAddress: "",
    category: "",
    dob: "",
    bloodGroup: "",
    aadhaar: "",
    className: "",
    section: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Student added successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        Add Student
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE - FORM */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-[#9c27b0]/30">
          {/* Image + Enrollment Row */}
          <div className="flex items-center gap-6 mb-6">
            {/* IMAGE LEFT */}
            <label htmlFor="imageUpload" className="cursor-pointer">
              <img
                src={
                  formData.image
                    ? URL.createObjectURL(formData.image)
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="w-32 h-32 object-cover rounded-lg border-4 border-[#9c27b0]/50"
              />
              <input
                type="file"
                id="imageUpload"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>

            {/* ENROLLMENT NO FIELD */}
            <div className="flex-1">
              <label className="block mb-2 font-semibold text-gray-700">
                Enrollment No
              </label>
              <input
                type="text"
                name="enrollmentNo"
                value={formData.enrollmentNo}
                onChange={handleChange}
                placeholder="Enter enrollment number"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
                required
              />
            </div>
          </div>

          {/* MAIN FORM */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {/* First Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
                required
              />
            </div>

            {/* Middle Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Enter middle name"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Aadhaar */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Aadhaar Card No
              </label>
              <input
                type="number"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                placeholder="Enter Aadhaar number"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Class */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Class
              </label>
              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              >
                <option value="">Select class</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>

            {/* Section */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Section
              </label>
              <select
                name="section"
                value={formData.section}
                onChange={handleChange}
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              >
                <option value="">Select section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </select>
            </div>

            {/* Father's Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Father's Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter father's name"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Mother's Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Mother's Name
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Enter mother's name"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Occupation */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Parent's Occupation
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Enter parent's occupation"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Mobile No */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Mobile No
              </label>
              <input
                type="number"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              >
                <option value="">Select category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>

            {/* DOB */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Blood Group */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Blood Group
              </label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 focus:ring-2 focus:ring-[#9c27b0]"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-semibold text-gray-700">
                Current Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter current address"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 h-20 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Permanent Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-semibold text-gray-700">
                Permanent Address
              </label>
              <textarea
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                placeholder="Enter permanent address"
                className="w-full border border-[#9c27b0]/40 rounded-lg p-2 h-20 focus:ring-2 focus:ring-[#9c27b0]"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white px-8 py-2 rounded-lg font-semibold shadow hover:scale-105 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - LIVE PREVIEW */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#9c27b0]/30 flex flex-col items-center">
          <img
            src={
              formData.image
                ? URL.createObjectURL(formData.image)
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Profile"
            className="w-40 h-40 rounded-lg object-cover border-4 border-[#9c27b0]/50 mb-4"
          />

          <h2 className="text-xl font-semibold text-[#9c27b0] mb-2 text-center">
            {formData.firstName || "First"} {formData.middleName}{" "}
            {formData.lastName || "Name"}
          </h2>

          <div className="text-sm text-gray-600 space-y-1 text-center">
            <p>Enrollment No: {formData.enrollmentNo || "N/A"}</p>
            <p>Gender: {formData.gender || "N/A"}</p>
            <p>Class: {formData.className || "N/A"}</p>
            <p>Section: {formData.section || "N/A"}</p>
            <p>Aadhaar: {formData.aadhaar || "N/A"}</p>
            <p>DOB: {formData.dob || "N/A"}</p>
            <p>Blood Group: {formData.bloodGroup || "N/A"}</p>
            <p>Category: {formData.category || "N/A"}</p>
            <p>Mobile: {formData.mobileNo || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
