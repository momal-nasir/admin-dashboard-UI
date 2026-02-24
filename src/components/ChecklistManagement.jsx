// import React, { useState } from 'react';

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

// const ChecklistManagement = ({ onNavigate, onViewDetail }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('All');
//   const [selectedDate, setSelectedDate] = useState('');

//   // Sample checklist data
//   const checklistData = [
//     { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
//     { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Fault Found' },
//     { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
//     { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
//     { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
//     { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
//   ];

//   // Filter options
//   const statusOptions = ['All', 'Passed', 'Fault Found', 'Pending'];

//   const getStatusBadgeColor = (status) => {
//     switch(status) {
//       case 'Passed':
//         return 'bg-green-100 text-green-800 border border-green-300';
//       case 'Fault Found':
//         return 'bg-red-100 text-red-800 border border-red-300';
//       case 'Pending':
//         return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
//       default:
//         return 'bg-gray-100 text-gray-800 border border-gray-300';
//     }
//   };

//   // Filter data based on search and filters
//   const filteredData = checklistData.filter(item => {
//     const matchesSearch = item.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
//     return matchesSearch && matchesStatus;
//   });

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
//           {/* Header */}
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-semibold text-gray-800">Checklist Report</h2>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Welcome back, Admin</span>
//               <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
//             </div>
//           </div>

//           {/* Search and Filter Section */}
//           <div className="bg-white p-6 rounded-lg shadow mb-6">
//             <div className="flex flex-wrap items-center gap-4">
//               {/* Search */}
//               <div className="flex-1 min-w-[200px]">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search by driver or vehicle..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
//                 </div>
//               </div>

//               {/* Status Filter */}
//               <div className="w-40">
//                 <select
//                   value={filterStatus}
//                   onChange={(e) => setFilterStatus(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//                 >
//                   {statusOptions.map(option => (
//                     <option key={option} value={option}>{option}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Date Filter */}
//               <div>
//                 <input
//                   type="date"
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Filter Button */}
//               <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
//                 Apply Filters
//               </button>
//             </div>
//           </div>

//           {/* Checklist Table */}
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {filteredData.map((item, index) => (
//                     <tr key={index} className="hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.driverName}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.vehicle}</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.shift}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-3 py-1 text-xs rounded-full ${getStatusBadgeColor(item.status)}`}>
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         <button 
//                           onClick={() => onViewDetail(item)}
//                           className="text-blue-600 hover:text-blue-800 mr-3 font-medium"
//                         >
//                           View Details
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200">
//               <div className="text-sm text-gray-700">
//                 Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredData.length}</span> of{' '}
//                 <span className="font-medium">{checklistData.length}</span> results
//               </div>
//               <div className="flex gap-2">
//                 <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">Previous</button>
//                 <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">1</button>
//                 <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">2</button>
//                 <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">3</button>
//                 <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">Next</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChecklistManagement;
import React, { useState } from 'react';
import { 
  FiGrid, FiUsers, FiTruck, FiCheckSquare, FiBarChart2, FiSettings, 
  FiHelpCircle, FiSearch, FiCalendar, FiChevronDown, FiEye,
  FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight
} from 'react-icons/fi';
import { BiLeaf } from 'react-icons/bi';

const ChecklistManagement = ({ onNavigate, onViewDetail }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Navigation items
  const navItems = [
    { icon: FiGrid, label: 'Dashboard', page: 'dashboard' },
    { icon: FiUsers, label: 'User Management', page: 'usermanagement' },
    { icon: FiTruck, label: 'Vehicle Management', page: 'vehiclemanagement' },
    { icon: FiCheckSquare, label: 'Checklist Management', active: true, page: 'checklist' },
    { icon: FiBarChart2, label: 'Reports', page: 'reports' },
    { icon: FiSettings, label: 'Settings', page: 'settings' },
  ];

  // Checklist data from design
  const checklistData = [
    { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
    { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Fault Found' },
    { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
    { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
    { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
    { driverName: 'Ahsan Khan', vehicle: 'LMN-1234', shift: 'BOD', status: 'Passed' },
  ];

  // Filter options
  const filterOptions = ['All', 'Passed', 'Fault Found'];

  // Filter data based on search and filters
  const filteredData = checklistData.filter(item => {
    const matchesSearch = item.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.vehicle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Get status badge styling based on design
  const getStatusBadge = (status) => {
    if (status === 'Passed') {
      return {
        bg: 'bg-[#E6F7F1]',
        text: 'text-[#1BB193]',
        label: 'Passed'
      };
    } else if (status === 'Fault Found') {
      return {
        bg: 'bg-[#FDECEC]',
        text: 'text-[#C0392B]',
        label: 'Fault Found'
      };
    }
    return {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      label: status
    };
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex relative">
      {/* Large Navigation Arrows */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-10">
        <FiChevronsLeft className="text-6xl text-gray-300 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
      </div>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
        <FiChevronsRight className="text-6xl text-gray-300 opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
      </div>

      {/* Sidebar - Primary Brand Color #1BB193 */}
      <div className="w-64 bg-[#1BB193] min-h-screen fixed shadow-lg">
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
                    ? 'bg-[#1BB193]/20 text-white font-medium' 
                    : 'text-white/80 hover:bg-[#1BB193]/20 hover:text-white'
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

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        {/* Header - Bold Black Text */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black">Checklist Report</h2>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1 min-w-[250px]">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6C757D] text-lg" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB193] focus:border-transparent"
                />
              </div>
            </div>

            {/* Dropdown Filter - "All" */}
            <div className="w-40">
              <div className="relative">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB193] appearance-none bg-white text-[#6C757D]"
                >
                  {filterOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C757D]" />
              </div>
            </div>

            {/* Date Picker with Calendar Icon */}
            <div className="w-40">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BB193] text-[#6C757D]"
                  onFocus={(e) => e.target.type = 'date'}
                  onBlur={(e) => e.target.type = 'text'}
                />
                <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#6C757D]" />
              </div>
            </div>
          </div>
        </div>

        {/* Checklist Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Table Header - Secondary Text #6C757D */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-black">Checklist Table</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#F8F9FA]">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Driver Name</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Vehicle</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Shift</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-[#6C757D] uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((item, index) => {
                  const statusBadge = getStatusBadge(item.status);
                  return (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.driverName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.vehicle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.shift}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs rounded-full ${statusBadge.bg} ${statusBadge.text} font-medium`}>
                          {statusBadge.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => onViewDetail(item)}
                          className="text-[#1BB193] hover:text-[#15806b] transition-colors flex items-center space-x-1"
                        >
                          <FiEye className="text-lg" />
                          <span className="text-sm font-medium">View</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-6 py-4 flex items-center justify-center border-t border-gray-200">
            <div className="flex items-center space-x-2">
              {/* Previous Arrow */}
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#6C757D] hover:bg-gray-100 transition-colors">
                <FiChevronLeft className="text-xl" />
              </button>
              
              {/* Page 1 - Active Teal #1BB193 */}
              <button className="w-10 h-10 rounded-full bg-[#1BB193] text-white flex items-center justify-center font-medium hover:bg-[#15806b] transition-colors">
                1
              </button>
              
              {/* Page 2 */}
              <button className="w-10 h-10 rounded-full text-[#6C757D] flex items-center justify-center font-medium hover:bg-gray-100 transition-colors">
                2
              </button>
              
              {/* Page 3 */}
              <button className="w-10 h-10 rounded-full text-[#6C757D] flex items-center justify-center font-medium hover:bg-gray-100 transition-colors">
                3
              </button>
              
              {/* Next Arrow */}
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-[#6C757D] hover:bg-gray-100 transition-colors">
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-[#6C757D]">
          Showing {filteredData.length} of {checklistData.length} entries
        </div>
      </div>
    </div>
  );
};

export default ChecklistManagement;