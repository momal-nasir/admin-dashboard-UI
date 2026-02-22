import React, { useState } from 'react';

// Reusable NavItem component
const NavItem = ({ icon, label, active = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
  >
    <span>{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const UserManagement = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample user data
  const users = [
    { name: 'Ahsan Khan', id: 'D101', contact: '0000000000', email: 'ABC@gmail.com', role: 'Admin', vehicle: 'Car' },
    { name: 'Ali Rehman', id: 'A999', contact: '0000000000', email: 'ABC@gmail.com', role: 'Mechanic', vehicle: 'Truck' },
    { name: 'Fahad', id: 'F6373', contact: '0000000000', email: 'ABC@gmail.com', role: 'Driver', vehicle: 'Van' },
    { name: 'Zaeem Ali', id: 'T8283', contact: '0000000000', email: 'ABC@gmail.com', role: 'Admin', vehicle: 'Van' },
    { name: 'Ahsan Khan', id: 'D101', contact: '0000000000', email: 'ABC@gmail.com', role: 'Admin', vehicle: 'Car' },
    { name: 'Ali Rehman', id: 'A999', contact: '0000000000', email: 'ABC@gmail.com', role: 'Mechanic', vehicle: 'Truck' },
    { name: 'Fahad', id: 'F6373', contact: '0000000000', email: 'ABC@gmail.com', role: 'Driver', vehicle: 'Van' },
    { name: 'Zaeem Ali', id: 'T8283', contact: '0000000000', email: 'ABC@gmail.com', role: 'Admin', vehicle: 'Van' },
  ];

  // Filter users based on search
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get unique roles for filter badges
  const roles = ['All', 'Admin', 'Driver', 'Mechanic'];
  const [selectedRole, setSelectedRole] = useState('All');

  const getRoleBadgeColor = (role) => {
    switch(role) {
      case 'Admin': return 'bg-purple-100 text-purple-800';
      case 'Driver': return 'bg-green-100 text-green-800';
      case 'Mechanic': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg fixed">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-8">GreenKeyper</h1>
            <nav className="space-y-2">
              <NavItem 
                icon="📊" 
                label="Dashboard" 
                onClick={() => onNavigate('dashboard')}
              />
              <NavItem 
                icon="👥" 
                label="User Management" 
                active={true}
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
            <h2 className="text-2xl font-semibold text-gray-800">User Management</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome back, Admin</span>
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search users by name, ID, email, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            
            {/* Role Filters */}
            <div className="flex gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRole === role 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Add User Button */}
          <div className="mb-4 flex justify-end">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
              <span>➕</span> Add User
            </button>
          </div>

          {/* Users Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers
                    .filter(user => selectedRole === 'All' || user.role === selectedRole)
                    .map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.contact}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${getRoleBadgeColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.vehicle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Table Footer with Pagination */}
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredUsers.length}</span> of{' '}
                <span className="font-medium">{users.length}</span> results
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">Previous</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;