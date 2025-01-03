import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';  // Import necessary styles

const FacultyPerformance = () => {
  // Sample performance data
  const performanceData = {
    teaching: 75,    // Percentage for Teaching performance
    research: 85,    // Percentage for Research performance
    feedback: 90,    // Percentage for Student Feedback
    overall: 80,     // Overall Performance
  };

  // New state for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change for search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-100 rounded-lg  min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Faculty Performance Overview</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search by Faculty Name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* You can add logic here to filter faculty based on the searchQuery if needed */}
        {/* Displaying the performance metrics for the selected faculty (sample data in this case) */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Teaching Performance */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Teaching Performance</h2>
            <div className="w-32 h-32">
              <CircularProgressbar
                value={performanceData.teaching}
                text={`${performanceData.teaching}%`}
                strokeWidth={10}
                styles={{
                  path: { stroke: '#4caf50' },
                  text: { fill: '#4caf50', fontSize: '18px' },
                }}
              />
            </div>
          </div>

          {/* Research Performance */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Research Performance</h2>
            <div className="w-32 h-32">
              <CircularProgressbar
                value={performanceData.research}
                text={`${performanceData.research}%`}
                strokeWidth={10}
                styles={{
                  path: { stroke: '#2196f3' },
                  text: { fill: '#2196f3', fontSize: '18px' },
                }}
              />
            </div>
          </div>

          {/* Student Feedback Performance */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Student Feedback</h2>
            <div className="w-32 h-32">
              <CircularProgressbar
                value={performanceData.feedback}
                text={`${performanceData.feedback}%`}
                strokeWidth={10}
                styles={{
                  path: { stroke: '#ff9800' },
                  text: { fill: '#ff9800', fontSize: '18px' },
                }}
              />
            </div>
          </div>

          {/* Overall Performance */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Overall Performance</h2>
            <div className="w-32 h-32">
              <CircularProgressbar
                value={performanceData.overall}
                text={`${performanceData.overall}%`}
                strokeWidth={10}
                styles={{
                  path: { stroke: '#9c27b0' },
                  text: { fill: '#9c27b0', fontSize: '18px' },
                }}
              />
            </div>
          </div>
        </div>

        {/* Overall Performance Percentage */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Total Performance</h2>
          <div className="mt-4 w-48 h-48 mx-auto">
            <CircularProgressbar
              value={performanceData.overall}
              text={`${performanceData.overall}%`}
              strokeWidth={10}
              styles={{
                path: { stroke: '#673ab7' },
                text: { fill: '#673ab7', fontSize: '24px' },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPerformance;
