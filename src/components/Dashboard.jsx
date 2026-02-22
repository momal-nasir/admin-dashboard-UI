// import React from 'react';

// const Dashboard = () => {
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
//             // In Dashboard.jsx, update the NavItem usage in the sidebar:
// <nav className="space-y-2">
//   <NavItem 
//     icon="📊" 
//     label="Dashboard" 
//     active={true} 
//     onClick={() => onNavigate('dashboard')}
//   />
//   <NavItem 
//     icon="👥" 
//     label="User Management" 
//     onClick={() => onNavigate('usermanagement')}
//   />
//   <NavItem 
//     icon="✅" 
//     label="Checklist Management" 
//     onClick={() => onNavigate('checklist')}
//   />
//   <NavItem 
//     icon="📈" 
//     label="Reports" 
//     onClick={() => onNavigate('reports')}
//   />
//   <NavItem 
//     icon="⚙️" 
//     label="Settings" 
//     onClick={() => onNavigate('settings')}
//   />
// </nav>
            
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

// // Reusable Components
// const NavItem = ({ icon, label, active = false }) => (
//   <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
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

// export default Dashboard;
import React from 'react';

// Reusable Components
const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
  >
    <span>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const ProgressBar = ({ label, percentage, color }) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const FaultItem = ({ label, value, color }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className={`w-3 h-3 ${color} rounded-full`}></div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
    <span className="font-semibold">{value}</span>
  </div>
);

// Main Dashboard Component
const Dashboard = ({ onNavigate }) => {
  // Sample data for stats
  const stats = [
    { label: 'Total Vehicles', value: '120', bgColor: 'bg-blue-500' },
    { label: 'Total Drivers', value: '15', bgColor: 'bg-green-500' },
    { label: 'Vehicles with Checklist', value: '75', bgColor: 'bg-purple-500' },
    { label: 'Submitted Faults', value: '5', bgColor: 'bg-yellow-500' },
  ];

  const issues = [
    { type: 'Break Faults', count: '25', percentage: '26%', color: 'bg-red-500' },
    { type: 'Break Faults', count: '18', percentage: '18%', color: 'bg-orange-500' },
    { type: 'Break Faults', count: '15', percentage: '15%', color: 'bg-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg fixed">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-8">GreenKeyper</h1>
            <nav className="space-y-2">
              <NavItem 
                icon="📊" 
                label="Dashboard" 
                active={true} 
                onClick={() => onNavigate('dashboard')}
              />
              <NavItem 
                icon="👥" 
                label="User Management" 
                onClick={() => onNavigate('usermanagement')}
              />
              <NavItem 
                icon="✅" 
                label="Checklist Management" 
                onClick={() => onNavigate('checklist')}
              />
              <NavItem 
                icon="📈" 
                label="Reports" 
                onClick={() => onNavigate('reports')}
              />
              <NavItem 
                icon="⚙️" 
                label="Settings" 
                onClick={() => onNavigate('settings')}
              />
            </nav>
            
            {/* Help Section */}
            <div className="absolute bottom-8 left-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700">Need Help?</p>
                <p className="text-xs text-gray-500 mt-1">000-0000</p>
                <p className="text-xs text-gray-500">helpdesk@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Admin</span>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg mb-4`}></div>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Checklist Completion */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Checklist Completion Rate</h3>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="w-32 h-32 rounded-full border-8 border-green-500 border-t-gray-200"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">72%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <ProgressBar label="Completed" percentage={72} color="bg-green-500" />
                <ProgressBar label="Pending" percentage={23} color="bg-yellow-500" />
              </div>
            </div>

            {/* Top Vehicle Issues */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Vehicle Issues</h3>
              {issues.map((issue, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">{issue.type}</span>
                    <span className="text-sm font-semibold">{issue.count} ({issue.percentage})</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${issue.color} h-2 rounded-full`} 
                      style={{ width: issue.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Break Faults */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Break Faults</h3>
              <div className="space-y-4">
                <FaultItem label="Break Faults" value={25} color="bg-red-500" />
                <FaultItem label="Break Faults" value={18} color="bg-orange-500" />
                <FaultItem label="Break Faults" value={15} color="bg-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;