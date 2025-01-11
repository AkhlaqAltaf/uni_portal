import React, { useState } from "react";

const AssignmentSummary = () => {
  const [uploadMessage, setUploadMessage] = useState("");
  const [assignments, setAssignments] = useState([
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
  ]);

  const handleFileUpload = (event, assignmentId) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`File uploaded for assignment ${assignmentId}:`, file.name);

      // Update assignment properties
      setAssignments((prevAssignments) =>
        prevAssignments.map((assignment) =>
          assignment.id === assignmentId
            ? {
                ...assignment,
                submission: "Submitted",
                status: "Open",
                submitLink: "Change Submitted File", // Update label
              }
            : assignment
        )
      );

      // Set success message
      setUploadMessage(`File "${file.name}" uploaded successfully for Assignment ${assignmentId}.`);

      // Clear message after a few seconds
      setTimeout(() => setUploadMessage(""), 5000);
    }
  };

  const handleDownload = (link) => {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.download = link.split("/").pop(); // Set filename from link
    anchor.click();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-6">Assignment Summary</h2>
      {uploadMessage && (
        <div className="mb-4 text-green-500 text-center font-semibold">
          {uploadMessage}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700 text-left">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 border border-gray-600">#</th>
              <th className="px-4 py-2 border border-gray-600">Course Title</th>
              <th className="px-4 py-2 border border-gray-600">Title</th>
              <th className="px-4 py-2 border border-gray-600">Start Date</th>
              <th className="px-4 py-2 border border-gray-600">Deadline</th>
              <th className="px-4 py-2 border border-gray-600">Submission</th>
              <th className="px-4 py-2 border border-gray-600">Status</th>
              <th className="px-4 py-2 border border-gray-600">Download</th>
              <th className="px-4 py-2 border border-gray-600">Submit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className="hover:bg-purple-800 transition-colors duration-200"
              >
                <td className="px-4 py-2">{assignment.id}</td>
                <td className="px-4 py-2">{assignment.courseTitle}</td>
                <td className="px-4 py-2">{assignment.title}</td>
                <td className="px-4 py-2">{assignment.startDate}</td>
                <td className="px-4 py-2">{assignment.deadline}</td>
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
                      : "text-blue-600"
                  }`}
                >
                  {assignment.status}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDownload(assignment.downloadLink)}
                    className="text-blue-500 hover:text-blue-300 transition-colors duration-200"
                  >
                    {assignment.downloadLink.split("/").pop()}
                  </button>
                </td>
                <td className="px-4 py-2">
                  {assignment.submitLink === "Closed" ? (
                    <span className="text-red-600">Closed</span>
                  ) : (
                    <label className="text-blue-500 hover:underline cursor-pointer">
                      {assignment.submitLink}
                      <input
                        type="file"
                        onChange={(event) => handleFileUpload(event, assignment.id)}
                        className="hidden"
                      />
                    </label>
                  )}
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

