import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  Candidate, 
  Filter, 
  Notification 
} from '../types';
import { 
  candidates as initialCandidates, 
  candidateFilters as initialFilters,
  notifications as initialNotifications
} from '../utils/mockData';

interface AppContextType {
  candidates: Candidate[];
  addCandidate: (candidate: Omit<Candidate, 'id'>) => void;
  filters: Filter[];
  updateFilter: (name: string, selected: string[]) => void;
  clearFilters: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredCandidates: Candidate[];
  notifications: Notification[];
  markNotificationAsRead: (id: string) => void;
  showAddCandidateForm: boolean;
  setShowAddCandidateForm: (show: boolean) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);
  const [filters, setFilters] = useState<Filter[]>(initialFilters);
  const [searchTerm, setSearchTerm] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [showAddCandidateForm, setShowAddCandidateForm] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  const addCandidate = (candidate: Omit<Candidate, 'id'>) => {
    const newCandidate = {
      ...candidate,
      id: Math.random().toString(36).substr(2, 9)
    };
    setCandidates([newCandidate, ...candidates]);
  };

  const updateFilter = (name: string, selected: string[]) => {
    setFilters(
      filters.map(filter => 
        filter.name === name ? { ...filter, selected } : filter
      )
    );
  };

  const clearFilters = () => {
    setFilters(filters.map(filter => ({ ...filter, selected: [] })));
  };

  const filteredCandidates = candidates.filter(candidate => {
    // Search term filtering
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesName = candidate.name.toLowerCase().includes(searchLower);
      const matchesRole = candidate.role.toLowerCase().includes(searchLower);
      const matchesSkills = candidate.skills.some(skill => 
        skill.toLowerCase().includes(searchLower)
      );
      
      if (!(matchesName || matchesRole || matchesSkills)) {
        return false;
      }
    }
    
    // Filters filtering
    return filters.every(filter => {
      if (filter.selected.length === 0) return true;
      
      switch (filter.name) {
        case 'Role':
          return filter.selected.some(role => 
            candidate.role.includes(role)
          );
        case 'Skills':
          return filter.selected.some(skill => 
            candidate.skills.includes(skill)
          );
        case 'Experience':
          const expRange = filter.selected[0];
          if (!expRange) return true;
          
          if (expRange === '0-2 years') {
            return candidate.experience >= 0 && candidate.experience <= 2;
          } else if (expRange === '3-5 years') {
            return candidate.experience >= 3 && candidate.experience <= 5;
          } else if (expRange === '6-10 years') {
            return candidate.experience >= 6 && candidate.experience <= 10;
          } else if (expRange === '10+ years') {
            return candidate.experience > 10;
          }
          return true;
        case 'Availability':
          return filter.selected.includes(candidate.availability);
        case 'Location':
          return filter.selected.some(location => 
            candidate.location.includes(location)
          );
        default:
          return true;
      }
    });
  });

  const markNotificationAsRead = (id: string) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <AppContext.Provider value={{
      candidates,
      addCandidate,
      filters,
      updateFilter,
      clearFilters,
      searchTerm,
      setSearchTerm,
      filteredCandidates,
      notifications,
      markNotificationAsRead,
      showAddCandidateForm,
      setShowAddCandidateForm,
      currentView,
      setCurrentView
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};