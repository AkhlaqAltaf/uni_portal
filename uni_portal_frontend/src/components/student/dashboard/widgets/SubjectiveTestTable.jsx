import React from "react";

const SubjectiveTestTable = () => {
  const tests = [
    {
      id: 1,
      testTitle: "Midterm Exam",
      courseTitle: "Theory of Automata (CSC312)",
      startDateTime: "May 05, 2024 4:00 PM",
      endDateTime: "May 05, 2024 6:00 PM",
      action: "View Result",
    },
    {
      id: 2,
      testTitle: "Final Exam",
      courseTitle: "Machine Learning (CSC354)",
      startDateTime: "Dec 14, 2023 9:00 AM",
      endDateTime: "Dec 14, 2023 12:00 PM",
      action: "View Result",
    },
    {
      id: 3,
      testTitle: "Midterm Exam",
      courseTitle: "Machine Learning (CSC354)",
      startDateTime: "Oct 19, 2023 9:00 AM",
      endDateTime: "Oct 19, 2023 11:00 AM",
      action: "View Result",
    },
    {
      id: 4,
      testTitle: "Final Exam",
      courseTitle: "Web Technologies (CSC336)",
      startDateTime: "Jul 05, 2023 4:30 PM",
      endDateTime: "Jul 05, 2023 7:30 PM",
      action: "View Result",
    },
    {
      id: 5,
      testTitle: "Midterm Exam",
      courseTitle: "Theory of Automata (CSC312)",
      startDateTime: "Apr 05, 2023 11:00 AM",
      endDateTime: "Apr 05, 2023 1:00 PM",
      action: "View Result",
    },
  ];

  return (
    <div className="p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
        Subjective Tests
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold">#</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Test Title</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Course Title</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Start Date Time</th>
              <th className="px-6 py-4 text-left text-sm font-bold">End Date Time</th>
              <th className="px-6 py-4 text-left text-sm font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tests.map((test, index) => (
              <tr
                key={test.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition-colors duration-200`}
              >
                <td className="px-6 py-4 text-sm text-gray-800">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{test.testTitle}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{test.courseTitle}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{test.startDateTime}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{test.endDateTime}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => alert(`Viewing result for ${test.testTitle}`)}
                    className="text-indigo-600 hover:underline hover:text-indigo-800 transition-colors duration-200 font-medium"
                  >
                    {test.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubjectiveTestTable;
