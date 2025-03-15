import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const CGPAChart = () => {
  const data = {
    labels: ["Session 1", "Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7", "Session 8"],
    datasets: [
      {
        label: "CGPA",
        data: [1.94, 2.12, 2.12, 2.66, 2.75, 2.63, 2.44, 2.51, 2.61],
        backgroundColor: "#04C785",
        borderColor: "#048C51",
        borderWidth: 1,
        borderRadius: 6,
        barThickness: 40, // Increases bar width
        categoryPercentage: 0.6, // Adjusts spacing between bars
        barPercentage: 0.9, // Ensures bars take full width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 1.5, // Adjust according to CGPA range
        max: 4.0,
        ticks: {
          stepSize: 0.5,
        },
      },
    },
  };

  return (
    <div className=" flex justify-center items-center bg-[#2C2F48]">
      <div className="rounded-lg">
        <h2 className="text-white text-center text-[2vw] md:text-[2vw] font-semibold mb-4">Session Wise CGPA OUT of 4.0</h2>
        <div className="w-[100%] h-[30vw] md:h-[25vw] lg:h-[20vw] xl:h-[15vw]">
          <Bar className="" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
