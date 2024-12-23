import React from "react";

const QuizAssignmentMarks = () => {
  const data = {
    course: "Differential Equations",
    faculty: "Dr. Saeed Ullah Jan",
    quizMarks: [
      {
        id: 1,
        date: "Oct 24, 2024",
        topic: "Quiz1",
        total: 10,
        obtained: 7,
        percentage: 70,
      },
      {
        id: 2,
        date: "Nov 29, 2024",
        topic: "Quiz2",
        total: 10,
        obtained: 8,
        percentage: 80,
      },
    ],
    assignmentMarks: [
      {
        id: 1,
        date: "Oct 24, 2024",
        topic: "Assign1",
        total: 20,
        obtained: 18,
        percentage: 90,
      },
      {
        id: 2,
        date: "Dec 07, 2024",
        topic: "Assign2",
        total: 20,
        obtained: 17,
        percentage: 85,
      },
    ],
    midtermMarks: [
      {
        id: 1,
        date: "Nov 07, 2024",
        topic: "MidTerm",
        total: 25,
        obtained: 16,
        percentage: 64,
      },
    ],
  };

  const renderProgressBar = (percentage, color) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const renderTable = (title, marksData) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-bold bg-blue-600 text-white p-3 rounded-t-md">
          {title}
        </h3>
        <table className="w-full bg-white border-collapse rounded-md shadow-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">S.No</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">
                {title === "Quiz Marks" ? "Quiz Topic" : "Topic"}
              </th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
              <th className="border border-gray-300 px-4 py-2">Obtained</th>
              <th className="border border-gray-300 px-4 py-2">%</th>
              <th className="border border-gray-300 px-4 py-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((mark, index) => (
              <tr
                key={mark.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-gray-200`}
              >
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {mark.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {mark.topic}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {mark.total}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {mark.obtained}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {mark.percentage}%
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {renderProgressBar(
                    mark.percentage,
                    mark.percentage >= 75
                      ? "bg-green-500"
                      : mark.percentage >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-xl">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
        Quiz Assignment Marks
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">
            <strong>Course:</strong> {data.course}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <strong>Faculty Member:</strong> {data.faculty}
          </p>
        </div>
      </div>
      {renderTable("Quiz Marks", data.quizMarks)}
      {renderTable("Assignment Marks", data.assignmentMarks)}
      {renderTable("Midterm Marks", data.midtermMarks)}
    </div>
  );
};

export default QuizAssignmentMarks;
