// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Dashboard from './components/dashboard'
// import UserManagement from './components/UserManagement';
// import React, { useState } from 'react'
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import ChecklistManagement from './components/ChecklistManagement';
import ChecklistDetail from './components/ChecklistDetail';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedChecklistItem, setSelectedChecklistItem] = useState(null);

  // Handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  // Function to handle navigation
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedChecklistItem(null);
  };

  // Function to view checklist details
  const handleViewDetail = (item) => {
    setSelectedChecklistItem(item);
    setCurrentPage('checklist-detail');
  };

  // Function to go back to checklist management
  const handleBackToList = () => {
    setCurrentPage('checklist');
    setSelectedChecklistItem(null);
  };

  // If not authenticated, show login page
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Render the appropriate component based on current page
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'usermanagement':
        return <UserManagement onNavigate={handleNavigate} onLogout={handleLogout} />;
      case 'checklist':
        return <ChecklistManagement 
                onNavigate={handleNavigate} 
                onViewDetail={handleViewDetail}
                onLogout={handleLogout}
               />;
      case 'checklist-detail':
        return <ChecklistDetail 
                onNavigate={handleNavigate}
                onBack={handleBackToList}
                checklistItem={selectedChecklistItem}
                onLogout={handleLogout}
               />;
      default:
        return <Dashboard onNavigate={handleNavigate} onLogout={handleLogout} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;