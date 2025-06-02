import React from 'react';
import { ChartData, CompetitorData } from '../../types';

// Simple Line Chart component
export const LineChart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  const chartHeight = 240;
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex items-end">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * chartHeight;
          
          return (
            <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
              <div className="relative group">
                <div
                  className="w-12 bg-blue-500 rounded-t-md transition-all duration-500 ease-in-out group-hover:bg-blue-600"
                  style={{ height: `${height}px` }}
                ></div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.value.toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-2">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Simple Bar Chart component
export const BarChart: React.FC<{ data: CompetitorData[] }> = ({ data }) => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between mb-4">
        <div className="text-sm font-medium">Company</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-sm mr-1"></div>
            <span className="text-xs">Hiring Rate</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-sm mr-1"></div>
            <span className="text-xs">Retention</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded-sm mr-1"></div>
            <span className="text-xs">Satisfaction</span>
          </div>
        </div>
      </div>
      
      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: `${item.hiring}%` }}
              ></div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${item.retention}%` }}
              ></div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-amber-500 h-2.5 rounded-full"
                style={{ width: `${item.satisfaction}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Simple Pie Chart component
export const PieChart: React.FC<{ data: ChartData[] }> = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  
  // Colors for the pie slices
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];
  
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 100 100\" className="w-full h-full">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (percentage / 100) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;
            
            // Convert angles to radians for calculation
            const startRadians = (startAngle - 90) * (Math.PI / 180);
            const endRadians = (endAngle - 90) * (Math.PI / 180);
            
            const x1 = 50 + 40 * Math.cos(startRadians);
            const y1 = 50 + 40 * Math.sin(startRadians);
            const x2 = 50 + 40 * Math.cos(endRadians);
            const y2 = 50 + 40 * Math.sin(endRadians);
            
            // Flag for large arc (0 for small, 1 for large)
            const largeArcFlag = angle > 180 ? 1 : 0;
            
            // Generate path for the slice
            const path = `
              M 50 50
              L ${x1} ${y1}
              A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
              Z
            `;
            
            return (
              <path
                key={index}
                d={path}
                fill={colors[index % colors.length]}
                stroke="#fff"
                strokeWidth="1"
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-3xl font-bold">{total}</span>
          <span className="text-sm text-gray-500">Total</span>
        </div>
      </div>
      
      <div className="ml-8 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className="w-3 h-3 rounded-sm mr-2"
              style={{ backgroundColor: colors[index % colors.length] }}
            ></div>
            <span className="text-sm">{item.name}</span>
            <span className="text-sm font-medium ml-2">
              {((item.value / total) * 100).toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};