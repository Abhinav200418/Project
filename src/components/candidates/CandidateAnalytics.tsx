import React from 'react';
import CandidateSearch from './CandidateSearch';
import CandidateFilters from './CandidateFilters';
import CandidateCard from './CandidateCard';
import CandidateForm from './CandidateForm';
import Button from '../common/Button';
import { Plus } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const CandidateAnalytics: React.FC = () => {
  const { 
    filteredCandidates, 
    showAddCandidateForm, 
    setShowAddCandidateForm 
  } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Candidate Analytics</h2>
        <Button 
          variant="primary" 
          leftIcon={<Plus size={18} />}
          onClick={() => setShowAddCandidateForm(true)}
        >
          Add Candidate
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <CandidateFilters />
        </div>
        
        <div className="lg:col-span-3 space-y-6">
          <CandidateSearch />
          
          {filteredCandidates.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
              <p className="text-gray-500">No candidates match your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredCandidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </div>
          )}
        </div>
      </div>
      
      {showAddCandidateForm && <CandidateForm />}
    </div>
  );
};

export default CandidateAnalytics;