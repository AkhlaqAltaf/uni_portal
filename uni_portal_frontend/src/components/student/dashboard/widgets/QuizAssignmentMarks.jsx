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

  const renderProgressBar = (percentage) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${
            percentage >= 75
              ? "from-green-500 to-green-600"
              : percentage >= 60
              ? "from-yellow-500 to-yellow-600"
              : "from-red-500 to-red-600"
          } rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const renderTable = (title, marksData) => {
    return (
      <div className="mb-6 bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg border border-blue-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">{title}</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-sm font-semibold">S.No</th>
              <th className="px-4 py-2 text-sm font-semibold">Date</th>
              <th className="px-4 py-2 text-sm font-semibold">
                {title === "Quiz Marks" ? "Quiz Topic" : "Topic"}
              </th>
              <th className="px-4 py-2 text-sm font-semibold">Total</th>
              <th className="px-4 py-2 text-sm font-semibold">Obtained</th>
              <th className="px-4 py-2 text-sm font-semibold">%</th>
              <th className="px-4 py-2 text-sm font-semibold">Progress</th>
            </tr>
          </thead>
          <tbody>
            {marksData.map((mark, index) => (
              <tr
                key={mark.id}
                className="hover:bg-blue-50 transition-colors duration-200"
              >
                <td className="px-4 py-2 text-sm">{index + 1}</td>
                <td className="px-4 py-2 text-sm">{mark.date}</td>
                <td className="px-4 py-2 text-sm">{mark.topic}</td>
                <td className="px-4 py-2 text-sm text-center">{mark.total}</td>
                <td className="px-4 py-2 text-sm text-center">{mark.obtained}</td>
                <td className="px-4 py-2 text-sm text-center">{mark.percentage}%</td>
                <td className="px-4 py-2">{renderProgressBar(mark.percentage)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Quiz Assignment Marks
      </h2>
      <div className="bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg p-6 mb-6">
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold">Course:</span> {data.course}
          </p>
          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold">Faculty:</span> {data.faculty}
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
