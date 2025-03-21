import React, { useState } from "react";

const CourseContent = () => {
  const courses = [
    {
      id: 1,
      name: "Artificial Intelligence",
      files: [
        {
          title: "Reinforcement Learning",
          description: "Reinforcement Learning",
          uploadDate: "23 Dec, 2024",
          downloadLink: "#",
        },
        {
          title: "Machine Learning Life Cycle",
          description: "Machine Learning Life Cycle",
          uploadDate: "13 Dec, 2024",
          downloadLink: "#",
        },
        {
          title: "Back Propagation in ANN",
          description: "Back Propagation in ANN",
          uploadDate: "10 Dec, 2024",
          downloadLink: "#",
        },
      ],
    },
    {
      id: 2,
      name: "Introduction to Automata",
      files: [
        {
          title: "Finite Automata",
          description: "Detailed study of finite automata",
          uploadDate: "17 Jan, 2024",
          downloadLink: "#",
        },
      ],
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    const course = courses.find((c) => c.id === parseInt(courseId));
    setSelectedCourse(course || null);
  };

  return (
    <div className="p-3 md:p-6  text-white rounded-lg shadow border border-white/25">
      <h2 className="text-[2vw] font-bold mb-3 md:mb-6">Course Content</h2>

      {/* Course Selection Dropdown */}
      <div className="mb-2 md:mb-4">
        <select
          onChange={handleCourseChange}
          className="w-full p-2 text-[1.5vw] bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <option value="">- Select Course -</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Course Details */}
      {selectedCourse ? (
        <div>
          <table className="w-full border-collapse bg-gray-700 rounded-lg shadow ">
            <thead>
              <tr className="bg-[#048C51]/35">
                <th className="text-[1vw] p-2 md:p-3 border-b border-gray-600">#</th>
                <th className="text-[1vw] p-3 border-b border-gray-600">Title</th>
                <th className="text-[1vw] p-3 border-b border-gray-600">Description</th>
                <th className="text-[1vw] p-3 border-b border-gray-600">Upload Date</th>
                <th className="text-[1vw] p-3 border-b border-gray-600">Download</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourse.files.map((file, index) => (
                <tr key={index} className="even:bg-gray-800 odd:bg-gray-700">
                  <td className="text-[1vw] p-2 md:p-3 text-center">{index + 1}</td>
                  <td className="text-[1vw] p-2 md:p-3">{file.title}</td>
                  <td className="text-[1vw] p-2 md:p-3">{file.description}</td>
                  <td className="text-[1vw] p-2 md:p-3 text-center">{file.uploadDate}</td>
                  <td className="text-[1vw] p-2 md:p-3 text-center">
                    <a
                      href={file.downloadLink}
                      className="text-blue-400 hover:underline"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400 text-[1vw]">Please select a course to view its content.</p>
      )}
    </div>
  );
};

export default CourseContent;
