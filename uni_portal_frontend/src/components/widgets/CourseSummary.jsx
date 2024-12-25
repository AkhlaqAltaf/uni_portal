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
    <div className="p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
        Student's Courses Summary
      </h2>
      <table className="w-full border-collapse bg-white/40 rounded-xl overflow-hidden shadow-lg">
        <thead className="bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800 text-white">
          <tr>
            <th className="px-4 py-2">S#</th>
            <th className="px-4 py-2">Course Title</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Faculty</th>
            <th className="px-4 py-2">Lectures</th>
            <th className="px-4 py-2">P</th>
            <th className="px-4 py-2">A</th>
            <th className="px-4 py-2">Thy%</th>
            <th className="px-4 py-2">LAB%</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr
              key={course.id}
              className="transition-colors duration-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100"
            >
              <td className="border-t border-gray-300 px-4 py-2 text-center">
                {course.id}
              </td>
              <td className="border-t border-gray-300 px-4 py-2">
                <a href="#" className="text-purple-600 hover:underline">
                  {course.title}
                </a>
              </td>
              <td className="border-t border-gray-300 px-4 py-2">
                {course.class}
              </td>
              <td className="border-t border-gray-300 px-4 py-2">
                {course.faculty}
              </td>
              <td className="border-t border-gray-300 px-4 py-2 text-center">
                {course.lectures}
              </td>
              <td className="border-t border-gray-300 px-4 py-2 text-center">
                {course.present}
              </td>
              <td className="border-t border-gray-300 px-4 py-2 text-center">
                {course.absent}
              </td>
              <td className="border-t border-gray-300 px-4 py-2 text-center">
                {course.thyPercentage}
              </td>
              <td className="border-t border-gray-300 px-4 py-2 text-center">
                {course.labPercentage}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSummary;