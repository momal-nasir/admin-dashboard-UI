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

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedChecklistItem, setSelectedChecklistItem] = useState(null);

  // Function to handle navigation
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedChecklistItem(null); // Clear selected item when navigating away
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

  // Render the appropriate component based on current page
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'usermanagement':
        return <UserManagement onNavigate={handleNavigate} />;
      case 'checklist':
        return <ChecklistManagement 
                onNavigate={handleNavigate} 
                onViewDetail={handleViewDetail}
               />;
      case 'checklist-detail':
        return <ChecklistDetail 
                onNavigate={handleNavigate}
                onBack={handleBackToList}
                checklistItem={selectedChecklistItem}
               />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;