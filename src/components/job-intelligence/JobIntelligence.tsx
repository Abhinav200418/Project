import React from 'react';
import Card, { CardContent, CardHeader } from '../common/Card';
import { jobRoleData } from '../../utils/mockData';
import { Briefcase, TrendingUp, DollarSign } from 'lucide-react';

const JobIntelligence: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Job Role Intelligence</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {jobRoleData.map((role, index) => (
          <Card key={index}>
            <CardContent className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{role.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    <DollarSign size={14} className="inline mr-1" />
                    {role.averageSalary.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0
                    })}
                    <span className="text-gray-500"> / year</span>
                  </p>
                </div>
                <div className={`p-2 rounded-lg ${
                  index % 4 === 0 ? 'bg-blue-100 text-blue-600' :
                  index % 4 === 1 ? 'bg-purple-100 text-purple-600' :
                  index % 4 === 2 ? 'bg-amber-100 text-amber-600' :
                  'bg-teal-100 text-teal-600'
                }`}>
                  <Briefcase size={20} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Supply vs Demand</span>
                  <span className={role.demand > role.supply ? 'text-red-500' : 'text-green-500'}>
                    {role.supply}:{role.demand}
                  </span>
                </div>
                <div className="flex h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-2" 
                    style={{ width: `${(role.supply / (role.supply + role.demand)) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-red-500 h-2" 
                    style={{ width: `${(role.demand / (role.supply + role.demand)) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Supply</span>
                  <span>Demand</span>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-2">Top Required Skills</p>
                <div className="flex flex-wrap gap-1">
                  {role.topSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="w-full py-2 text-sm text-blue-600 hover:text-blue-800 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors mt-2">
                View Full Analysis
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Emerging Skills Trend</h3>
          </CardHeader>
          <CardContent className="h-80">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <TrendingUp size={36} className="text-blue-500 mb-4" />
              <p className="text-gray-500 mb-2">
                This space would contain emerging skills trend analysis.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Salary Progression by Experience</h3>
          </CardHeader>
          <CardContent className="h-80">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <p className="text-gray-500 mb-2">
                This space would show salary progression charts by experience level.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobIntelligence;