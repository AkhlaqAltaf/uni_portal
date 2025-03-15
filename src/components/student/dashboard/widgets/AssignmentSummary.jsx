import React from "react";

const AssignmentSummary = () => {
  const assignments = [
    {
      id: 1,
      courseTitle: "Mobile Application Development",
      title: "Develop Quiz Application",
      startDate: "20 Dec, 2024",
      deadline: "27 Dec, 2024 23:59",
      submission: "Pending",
      status: "Open",
      downloadLink: "Download",
      submitLink: "Upload File",
    },
    {
      id: 2,
      courseTitle: "Machine Learning",
      title: "Assignment 2",
      startDate: "03 Dec, 2024",
      deadline: "24 Dec, 2024 23:59",
      submission: "Submitted",
      status: "Open",
      downloadLink: "Download",
      submitLink: "Change Submitted File",
    },
    {
      id: 3,
      courseTitle: "Software Project Management",
      title: "Assignment 2",
      startDate: "11 Dec, 2024",
      deadline: "21 Dec, 2024 23:59",
      submission: "Submitted",
      status: "Closed",
      downloadLink: "Download",
      submitLink: "Closed",
    },
    {
      id: 4,
      courseTitle: "Computer Networks",
      title: "Assignment 2",
      startDate: "13 Dec, 2024",
      deadline: "20 Dec, 2024 23:59",
      submission: "Submitted",
      status: "Closed",
      downloadLink: "Download",
      submitLink: "Closed",
    },
    {
      id: 5,
      courseTitle: "Mobile Application Development",
      title: "Lab 12 Tasks BCS 7B",
      startDate: "20 Dec, 2024",
      deadline: "20 Dec, 2024 23:59",
      submission: "Submitted",
      status: "Closed",
      downloadLink: "Download",
      submitLink: "Closed",
    },
    {
      id: 6,
      courseTitle: "Compiler Construction",
      title: "Lab Assignment 2",
      startDate: "19 Dec, 2024",
      deadline: "19 Dec, 2024 18:00",
      submission: "NotSubmitted",
      status: "Closed",
      downloadLink: "Download",
      submitLink: "Closed",
    },
  ];

  return (
    <div className="p-3 md:p-6 text-white rounded-lg shadow-lg border border-white/25">
      <h2 className="text-[2vw] font-extrabold text-center mb-3 md:mb-6">Assignment Summary</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-left">
          <thead className="bg-[#048C51]/35">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">#</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Course Title</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Start Date</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Deadline</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Submission</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Status</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Download</th>
              <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Submit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {assignments.map((assignment, index) => (
              <tr
                key={assignment.id}
                className="hover:bg-[#048C51]/15 duration-200"
              >
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.id}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.courseTitle}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.title}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.startDate}</td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.deadline}</td>
                <td
                  className={`font-semibold text-[1vw] ${
                    assignment.submission === "Submitted"
                      ? "text-green-600 text-[1vw]"
                      : assignment.submission === "Pending"
                      ? "text-yellow-600 text-[1vw]"
                      : "text-red-600 text-[1vw]"
                  }`}
                >
                  {assignment.submission}
                </td>
                <td
                  className={`font-semibold text-[1vw] ${
                    assignment.status === "Open" ? "text-green-600 text-[1vw]" : "text-red-600 text-[1vw]"
                  }`}
                >
                  {assignment.status}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  <button className="text-blue-500 hover:text-blue-300 transition-colors duration-200 text-[1vw]">
                    {assignment.downloadLink}
                  </button>
                </td>
                <td
                  className={`px-2 py-1 md:px-4 md:py-2 ${
                    assignment.submitLink === "Closed"
                      ? "text-red-600 text-[1vw]"
                      : "text-blue-500 text-[1vw]"
                  }`}
                >
                  <button
                    className={`hover:underline text-[1vw] ${
                      assignment.submitLink === "Closed"
                        ? "cursor-not-allowed text-[1vw]"
                        : "cursor-pointer text-[1vw]"
                    }`}
                  >
                    {assignment.submitLink}
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

export default AssignmentSummary;
