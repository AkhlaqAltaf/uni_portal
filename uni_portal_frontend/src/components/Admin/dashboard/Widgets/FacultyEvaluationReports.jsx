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

function FacultyEvaluationReports() {
  // Dummy data for chart
  const performanceRatings = {
    labels: ['Teaching Skills', 'Subject Expertise', 'Student Engagement', 'Research Contributions', 'Timeliness'],
    datasets: [
      {
        label: 'Average Rating',
        data: [4.5, 4.2, 4.7, 4.1, 4.8],
        backgroundColor: 'rgba(0, 123, 255, 0.6)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6  bg-[#1d2241] rounded-lg">
      <header className="bg-[#193344] border-2 border-[#06814f] text-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Faculty Evaluation Reports</h1>
      </header>

      <div className="bg-[#193344] border-2 border-[#06814f] text-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Performance Ratings</h2>
        <Bar
          data={performanceRatings}
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

export default FacultyEvaluationReports;
