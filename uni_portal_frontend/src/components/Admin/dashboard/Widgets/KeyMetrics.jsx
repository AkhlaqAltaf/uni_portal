import React, { useState } from 'react';
import { FaUsers, FaDollarSign, FaChalkboardTeacher, FaUniversity, FaFlask } from 'react-icons/fa';

const KeyMetrics = () => {
  // Example data for key metrics
  const [metrics] = useState({
    activeStudents: 2500,
    totalFaculty: 150,
    revenue: 5000000,
    expenses: 4000000,
    overallRating: 4.5,
    researchFunding: 1200000,
  });

  // Calculate the net income
  const netIncome = metrics.revenue - metrics.expenses;

  return (
    <div className="p-6 space-y-6  bg-[#1d2241] rounded-lg">
      <h1 className="text-3xl font-bold text-center text-white">Key Metrics</h1>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#164147] border-2 border-[#077f4f] shadow-md rounded-lg p-6 text-center">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-white">Active Students</h3>
          <p className="text-2xl font-bold text-white">{metrics.activeStudents}</p>
        </div>

        <div className="bg-[#164147] border-2 border-[#077f4f] shadow-md rounded-lg p-6 text-center">
          <FaChalkboardTeacher className="text-4xl text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-white">Total Faculty</h3>
          <p className="text-2xl font-bold text-white">{metrics.totalFaculty}</p>
        </div>

        <div className="bg-[#164147] border-2 border-[#077f4f] shadow-md rounded-lg p-6 text-center">
          <FaDollarSign className="text-4xl text-yellow-600 mb-4" />
          <h3 className="text-lg font-semibold text-white">Net Income</h3>
          <p className="text-2xl font-bold text-white">${netIncome.toLocaleString()}</p>
        </div>

        <div className="bg-[#164147] border-2 border-[#077f4f] shadow-md rounded-lg p-6 text-center">
          <FaUniversity className="text-4xl text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-white">University Rating</h3>
          <p className="text-2xl font-bold text-white">{metrics.overallRating} / 5</p>
        </div>

        <div className="bg-[#164147] border-2 border-[#077f4f] shadow-md rounded-lg p-6 text-center">
          <FaFlask className="text-4xl text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold text-white">Research Funding</h3>
          <p className="text-2xl font-bold text-white">${metrics.researchFunding.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
