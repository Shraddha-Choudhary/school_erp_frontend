

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const DashboardPage = () => {
//   const data = [
//     { name: "Total Students", value: 120 },
//     { name: "Boys", value: 70 },
//     { name: "Girls", value: 50 },
//   ];

//   // Gradient color palette for chart
//   const COLORS = ["#9c27b0", "#64b5f6", "#ba68c8"];

//   return (
//     <div className="p-6">
//       {/* Gradient Heading */}
//       <h1
//         className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent"
//       >
//         Dashboard Overview
//       </h1>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         <div className="bg-white p-6 shadow rounded-lg text-center">
//           <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//             Total Users
//           </h3>
//           <p className="text-2xl font-bold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//             120
//           </p>
//         </div>

//         <div className="bg-white p-6 shadow rounded-lg text-center">
//           <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//             New Enquiries
//           </h3>
//           <p className="text-2xl font-bold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//             45
//           </p>
//         </div>

//         <div className="bg-white p-6 shadow rounded-lg text-center">
//           <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//             Tasks Pending
//           </h3>
//           <p className="text-2xl font-bold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
//             12
//           </p>
//         </div>
//       </div>

//       {/* Pie Chart Section */}
//       <div className="bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-bold text-center text-white mb-4">
//           Student Distribution
//         </h2>

//         <div className="flex flex-col items-center justify-center">
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={data}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 dataKey="value"
//                 label
//               >
//                 {data.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>

//           {/* Text Summary */}
//           <div className="mt-4 text-center text-white">
//             <p>Total Students: 120</p>
//             <p>Boys: 70</p>
//             <p>Girls: 50</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const DashboardPage = () => {
  // Pie chart data (student stats)
  const studentData = [
    { name: "Total Students", value: 120 },
    { name: "Boys", value: 70 },
    { name: "Girls", value: 50 },
  ];

  // Line chart data (monthly revenue / total amount)
  const monthlyData = [
    { month: "Jan", amount: 40000 },
    { month: "Feb", amount: 52000 },
    { month: "Mar", amount: 48000 },
    { month: "Apr", amount: 61000 },
    { month: "May", amount: 58000 },
    { month: "Jun", amount: 72000 },
    { month: "Jul", amount: 69000 },
    { month: "Aug", amount: 75000 },
    { month: "Sep", amount: 71000 },
    { month: "Oct", amount: 78000 },
    { month: "Nov", amount: 84000 },
    { month: "Dec", amount: 91000 },
  ];

  const COLORS = ["#9c27b0", "#64b5f6", "#ba68c8"];

  return (
    <div className="p-6">
      {/* Gradient Heading */}
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
        Dashboard Overview
      </h1>

      {/* ===== TOP CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            Total Users
          </h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            120
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            New Enquiries
          </h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            45
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg text-center">
          <h3 className="text-lg font-semibold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            Tasks Pending
          </h3>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent">
            12
          </p>
        </div>
      </div>

      {/* ===== Monthly Amount Graph ===== */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent mb-6">
          Monthly Revenue Overview
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#9c27b0"
              strokeWidth={3}
              dot={{ fill: "#64b5f6", r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ===== Pie Chart Section ===== */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#9c27b0] to-[#64b5f6] bg-clip-text text-transparent mb-6">
          Student Distribution
        </h2>

        <div className="flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height={380}>
            <PieChart>
              <Pie
                data={studentData}
                cx="50%"
                cy="50%"
                outerRadius={130}
                dataKey="value"
                label
              >
                {studentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

          {/* Text Summary */}
          <div className="mt-4 text-center text-gray-700">
            <p>Total Students: 120</p>
            <p>Boys: 70</p>
            <p>Girls: 50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
