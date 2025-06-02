import React from 'react';
import Card, { CardContent, CardHeader } from '../common/Card';
import { BarChart, LineChart, PieChart } from './ChartComponents';
import { 
  metrics, 
  talentTrendData, 
  skillDistributionData, 
  competitorData 
} from '../../utils/mockData';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart2, 
  Users, 
  Briefcase, 
  Globe 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-md">
            <CardContent className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{metric.label}</p>
                <p className="text-2xl font-bold mt-1">{metric.value.toLocaleString()}</p>
                <div className={`flex items-center mt-1 text-sm ${
                  metric.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change > 0 ? (
                    <TrendingUp size={16} className="mr-1" />
                  ) : (
                    <TrendingDown size={16} className="mr-1" />
                  )}
                  <span>{Math.abs(metric.change)}% {metric.change > 0 ? 'increase' : 'decrease'}</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${
                index === 0 ? 'bg-blue-100 text-blue-600' :
                index === 1 ? 'bg-purple-100 text-purple-600' :
                index === 2 ? 'bg-amber-100 text-amber-600' :
                'bg-teal-100 text-teal-600'
              }`}>
                {index === 0 ? <Users size={24} /> :
                 index === 1 ? <Briefcase size={24} /> :
                 index === 2 ? <BarChart2 size={24} /> :
                 <Globe size={24} />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-800">Talent Availability Trend</h2>
            <p className="text-sm text-gray-500">Last 6 months</p>
          </CardHeader>
          <CardContent className="h-80">
            <LineChart data={talentTrendData} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-800">Skill Distribution</h2>
            <p className="text-sm text-gray-500">Top demanded skills</p>
          </CardHeader>
          <CardContent className="h-80">
            <PieChart data={skillDistributionData} />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-800">Competitor Analysis</h2>
            <p className="text-sm text-gray-500">Hiring metrics comparison</p>
          </CardHeader>
          <CardContent className="h-80">
            <BarChart data={competitorData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;