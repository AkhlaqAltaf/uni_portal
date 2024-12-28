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
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
        Assignment Summary
      </h2>
      <table className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Course Title</th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Start Date</th>
            <th className="px-4 py-3 text-left">Deadline</th>
            <th className="px-4 py-3 text-left">Submission</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Download</th>
            <th className="px-4 py-3 text-left">Submit</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr
              key={assignment.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-blue-100`}
            >
              <td className="px-4 py-3">{assignment.id}</td>
              <td className="px-4 py-3">{assignment.courseTitle}</td>
              <td className="px-4 py-3">{assignment.title}</td>
              <td className="px-4 py-3">{assignment.startDate}</td>
              <td className="px-4 py-3">{assignment.deadline}</td>
              <td
                className={`font-semibold ${
                  assignment.submission === "Submitted"
                    ? "text-green-600"
                    : assignment.submission === "Pending"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {assignment.submission}
              </td>
              <td
                className={`font-semibold ${
                  assignment.status === "Open"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {assignment.status}
              </td>
              <td className="px-4 py-3">
                <button className="text-blue-600 hover:underline">
                  {assignment.downloadLink}
                </button>
              </td>
              <td
                className={`px-4 py-3 ${
                  assignment.submitLink === "Closed"
                    ? "text-red-600"
                    : "text-blue-600"
                }`}
              >
                <button
                  className={`hover:underline ${
                    assignment.submitLink === "Closed"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
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
  );
};

export default AssignmentSummary;
