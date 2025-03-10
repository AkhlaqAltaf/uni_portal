import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function ResearchFundingReports() {
  // Dummy data for chart
  const fundingData = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D'],
    datasets: [
      {
        label: 'Funding Received (in USD)',
        data: [50000, 75000, 60000, 80000],
        backgroundColor: 'rgba(40, 167, 69, 0.6)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6   bg-[#1d2241]  rounded-lg">
      <header className="bg-[#193344] border-2 border-[#06814f] text-white text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Research Funding and Reports</h1>
      </header>

      <div className="bg-[#193344] border-2 border-[#06814f] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Funding Overview</h2>
        <Bar
          data={fundingData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ResearchFundingReports;
