import React from 'react';
import Card, { CardContent, CardHeader } from '../common/Card';
import { competitorData } from '../../utils/mockData';
import { TrendingUp, Award, Users } from 'lucide-react';

const CompetitorAnalysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Competitor Analysis</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Hiring Comparison</h3>
          </CardHeader>
          <CardContent className="h-80">
            <div className="h-full space-y-6">
              {competitorData.map((competitor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{competitor.name}</span>
                    <span className="text-sm text-gray-500">
                      Hiring Rate: {competitor.hiring}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${competitor.hiring}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Retention & Satisfaction</h3>
          </CardHeader>
          <CardContent className="h-80">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-2">
                  <Users size={20} className="text-purple-500 mr-2" />
                  <h4 className="font-medium">Retention</h4>
                </div>
                {competitorData.map((competitor, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{competitor.name}</span>
                      <span>{competitor.retention}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${competitor.retention}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-2">
                  <Award size={20} className="text-amber-500 mr-2" />
                  <h4 className="font-medium">Satisfaction</h4>
                </div>
                {competitorData.map((competitor, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{competitor.name}</span>
                      <span>{competitor.satisfaction}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-amber-500 h-2 rounded-full"
                        style={{ width: `${competitor.satisfaction}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Salary Benchmarking</h3>
          </CardHeader>
          <CardContent className="h-64">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <TrendingUp size={36} className="text-blue-500 mb-4" />
              <p className="text-gray-500 mb-2">
                This space would contain salary benchmarking charts across competitors.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Benefits Comparison</h3>
          </CardHeader>
          <CardContent className="h-64">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <p className="text-gray-500 mb-2">
                This space would show comparative analysis of benefits packages.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Hiring Velocity</h3>
          </CardHeader>
          <CardContent className="h-64">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <p className="text-gray-500 mb-2">
                This space would display time-to-hire metrics across competitors.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;