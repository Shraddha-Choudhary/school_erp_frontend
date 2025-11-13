// import React, { useState } from "react";

// const IdCard = () => {
//   const [student, setStudent] = useState({
//     schoolName: "Sunrise Public School",
//     name: "",
//     fatherName: "",
//     rollNo: "",
//     class: "",
//     address: "",
//     image: null,
//   });

//   const [preview, setPreview] = useState(null);
//   const [showId, setShowId] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent({ ...student, [name]: value });
//   };

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setStudent({ ...student, image: file });
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // Generate ID Card
//   const generateId = (e) => {
//     e.preventDefault();
//     setShowId(true);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
//       <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//         🪪 Student ID Card Generator
//       </h1>

//       {/* Form Section */}
//       {!showId && (
//         <form
//           onSubmit={generateId}
//           className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md"
//         >
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 School Name
//               </label>
//               <input
//                 type="text"
//                 name="schoolName"
//                 value={student.schoolName}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={student.name}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Father’s Name
//               </label>
//               <input
//                 type="text"
//                 name="fatherName"
//                 value={student.fatherName}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Roll No</label>
//               <input
//                 type="text"
//                 name="rollNo"
//                 value={student.rollNo}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Class</label>
//               <input
//                 type="text"
//                 name="class"
//                 value={student.class}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Address</label>
//               <textarea
//                 name="address"
//                 value={student.address}
//                 onChange={handleChange}
//                 className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
//                 required
//               ></textarea>
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Upload Photo
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="w-full"
//                 required
//               />
//               {preview && (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="w-24 h-24 object-cover mt-2 rounded-full mx-auto border-2 border-purple-400"
//                 />
//               )}
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white font-semibold py-2 rounded-md mt-4"
//             >
//               Generate ID Card
//             </button>
//           </div>
//         </form>
//       )}

//       {/* ID Card Section */}
//       {showId && (
//         <div className="bg-white shadow-2xl rounded-xl mt-8 p-6 w-[320px] text-center border-2 border-purple-500 relative">
//           <div className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white py-2 rounded-t-lg font-bold text-lg">
//             {student.schoolName}
//           </div>

//           <div className="mt-4">
//             {preview ? (
//               <img
//                 src={preview}
//                 alt="Student"
//                 className="w-28 h-28 object-cover rounded-full border-4 border-purple-400 mx-auto"
//               />
//             ) : (
//               <div className="w-28 h-28 bg-gray-200 rounded-full mx-auto" />
//             )}
//           </div>

//           <div className="mt-4 text-gray-700 space-y-1 text-left px-6">
//             <p>
//               <strong>Name:</strong> {student.name}
//             </p>
//             <p>
//               <strong>Father’s Name:</strong> {student.fatherName}
//             </p>
//             <p>
//               <strong>Roll No:</strong> {student.rollNo}
//             </p>
//             <p>
//               <strong>Class:</strong> {student.class}
//             </p>
//             <p>
//               <strong>Address:</strong> {student.address}
//             </p>
//           </div>

//           <button
//             onClick={() => setShowId(false)}
//             className="absolute bottom-2 right-2 text-xs text-blue-500 underline"
//           >
//             Edit Info
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default IdCard;

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const IdCard = () => {
  const [student, setStudent] = useState({
    schoolName: "Sunrise Public School",
    name: "",
    fatherName: "",
    rollNo: "",
    class: "",
    address: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [showId, setShowId] = useState(false);
  const idCardRef = useRef(); // 🔹 Reference for ID card div

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudent({ ...student, image: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Generate ID Card
  const generateId = (e) => {
    e.preventDefault();
    setShowId(true);
  };

  // 🔹 Download as PDF
  const handleDownload = async () => {
    const element = idCardRef.current;
    const canvas = await html2canvas(element, { scale: 3 });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(data, "PNG", 10, 10, pdfWidth - 20, pdfHeight);
    pdf.save(`${student.name || "Student"}_ID_Card.pdf`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        🪪 Student ID Card Generator
      </h1>

      {/* Form Section */}
      {!showId && (
        <form
          onSubmit={generateId}
          className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                School Name
              </label>
              <input
                type="text"
                name="schoolName"
                value={student.schoolName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Father’s Name
              </label>
              <input
                type="text"
                name="fatherName"
                value={student.fatherName}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Roll No</label>
              <input
                type="text"
                name="rollNo"
                value={student.rollNo}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Class</label>
              <input
                type="text"
                name="class"
                value={student.class}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <textarea
                name="address"
                value={student.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Photo
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full"
                required
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 object-cover mt-2 rounded-full mx-auto border-2 border-purple-400"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white font-semibold py-2 rounded-md mt-4"
            >
              Generate ID Card
            </button>
          </div>
        </form>
      )}

      {/* ID Card Section */}
      {showId && (
        <div className="flex flex-col items-center mt-8">
          <div
            ref={idCardRef}
            className="bg-white shadow-2xl rounded-xl p-6 w-[320px] text-center border-2 border-purple-500 relative"
          >
            <div className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white py-2 rounded-t-lg font-bold text-lg">
              {student.schoolName}
            </div>

            <div className="mt-4">
              {preview ? (
                <img
                  src={preview}
                  alt="Student"
                  className="w-28 h-28 object-cover rounded-full border-4 border-purple-400 mx-auto"
                />
              ) : (
                <div className="w-28 h-28 bg-gray-200 rounded-full mx-auto" />
              )}
            </div>

            <div className="mt-4 text-gray-700 space-y-1 text-left px-6">
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Father’s Name:</strong> {student.fatherName}
              </p>
              <p>
                <strong>Roll No:</strong> {student.rollNo}
              </p>
              <p>
                <strong>Class:</strong> {student.class}
              </p>
              <p>
                <strong>Address:</strong> {student.address}
              </p>
            </div>

            <button
              onClick={() => setShowId(false)}
              className="absolute bottom-2 right-2 text-xs text-blue-500 underline"
            >
              Edit Info
            </button>
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="mt-4 bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] text-white font-semibold py-2 px-6 rounded-md"
          >
            Download ID Card
          </button>
        </div>
      )}
    </div>
  );
};

export default IdCard;
