import React from 'react';
import { Candidate } from '../../types';
import { MapPin, Star, Calendar, DollarSign } from 'lucide-react';
import Card, { CardContent } from '../common/Card';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const formatSalary = (salary: number) => {
    if (salary >= 1000000) {
      return `$${(salary / 1000000).toFixed(1)}M`;
    } else if (salary >= 1000) {
      return `$${(salary / 1000).toFixed(0)}K`;
    }
    return `$${salary}`;
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <img
              src={candidate.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(candidate.name)}&background=random`}
              alt={candidate.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
            <p className="text-sm text-gray-600">{candidate.role}</p>
            <div className="flex items-center mt-1 text-xs text-gray-500">
              <MapPin size={12} className="mr-1" />
              <span>{candidate.location}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center text-sm">
            <Star size={14} className="mr-1.5 text-amber-500" />
            <span className="font-medium">{candidate.rating}</span>
            <span className="text-gray-500 ml-1">rating</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar size={14} className="mr-1.5 text-blue-500" />
            <span className="font-medium">{candidate.experience}</span>
            <span className="text-gray-500 ml-1">years</span>
          </div>
          <div className="flex items-center text-sm col-span-2">
            <DollarSign size={14} className="mr-1.5 text-green-500" />
            <span className="font-medium">{formatSalary(candidate.salary)}</span>
            <span className="text-gray-500 ml-1">/ year</span>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-gray-500 mb-2">Top Skills</p>
          <div className="flex flex-wrap gap-1">
            {candidate.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {candidate.skills.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                +{candidate.skills.length - 3}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${
            candidate.availability === 'Immediate' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {candidate.availability}
          </span>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View Profile
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CandidateCard;