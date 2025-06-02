import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from '../dashboard/Dashboard';
import CandidateAnalytics from '../candidates/CandidateAnalytics';
import MarketMapping from '../market-mapping/MarketMapping';
import CompetitorAnalysis from '../competitor-analysis/CompetitorAnalysis';
import JobIntelligence from '../job-intelligence/JobIntelligence';
import { useApp } from '../../context/AppContext';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentView } = useApp();
  
  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'candidates':
        return <CandidateAnalytics />;
      case 'market':
        return <MarketMapping />;
      case 'competitors':
        return <CompetitorAnalysis />;
      case 'jobs':
        return <JobIntelligence />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;