import { useState } from "react";

const AttendanceComponent = () => {
  const attendanceData = {
    present: 20,
    absent: 5,
    halfday: 3,
    totalDays: 28,
  };

  const presentPercentage =
    (attendanceData.present / attendanceData.totalDays) * 100;
  const absentPercentage =
    (attendanceData.absent / attendanceData.totalDays) * 100;
  const halfdayPercentage =
    (attendanceData.halfday / attendanceData.totalDays) * 100;

  const categories = [
    { label: "Present", value: presentPercentage, color: "#4CAF50" },
    { label: "Absent", value: absentPercentage, color: "#F44336" },
    { label: "Half Day", value: halfdayPercentage, color: "#2196F3" },
  ];

  const calculateOffset = (index) => {
    return categories
      .slice(0, index)
      .reduce((total, category) => total + category.value, 0);
  };

  const [selectedOption, setSelectedOption] = useState("This Week");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg relative">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Attendance</h2>
        <div className="relative">
          <button
            className="flex items-center px-3 py-1 text-sm border rounded-md"
            onClick={toggleDropdown}
          >
            {selectedOption}
            <span className="ml-2">&#9660;</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-1 bg-white border rounded-md shadow-lg w-40 z-[1]">
              {["This Week", "Last Week", "Last Month"].map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Total Working Days */}
      <p className="text-sm text-gray-500 mb-4">
        <i className="mr-2">&#128197;</i>No of total working days{" "}
        <span className="font-semibold">{attendanceData.totalDays} Days</span>
      </p>

      {/* Unified Circular Progress Bar */}
      <div className="flex justify-center mb-4">
        <div className="relative w-40 h-40">
          <svg
            className="absolute inset-0"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {categories.map((category, index) => (
              <circle
                key={index}
                r="15.915"
                cx="18"
                cy="18"
                fill="transparent"
                stroke={category.color}
                strokeWidth="3"
                strokeDasharray={`${category.value} ${100 - category.value}`}
                strokeDashoffset={-calculateOffset(index)}
                style={{
                  cursor: "pointer",
                  transition: "stroke-dashoffset 0.3s ease",
                }}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-semibold text-green-500">
              {Math.round(presentPercentage)}%
            </p>
            <p className="text-sm font-semibold text-red-500">
              {Math.round(absentPercentage)}%
            </p>
            <p className="text-sm font-semibold text-blue-500">
              {Math.round(halfdayPercentage)}%
            </p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="text-sm text-center text-gray-500 mb-4">
        {categories.map((category, index) => (
          <span key={index} className="mr-4">
            <span
              className="inline-block w-3 h-3 rounded-full mr-1"
              style={{ backgroundColor: category.color }}
            ></span>
            {category.label}
          </span>
        ))}
      </div>

      {/* Last 7 Days Section */}
      <div className="border rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-2">Last 7 Days</p>
        <div className="grid grid-cols-7 gap-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <div
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${
                day === "F"
                  ? "bg-red-500"
                  : day === "S"
                  ? "bg-gray-300"
                  : "bg-green-500"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">14 May 2024 - 21 May 2024</p>
      </div>
    </div>
  );
};

export default AttendanceComponent;
