import React from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Card, { CardContent, CardHeader, CardFooter } from '../common/Card';
import Button from '../common/Button';

const CandidateFilters: React.FC = () => {
  const { filters, updateFilter, clearFilters } = useApp();
  
  const handleFilterChange = (filterName: string, option: string) => {
    const filter = filters.find(f => f.name === filterName);
    if (!filter) return;
    
    const newSelected = filter.selected.includes(option)
      ? filter.selected.filter(item => item !== option)
      : [...filter.selected, option];
    
    updateFilter(filterName, newSelected);
  };
  
  const hasActiveFilters = filters.some(filter => filter.selected.length > 0);
  
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter size={18} className="text-gray-500" />
          <h3 className="font-medium text-gray-800">Filters</h3>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {filters.map((filter) => (
          <div key={filter.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-700">{filter.name}</h4>
              {filter.selected.length > 0 && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                  {filter.selected.length}
                </span>
              )}
            </div>
            
            <div className="space-y-2">
              {filter.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filter.selected.includes(option)}
                    onChange={() => handleFilterChange(filter.name, option)}
                    className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4 transition"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
      
      {hasActiveFilters && (
        <CardFooter>
          <Button 
            variant="outline" 
            className="w-full" 
            leftIcon={<X size={14} />}
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CandidateFilters;