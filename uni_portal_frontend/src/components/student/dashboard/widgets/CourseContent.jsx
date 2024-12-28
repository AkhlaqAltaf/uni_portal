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
        // Add more files as needed
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
        // Add more files as needed
      ],
    },
    // Add more courses as needed
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    const course = courses.find((c) => c.id === parseInt(courseId));
    setSelectedCourse(course || null);
  };

  return (
    <div className="p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
        Course Content
      </h2>
      <div className="mb-4">
        <select
          className="w-full p-2 border rounded-md"
          onChange={handleCourseChange}
        >
          <option value="">- Select Course -</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      {selectedCourse ? (
        <div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">#</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">UploadDate</th>
                <th className="border border-gray-300 p-2">Download Files</th>
              </tr>
            </thead>
            <tbody>
              {selectedCourse.files.map((file, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 p-2">{file.title}</td>
                  <td className="border border-gray-300 p-2">{file.description}</td>
                  <td className="border border-gray-300 p-2 text-center">{file.uploadDate}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <a
                      href={file.downloadLink}
                      className="text-blue-600 hover:underline"
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
        <p className="text-gray-600">No content found for the selected course.</p>
      )}
    </div>
  );
};

export default CourseContent;
