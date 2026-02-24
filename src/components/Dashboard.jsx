// import React from 'react';

// // Reusable Components
// const NavItem = ({ icon, label, active = false, onClick }) => (
//   <div 
//     onClick={onClick}
//     className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
//   >
//     <span>{icon}</span>
//     <span className="text-sm font-medium">{label}</span>
//   </div>
// );

// const ProgressBar = ({ label, percentage, color }) => (
//   <div>
//     <div className="flex justify-between text-sm mb-1">
//       <span className="text-gray-600">{label}</span>
//       <span className="font-semibold">{percentage}%</span>
//     </div>
//     <div className="w-full bg-gray-200 rounded-full h-2">
//       <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
//     </div>
//   </div>
// );

// const FaultItem = ({ label, value, color }) => (
//   <div className="flex items-center justify-between">
//     <div className="flex items-center space-x-3">
//       <div className={`w-3 h-3 ${color} rounded-full`}></div>
//       <span className="text-sm text-gray-600">{label}</span>
//     </div>
//     <span className="font-semibold">{value}</span>
//   </div>
// );

// // Main Dashboard Component
// const Dashboard = ({ onNavigate }) => {
//   // Sample data for stats
//   const stats = [
//     { label: 'Total Vehicles', value: '120', bgColor: 'bg-blue-500' },
//     { label: 'Total Drivers', value: '15', bgColor: 'bg-green-500' },
//     { label: 'Vehicles with Checklist', value: '75', bgColor: 'bg-purple-500' },
//     { label: 'Submitted Faults', value: '5', bgColor: 'bg-yellow-500' },
//   ];

//   const issues = [
//     { type: 'Break Faults', count: '25', percentage: '26%', color: 'bg-red-500' },
//     { type: 'Break Faults', count: '18', percentage: '18%', color: 'bg-orange-500' },
//     { type: 'Break Faults', count: '15', percentage: '15%', color: 'bg-yellow-500' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Main Layout */}
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-64 bg-white h-screen shadow-lg fixed">
//           <div className="p-6">
//             <h1 className="text-xl font-bold text-gray-800 mb-8">GreenKeyper</h1>
//             <nav className="space-y-2">
//               <NavItem 
//                 icon="📊" 
//                 label="Dashboard" 
//                 active={true} 
//                 onClick={() => onNavigate('dashboard')}
//               />
//               <NavItem 
//                 icon="👥" 
//                 label="User Management" 
//                 onClick={() => onNavigate('usermanagement')}
//               />
//               <NavItem 
//                 icon="✅" 
//                 label="Checklist Management" 
//                 onClick={() => onNavigate('checklist')}
//               />
//               <NavItem 
//                 icon="📈" 
//                 label="Reports" 
//                 onClick={() => onNavigate('reports')}
//               />
//               <NavItem 
//                 icon="⚙️" 
//                 label="Settings" 
//                 onClick={() => onNavigate('settings')}
//               />
//             </nav>
            
//             {/* Help Section */}
//             <div className="absolute bottom-8 left-6">
//               <div className="bg-gray-100 p-4 rounded-lg">
//                 <p className="text-sm font-semibold text-gray-700">Need Help?</p>
//                 <p className="text-xs text-gray-500 mt-1">000-0000</p>
//                 <p className="text-xs text-gray-500">helpdesk@gmail.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="ml-64 flex-1 p-8">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Welcome back, Admin</span>
//               <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="bg-white rounded-lg shadow p-6">
//                 <div className={`w-12 h-12 ${stat.bgColor} rounded-lg mb-4`}></div>
//                 <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
//                 <p className="text-sm text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Sections */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Checklist Completion */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Checklist Completion Rate</h3>
//               <div className="flex items-center justify-center">
//                 <div className="relative w-32 h-32">
//                   <div className="w-32 h-32 rounded-full border-8 border-green-500 border-t-gray-200"></div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-2xl font-bold text-gray-800">72%</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 space-y-2">
//                 <ProgressBar label="Completed" percentage={72} color="bg-green-500" />
//                 <ProgressBar label="Pending" percentage={23} color="bg-yellow-500" />
//               </div>
//             </div>

//             {/* Top Vehicle Issues */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Vehicle Issues</h3>
//               {issues.map((issue, index) => (
//                 <div key={index} className="mb-4">
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-sm text-gray-600">{issue.type}</span>
//                     <span className="text-sm font-semibold">{issue.count} ({issue.percentage})</span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div 
//                       className={`${issue.color} h-2 rounded-full`} 
//                       style={{ width: issue.percentage }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Break Faults */}
//             <div className="bg-white rounded-lg shadow p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">Break Faults</h3>
//               <div className="space-y-4">
//                 <FaultItem label="Break Faults" value={25} color="bg-red-500" />
//                 <FaultItem label="Break Faults" value={18} color="bg-orange-500" />
//                 <FaultItem label="Break Faults" value={15} color="bg-yellow-500" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import { 
  FiGrid, FiUsers, FiTruck, FiCheckSquare, FiBarChart2, FiSettings, 
  FiHelpCircle, FiSquare 
} from 'react-icons/fi';
import { BiLeaf } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Dashboard = ({ onNavigate }) => {
  // Navigation items
  const navItems = [
    { icon: FiGrid, label: 'Dashboard', active: true, page: 'dashboard' },
    { icon: FiUsers, label: 'User Management', page: 'usermanagement' },
    { icon: FiTruck, label: 'Vehicle Management', page: 'vehiclemanagement' },
    { icon: FiCheckSquare, label: 'Checklist Management', page: 'checklist' },
    { icon: FiBarChart2, label: 'Reports', page: 'reports' },
    { icon: FiSettings, label: 'Settings', page: 'settings' },
  ];

  // Stats cards data with exact colors from design
  const stats = [
    { label: 'Total Vehicles', value: '120', bgColor: '#88C9C3', iconColor: '#FFFFFF' },
    { label: 'Total Drivers', value: '15', bgColor: '#DFF2D8', iconColor: '#6B9E5A' },
    { label: 'Submitted Checklist', value: '75', bgColor: '#E0F4F7', iconColor: '#4A90E2' },
    { label: 'Vehicles with Faults', value: '5', bgColor: '#F9F5D7', iconColor: '#B4A03C' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Exact Teal Color #24B091 */}
      <div className="w-64 bg-[#24B091] min-h-screen fixed shadow-lg">
        <div className="p-6">
          {/* Logo with Leaf Icon */}
          <div className="flex items-center space-x-3 mb-8">
            <BiLeaf className="text-white text-2xl" />
            <h1 className="text-white font-bold text-xl tracking-wide">GreenKeyper</h1>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <div
                key={index}
                onClick={() => onNavigate(item.page)}
                className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200
                  ${item.active 
                    ? 'bg-[#1E947A] text-white' 
                    : 'text-white/80 hover:bg-[#1E947A]/50 hover:text-white'
                  }`}
              >
                <item.icon className="text-xl" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </nav>

          {/* Help Section - Bottom Fixed */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="bg-[#1E947A]/30 rounded-xl p-4 backdrop-blur-sm">
              <FiHelpCircle className="text-white text-xl mb-2" />
              <p className="text-white text-sm font-semibold">Need Help?</p>
              <p className="text-white/80 text-xs mt-1">030-0000</p>
              <p className="text-white/80 text-xs">help@keyper.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <FiSquare className="text-gray-400 text-xl" />
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <BsThreeDotsVertical className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Stats Cards - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ backgroundColor: stat.bgColor }}
            >
              <p className="text-gray-700 text-sm font-medium mb-4">{stat.label}</p>
              <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Checklist Completion Rate */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Checklist Completion Rate</h3>
            
            {/* Donut Chart */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                {/* Background Circle (Pending - 26%) - Dark Green #248A6E */}
                <svg className="w-48 h-48 transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#248A6E"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 80}`}
                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.26)}`}
                    className="transition-all duration-1000"
                  />
                  {/* Completed Circle (72%) - Mint Green #69D4A5 */}
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#69D4A5"
                    strokeWidth="16"
                    strokeDasharray={`${2 * Math.PI * 80}`}
                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.72)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                    style={{ transform: 'rotate(93.6deg)', transformOrigin: '96px 96px' }}
                  />
                </svg>
                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-800">72%</span>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#69D4A5] rounded-full"></div>
                <span className="text-sm text-gray-600">Completed 72%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#248A6E] rounded-full"></div>
                <span className="text-sm text-gray-600">Pending 26%</span>
              </div>
            </div>
          </div>

          {/* Top Vehicle Issues */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Top Vehicle Issues</h3>
            
            <div className="space-y-6">
              {/* Break Faults 25 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Break Faults</span>
                  <span className="text-sm font-bold text-gray-800">25</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="bg-[#69D4A5] h-2.5 rounded-full" 
                    style={{ width: '83%' }}
                  ></div>
                </div>
              </div>

              {/* Break Faults 18 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Break Faults</span>
                  <span className="text-sm font-bold text-gray-800">18</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="bg-[#69D4A5] h-2.5 rounded-full" 
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>

              {/* Break Faults 15 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Break Faults</span>
                  <span className="text-sm font-bold text-gray-800">15</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="bg-[#69D4A5] h-2.5 rounded-full" 
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;