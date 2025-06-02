import React from 'react';
import Card, { CardContent, CardHeader } from '../common/Card';
import { mapData } from '../../utils/mockData';
import { Globe } from 'lucide-react';

const MarketMapping: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Market Mapping</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Global Talent Distribution</h3>
          </CardHeader>
          <CardContent className="h-96 flex items-center justify-center">
            <div className="text-center p-8 flex flex-col items-center">
              <Globe size={64} className="text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
              <p className="text-gray-500 mb-4">
                This space would contain an interactive global map showing talent distribution.
              </p>
              <p className="text-sm text-gray-400">
                Map visualization would be implemented with a dedicated mapping library.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Regional Insights</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mapData.map((region, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{region.region}</span>
                    <span className="text-sm text-gray-500">
                      Gap: {region.demand - region.candidates > 0 ? '+' : ''}
                      {region.demand - region.candidates}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          Supply: {region.candidates}
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block text-purple-600">
                          Demand: {region.demand}
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                      <div
                        style={{ width: `${(region.candidates / Math.max(region.candidates, region.demand)) * 100}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Salary Trends</h3>
          </CardHeader>
          <CardContent className="h-64">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <p className="text-gray-500 mb-2">
                This space would display salary trend charts by region.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Talent Mobility</h3>
          </CardHeader>
          <CardContent className="h-64">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <p className="text-gray-500 mb-2">
                This space would show talent flow between regions.
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-800">Remote Work Trends</h3>
          </CardHeader>
          <CardContent className="h-64">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <p className="text-gray-500 mb-2">
                This space would display remote work adoption data.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketMapping;