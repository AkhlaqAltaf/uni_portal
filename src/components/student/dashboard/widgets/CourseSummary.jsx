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
    <div className="md:p-6 text-white rounded-lg shadow-lg  border-[1px] border-white/45 bg-[#2C2F48] bg-opacity-50 bg-green-600/15 border-[#048C51]">
      
      <h1 className="text-3xl font-extrabold text-center md:mb-6 text-[2vw]">Course Summary</h1>
      <div className="">
        <table className=" border-collapse border border-gray-700 text-left">
          <thead className="bg-[#048C51]/35">
            <tr>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">S#</th>
              <th className="p-1 md:py-2 border border-gray-600 text-[1vw]">Course Title</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Class</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Faculty</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Lectures</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Present</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Absent</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Thy%</th>
              <th className="p-1 md:p-2 border border-gray-600 text-[1vw]">Lab%</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {courses.map((course, index) => (
              <tr key={course.id} className="hover:bg-green-600/15">
                <td className="p-1 md:p-2 text-[1vw]">{index + 1}</td>
                <td className="p-1 md:p-2 text-[1vw]">{course.title}</td>
                <td className="p-1 md:p-2 text-[1vw]">{course.class}</td>
                <td className="p-1 md:p-2 text-[1vw]">{course.faculty}</td>
                <td className="p-1 md:p-2 text-[1vw]">{course.lectures}</td>
                <td className="p-1 md:p-2 text-green-500 text-[1vw]">{course.present}</td>
                <td className="p-1 md:p-2 text-red-500 text-[1vw]">{course.absent}</td>
                <td className="p-1 md:p-2 text-[1vw]">{course.thyPercentage}</td>
                <td className="p-1 md:p-2 py-2 text-[1vw]">{course.labPercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseSummary;
