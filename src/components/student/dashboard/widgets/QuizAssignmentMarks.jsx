import React from "react";

const QuizAssignmentMarks = () => {
  const data = {
    course: "Differential Equations",
    faculty: "Dr. Saeed Ullah Jan",
    quizMarks: [
      { id: 1, date: "Oct 24, 2024", topic: "Quiz1", total: 10, obtained: 7, percentage: 70 },
      { id: 2, date: "Nov 29, 2024", topic: "Quiz2", total: 10, obtained: 8, percentage: 80 },
    ],
    assignmentMarks: [
      { id: 1, date: "Oct 24, 2024", topic: "Assign1", total: 20, obtained: 18, percentage: 90 },
      { id: 2, date: "Dec 07, 2024", topic: "Assign2", total: 20, obtained: 17, percentage: 85 },
    ],
    midtermMarks: [
      { id: 1, date: "Nov 07, 2024", topic: "MidTerm", total: 25, obtained: 16, percentage: 64 },
    ],
  };

  const renderProgressBar = (percentage) => {
    return (
      <div className="w-full bg-[#1E2A4A] rounded-full h-1.5 md:h-2.5 overflow-hidden border-white/70 border">
        <div
          className={`h-full bg-gradient-to-r ${
            percentage >= 75
              ? "from-green-400 to-green-600"
              : percentage >= 60
              ? "from-yellow-400 to-yellow-600"
              : "from-red-400 to-red-600"
          } rounded-full transition-all duration-700 ease-in-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const renderTable = (title, marksData) => {
    return (
      <div className="bg-[#192841] rounded-lg shadow-md p-3 md:p-6 mb-3 md:mb-6 border border-white">
        <h3 className="text-[2vw] font-bold mb-2 md:mb-4 text-white">
          {title}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-white rounded-full">
            <thead>
              <tr className="bg-green-600/35 text-white text-sm">
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">S.No</th>
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">Date</th>
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">Topic</th>
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">Total</th>
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">Obtained</th>
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">%</th>
                <th className="px-2 py-1 md:px-4 md:py-2 font-semibold text-[1vw] text-center">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/15">
              {marksData.map((mark, index) => (
                <tr key={mark.id} className="hover:bg-green-600/15 transition-colors duration-200">
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-center">{index + 1}</td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-center">{mark.date}</td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-center">{mark.topic}</td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-center">{mark.total}</td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-center">{mark.obtained}</td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] font-bold text-blue-400 text-center">{mark.percentage}%</td>
                  <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-center">{renderProgressBar(mark.percentage)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="p-3 md:p-6 bg-[#0E1C36] text-white rounded-lg shadow-lg border border-white/25">
      <h2 className="text-[2vw] font-bold mb-3 md:mb-6 text-center text-white">
        Quiz Assignment Marks
      </h2>
      <div className="bg-[#192841] rounded-lg shadow-md p-3 md:p-6 mb-3 md:mb-6 border border-white">
        <p className="text-[1vw] font-semibold text-gray-300">
          <span className="text-green-400">Course:</span> {data.course}
        </p>
        <p className="text-[1vw] font-semibold text-gray-300">
          <span className="text-green-400">Faculty:</span> {data.faculty}
        </p>
      </div>
      {renderTable("Quiz Marks", data.quizMarks)}
      {renderTable("Assignment Marks", data.assignmentMarks)}
      {renderTable("Midterm Marks", data.midtermMarks)}
    </div>
  );
};

export default QuizAssignmentMarks;
