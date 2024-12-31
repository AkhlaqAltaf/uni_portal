import React from "react";

const CourseSummary = () => {
  const courses = [
    {
      id: 1,
      title: "Artificial Intelligence",
      class: "BCS 10 Attached with BSE 6B",
      faculty: "Dr. Ahmad Saeed",
      lectures: 43,
      present: 30,
      absent: 13,
      thyPercentage: "64%",
      labPercentage: "78%",
    },
    {
      id: 2,
      title: "Compiler Construction",
      class: "BCS 5 Rep",
      faculty: "Kainat Khalid (VF)",
      lectures: 33,
      present: 29,
      absent: 4,
      thyPercentage: "83%",
      labPercentage: "90%",
    },
    {
      id: 3,
      title: "Data Communications and Computer Networks",
      class: "BCS 7 Attach with BCS-6B",
      faculty: "Sana Malik",
      lectures: 35,
      present: 28,
      absent: 7,
      thyPercentage: "85%",
      labPercentage: "77%",
    },
    {
      id: 4,
      title: "Differential Equations",
      class: "BSE 9 Attachment",
      faculty: "Dr. Saeed Ullah Jan",
      lectures: 32,
      present: 26,
      absent: 6,
      thyPercentage: "81%",
      labPercentage: "N/A",
    },
    {
      id: 5,
      title: "Machine Learning",
      class: "BCS 7 B",
      faculty: "Aisha",
      lectures: 27,
      present: 25,
      absent: 2,
      thyPercentage: "93%",
      labPercentage: "N/A",
    },
    {
      id: 6,
      title: "Mobile Application Development",
      class: "BCS 7 B",
      faculty: "Yasar Khan",
      lectures: 37,
      present: 31,
      absent: 6,
      thyPercentage: "82%",
      labPercentage: "85%",
    },
    {
      id: 7,
      title: "Software Project Management",
      class: "BCS 10 Attached with BSE 6R",
      faculty: "Ehtisham Ul Haque",
      lectures: 25,
      present: 22,
      absent: 3,
      thyPercentage: "88%",
      labPercentage: "N/A",
    },
  ];

  return (
    <div className="p-6 sm:p-8 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700">
        Course Summary
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white/40 rounded-lg shadow-md border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white">
              <th className="px-4 py-3 text-left text-sm font-medium">S#</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Course Title</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Class</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Faculty</th>
              <th className="px-4 py-3 text-center text-sm font-medium">Lectures</th>
              <th className="px-4 py-3 text-center text-sm font-medium">Present</th>
              <th className="px-4 py-3 text-center text-sm font-medium">Absent</th>
              <th className="px-4 py-3 text-center text-sm font-medium">Thy%</th>
              <th className="px-4 py-3 text-center text-sm font-medium">Lab%</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courses.map((course) => (
              <tr
                key={course.id}
                className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 transition duration-200"
              >
                <td className="px-4 py-3 text-sm text-gray-700">{course.id}</td>
                <td className="px-4 py-3 text-sm text-blue-600 hover:underline">
                  {course.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">{course.class}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{course.faculty}</td>
                <td className="px-4 py-3 text-sm text-center text-gray-700">
                  {course.lectures}
                </td>
                <td className="px-4 py-3 text-sm text-center text-green-600">
                  {course.present}
                </td>
                <td className="px-4 py-3 text-sm text-center text-red-600">
                  {course.absent}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-700">
                  {course.thyPercentage}
                </td>
                <td className="px-4 py-3 text-sm text-center text-gray-700">
                  {course.labPercentage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseSummary;
