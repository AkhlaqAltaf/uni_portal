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
      description: "Create a quiz application with multiple choice questions."
    },
  ];

  return (
    <div className="p-3 md:p-6 text-white rounded-lg shadow-lg border border-white/25">
      <h2 className="text-[2vw] font-extrabold mb-3 md:mb-6 text-center">
        Course Portal Pending Assignments
      </h2>
      <table className="w-full border-collapse border border-gray-700 text-left">
        <thead className="bg-[#048C51]/35">
          <tr>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">#</th>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Course Title</th>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Assignment Title</th>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Deadline</th>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Description</th>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Download</th>
            <th className="px-2 py-1 md:px-4 md:py-2 text-[1vw] border border-gray-600">Submit Now</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {pendingAssignments.map((assignment, index) => (
            <tr
              key={assignment.id}
              className="hover:bg-[#048C51]/15 duration-200"
            >
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.id}</td>
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.courseTitle}</td>
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.assignmentTitle}</td>
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.deadline}</td>
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw]">{assignment.description}</td>
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-blue-500">
                <button className="hover:text-blue-300 transition-colors duration-200">
                  {assignment.downloadLink}
                </button>
              </td>
              <td className="px-2 py-1 md:px-4 md:py-2 text-[1vw] text-blue-500">
                <button className="hover:text-blue-300 transition-colors duration-200 text-[1vw]">
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
