import React from 'react';
import { 
  BarChart2, 
  Users, 
  Globe, 
  TrendingUp, 
  Briefcase,
  Settings,
  LayoutDashboard
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { currentView, setCurrentView } = useApp();
  
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'candidates', label: 'Candidate Analytics', icon: <Users size={20} /> },
    { id: 'market', label: 'Market Mapping', icon: <Globe size={20} /> },
    { id: 'competitors', label: 'Competitor Analysis', icon: <TrendingUp size={20} /> },
    { id: 'jobs', label: 'Job Role Intelligence', icon: <Briefcase size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
  ];
  
  const handleNavigation = (viewId: string) => {
    setCurrentView(viewId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-800 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex items-center h-16 border-b border-slate-700">
          <div className="flex items-center space-x-2">
            <BarChart2 className="text-blue-400" />
            <span className="text-xl font-bold">TalentHuntPro</span>
          </div>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                    currentView === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-slate-400">HR Consultant</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;