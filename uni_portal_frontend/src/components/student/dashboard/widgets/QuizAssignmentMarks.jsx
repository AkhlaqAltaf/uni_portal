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
      <div className="w-full bg-gray-200/50 backdrop-blur-sm rounded-full h-2.5 overflow-hidden">
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
      <div className="mb-6 backdrop-blur-sm bg-white/40 rounded-xl overflow-hidden border border-white/20 shadow-lg">
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800 text-white p-4">
          {title}
        </h3>
        <table className="w-full">
          <thead className="bg-white/30">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">S.No</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                {title === "Quiz Marks" ? "Quiz Topic" : "Topic"}
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Total</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Obtained</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">%</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Progress</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/50">
            {marksData.map((mark, index) => (
              <tr
                key={mark.id}
                className="transition-colors duration-200 hover:bg-white/50"
              >
                <td className="px-4 py-3 text-sm">{index + 1}</td>
                <td className="px-4 py-3 text-sm">{mark.date}</td>
                <td className="px-4 py-3 text-sm">{mark.topic}</td>
                <td className="px-4 py-3 text-sm text-center">{mark.total}</td>
                <td className="px-4 py-3 text-sm text-center">{mark.obtained}</td>
                <td className="px-4 py-3 text-sm text-center">{mark.percentage}%</td>
                <td className="px-4 py-3">{renderProgressBar(mark.percentage)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
        Quiz Assignment Marks
      </h2>
      
      <div className="mb-8 backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-white/20 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
                Course:
              </span> {data.course}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
                Faculty:
              </span> {data.faculty}
            </p>
          </div>
        </div>
      </div>

      {renderTable("Quiz Marks", data.quizMarks)}
      {renderTable("Assignment Marks", data.assignmentMarks)}
      {renderTable("Midterm Marks", data.midtermMarks)}
    </div>
  );
};

export default QuizAssignmentMarks;