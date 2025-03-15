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
    <div className="p-3 md:p-6  text-white rounded-lg shadow-lg border border-white/25">
      <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Subjective Tests</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-left">
          <thead className="bg-[#048C51]/35">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">#</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Test Title</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Course Title</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Start Date Time</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">End Date Time</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {tests.map((test, index) => (
              <tr
                key={test.id}
                className="hover:bg-[#048C51]/15 duration-200"
              >
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{index + 1}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{test.testTitle}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{test.courseTitle}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{test.startDateTime}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{test.endDateTime}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">
                  <button
                    onClick={() => alert(`Viewing result for ${test.testTitle}`)}
                    className="text-blue-500 hover:text-blue-300 transition-colors duration-200"
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
