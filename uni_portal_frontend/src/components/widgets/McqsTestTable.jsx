import React from "react";

const McqsTestTable = () => {
  const tests = [
    {
      id: 1,
      testTitle: "Quiz",
      courseTitle: "Theory of Automata (CSC312)",
      startDateTime: "May 05, 2024 4:00 PM",
      endDateTime: "May 05, 2024 4:00 PM",
      action: "View Result",
    },
    {
      id: 2,
      testTitle: "Quiz 2",
      courseTitle: "Machine Learning (CSC354)",
      startDateTime: "Dec 14, 2023 9:00 PM",
      endDateTime: "Dec 14, 2023 9:10 PM",
      action: "View Result",
    },
    {
      id: 3,
      testTitle: "Quiz 1",
      courseTitle: "Machine Learning (CSC354)",
      startDateTime: "Oct 19, 2023 9:00 PM",
      endDateTime: "Oct 19, 2023 9:07 PM",
      action: "View Result",
    },
    {
      id: 4,
      testTitle: "React",
      courseTitle: "Web Technologies (CSC336)",
      startDateTime: "Jul 05, 2023 4:30 PM",
      endDateTime: "Jul 05, 2023 5:05 PM",
      action: "View Result",
    },
    {
      id: 5,
      testTitle: "Quiz 1 - Introduction to the Theory of Computation",
      courseTitle: "Theory of Automata (CSC312)",
      startDateTime: "Apr 05, 2023 11:00 AM",
      endDateTime: "Apr 05, 2023 11:20 AM",
      action: "View Result",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">MCQs Test</h2>
      <table className="w-full bg-white border-collapse rounded-lg shadow-md overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Test Title</th>
            <th className="px-4 py-3 text-left">Course Title</th>
            <th className="px-4 py-3 text-left">Start Date Time</th>
            <th className="px-4 py-3 text-left">End Date Time</th>
            <th className="px-4 py-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, index) => (
            <tr
              key={test.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-blue-100`}
            >
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">{test.testTitle}</td>
              <td className="px-4 py-3">{test.courseTitle}</td>
              <td className="px-4 py-3">{test.startDateTime}</td>
              <td className="px-4 py-3">{test.endDateTime}</td>
              <td className="px-4 py-3 text-blue-600">
                <button
                  onClick={() => alert(`Viewing result for ${test.testTitle}`)}
                  className="hover:underline"
                >
                  {test.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default McqsTestTable;
