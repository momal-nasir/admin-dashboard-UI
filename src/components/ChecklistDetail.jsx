// import React from 'react';

// // Reusable NavItem component
// const NavItem = ({ icon, label, active = false, onClick }) => (
//   <div 
//     onClick={onClick}
//     className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
//   >
//     <span>{icon}</span>
//     <span className="text-sm font-medium">{label}</span>
//   </div>
// );

// const ChecklistDetail = ({ onNavigate, onBack, checklistItem }) => {
//   // Sample detailed checklist data
//   const checklistQuestions = [
//     { question: 'Is the seatbelt working?', answer: 'Yes', status: 'pass' },
//     { question: 'Are the headlights operational?', answer: 'No ❌', status: 'fail' },
//     { question: 'Check the tire pressure?', answer: 'Yes', status: 'pass' },
//     { question: 'Inspect the braking system?', answer: 'Yes', status: 'pass' },
//     { question: 'First aid kit availability?', answer: 'Yes', status: 'pass' },
//     { question: 'Is the seatbelt working?', answer: 'Yes', status: 'pass' },
//     { question: 'Is the seatbelt working?', answer: 'Yes', status: 'pass' },
//   ];

//   // Mock data - in real app, this would come from props or API
//   const detailData = {
//     driverName: 'Ali Raza',
//     date: 'August 6, 2025',
//     shift: 'BOD',
//     status: 'Fault Found'
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="flex">
//         {/* Sidebar */}
//         <div className="w-64 bg-white h-screen shadow-lg fixed">
//           <div className="p-6">
//             <h1 className="text-xl font-bold text-gray-800 mb-8">GreenKeyper</h1>
//             <nav className="space-y-2">
//               <NavItem 
//                 icon="📊" 
//                 label="Dashboard" 
//                 onClick={() => onNavigate('dashboard')}
//               />
//               <NavItem 
//                 icon="👥" 
//                 label="User Management" 
//                 onClick={() => onNavigate('usermanagement')}
//               />
//               <NavItem 
//                 icon="🚗" 
//                 label="Vehicle Management" 
//                 onClick={() => onNavigate('vehiclemanagement')}
//               />
//               <NavItem 
//                 icon="✅" 
//                 label="Checklist Management" 
//                 active={true}
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
//           {/* Header with Back Button */}
//           <div className="flex justify-between items-center mb-8">
//             <div className="flex items-center gap-4">
//               <button 
//                 onClick={onBack}
//                 className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
//               >
//                 <span>←</span> Back
//               </button>
//               <h2 className="text-2xl font-semibold text-gray-800">Checklist Detail</h2>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Welcome back, Admin</span>
//               <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
//             </div>
//           </div>

//           {/* Checklist Info Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-lg shadow">
//               <p className="text-sm text-gray-500 mb-1">Driver Name</p>
//               <p className="text-lg font-semibold text-gray-800">{detailData.driverName}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <p className="text-sm text-gray-500 mb-1">Date</p>
//               <p className="text-lg font-semibold text-gray-800">{detailData.date}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <p className="text-sm text-gray-500 mb-1">Shift</p>
//               <p className="text-lg font-semibold text-gray-800">{detailData.shift}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <p className="text-sm text-gray-500 mb-1">Status</p>
//               <span className="inline-block px-3 py-1 bg-red-100 text-red-800 border border-red-300 rounded-full text-sm font-semibold">
//                 {detailData.status}
//               </span>
//             </div>
//           </div>

//           {/* Questions Table */}
//           <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">Checklist Questions</h3>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Answer</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {checklistQuestions.map((item, index) => (
//                     <tr key={index} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 text-sm text-gray-800">{item.question}</td>
//                       <td className="px-6 py-4">
//                         <span className={`text-sm font-medium ${item.status === 'pass' ? 'text-green-600' : 'text-red-600'}`}>
//                           {item.answer}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Fault Detail Section */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">Fault Detail</h3>
//             </div>
//             <div className="p-6">
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
//                 <textarea 
//                   rows="4"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="Add comments about the fault..."
//                   defaultValue="Headlight malfunction detected on left side. Needs immediate replacement. The driver reported intermittent operation during night shift."
//                 ></textarea>
//               </div>
//               <div className="flex justify-end gap-3">
//                 <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//                   Save Comments
//                 </button>
//                 <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
//                   Export Report
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChecklistDetail;
import React, { useState } from 'react';
import { 
  FiGrid, FiUsers, FiTruck, FiCheckSquare, FiBarChart2, FiSettings, 
  FiHelpCircle, FiX, FiAlertCircle
} from 'react-icons/fi';
import { BiLeaf } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

const ChecklistDetail = ({ onNavigate, onBack, checklistItem }) => {
  // Navigation items
  const navItems = [
    { icon: FiGrid, label: 'Dashboard', page: 'dashboard' },
    { icon: FiUsers, label: 'User Management', page: 'usermanagement' },
    { icon: FiTruck, label: 'Vehicle Management', page: 'vehiclemanagement' },
    { icon: FiCheckSquare, label: 'Checklist Management', active: true, page: 'checklist' },
    { icon: FiBarChart2, label: 'Reports', page: 'reports' },
    { icon: FiSettings, label: 'Settings', page: 'settings' },
  ];

  // Checklist questions data
  const checklistQuestions = [
    { question: 'Is the seatbelt working?', answer: 'Yes', hasError: false },
    { question: 'Are the headlights operational?', answer: 'No', hasError: true },
    { question: 'Check the tire pressure?', answer: 'Yes', hasError: false },
    { question: 'Inspect the breaking system?', answer: 'Yes', hasError: false },
    { question: 'First aid kit availability?', answer: 'Yes', hasError: false },
    { question: 'Is the seatbelt working?', answer: 'Yes', hasError: false },
    { question: 'Is the seatbelt working?', answer: 'Yes', hasError: false },
  ];

  // Detail data from design
  const detailData = {
    driverName: 'Ali Raza',
    date: 'August 6, 2025',
    shift: 'BOD',
    status: 'Fault Found'
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex relative">
      {/* Background Overlay - Blur Effect */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"></div>

      {/* Modal Content - Centered */}
      <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
          
          {/* Modal Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-black">Checklist Detail</h2>
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <MdClose className="text-2xl text-gray-500" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6">
            {/* Summary Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Driver Name */}
              <div>
                <p className="text-sm text-[#6C757D] mb-1">Driver Name</p>
                <p className="text-lg font-semibold text-gray-900">{detailData.driverName}</p>
              </div>
              
              {/* Date */}
              <div>
                <p className="text-sm text-[#6C757D] mb-1">Date</p>
                <p className="text-lg font-semibold text-gray-900">{detailData.date}</p>
              </div>
              
              {/* Shift */}
              <div>
                <p className="text-sm text-[#6C757D] mb-1">Shift</p>
                <p className="text-lg font-semibold text-gray-900">{detailData.shift}</p>
              </div>
              
              {/* Status - Fault Found Pill */}
              <div>
                <p className="text-sm text-[#6C757D] mb-1">Status</p>
                <span className="inline-block px-4 py-2 bg-[#FDECEC] text-[#C0392B] rounded-lg font-medium text-sm">
                  {detailData.status}
                </span>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column - Checklist Questions */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Table Header */}
                <div className="bg-[#F1F3F5] px-6 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <span className="text-sm font-semibold text-gray-700">Question</span>
                    <span className="text-sm font-semibold text-gray-700">Answer</span>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-100">
                  {checklistQuestions.map((item, index) => (
                    <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                      <div className="grid grid-cols-2 gap-4">
                        <span className="text-sm text-gray-800">{item.question}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm ${item.hasError ? 'text-[#C0392B] font-medium' : 'text-gray-700'}`}>
                            {item.answer}
                          </span>
                          {item.hasError && (
                            <FiAlertCircle className="text-[#FF0000] text-lg" title="Fault Found" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Fault Detail */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Fault Detail</h3>
                
                {/* Comments Text Area */}
                <div className="mb-4">
                  <label className="block text-sm text-[#6C757D] mb-2">
                    Comments
                  </label>
                  <textarea
                    rows="12"
                    placeholder="Describe the fault details here..."
                    className="w-full px-4 py-3 border border-[#E9ECEF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB193] focus:border-transparent resize-none"
                    defaultValue="Left headlight bulb is burnt out. The driver reported intermittent operation during night shift. Needs immediate replacement."
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                  <button 
                    onClick={onBack}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-[#1BB193] text-white rounded-lg hover:bg-[#15806b] transition-colors">
                    Save Comments
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Blurred Background */}
      <div className="w-64 bg-[#1BB193] min-h-screen fixed shadow-lg opacity-50">
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
                className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer
                  ${item.active 
                    ? 'bg-[#1BB193]/20 text-white font-medium' 
                    : 'text-white/80'
                  }`}
              >
                <item.icon className="text-xl" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </nav>

          {/* Help Section - Bottom Fixed */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="bg-[#1BB193]/20 rounded-xl p-4 backdrop-blur-sm">
              <FiHelpCircle className="text-white text-xl mb-2" />
              <p className="text-white text-sm font-semibold">Need Help?</p>
              <p className="text-white/80 text-xs mt-1">000-0000</p>
              <p className="text-white/80 text-xs">helpdeask@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistDetail;