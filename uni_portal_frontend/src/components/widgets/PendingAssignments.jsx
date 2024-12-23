import React from "react";

const PendingAssignments = () => {
  const pendingAssignments = [
    {
      id: 1,
      courseTitle: "Mobile Application Development",
      assignmentTitle: "Develop Quiz Application",
      deadline: "Dec 27, 2024 23:59",
      downloadLink: "Download Files",
      submitLink: "Upload File",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">
        Course Portal Pending Assignments
      </h2>
      <table className="w-full bg-white border-collapse rounded-lg shadow-md overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-3 text-left">#</th>
            <th className="px-4 py-3 text-left">Course Title</th>
            <th className="px-4 py-3 text-left">Assignment Title</th>
            <th className="px-4 py-3 text-left">Deadline</th>
            <th className="px-4 py-3 text-left">Download</th>
            <th className="px-4 py-3 text-left">Submit Now</th>
          </tr>
        </thead>
        <tbody>
          {pendingAssignments.map((assignment, index) => (
            <tr
              key={assignment.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              } hover:bg-blue-100`}
            >
              <td className="px-4 py-3">{assignment.id}</td>
              <td className="px-4 py-3">{assignment.courseTitle}</td>
              <td className="px-4 py-3">{assignment.assignmentTitle}</td>
              <td className="px-4 py-3">{assignment.deadline}</td>
              <td className="px-4 py-3 text-blue-600">
                <button className="hover:underline">
                  {assignment.downloadLink}
                </button>
              </td>
              <td className="px-4 py-3 text-blue-600">
                <button className="hover:underline">
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

export default PendingAssignments;
