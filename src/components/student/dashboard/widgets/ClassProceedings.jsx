import React from "react";

const ClassProceedings = () => {
  const classData = {
    course: "Differential Equations",
    faculty: "Dr. Saeed Ullah Jan",
    totalClasses: 32,
    presents: 26,
    absents: 6,
    percentage: "81%",
    lectures: [
      {
        lectureNo: 32,
        date: "Friday, Dec 20, 2024",
        topic: "Ex #7. 4",
        status: "P",
      },
      {
        lectureNo: 31,
        date: "Thursday, Dec 19, 2024",
        topic: "Ex #7. 4 DE by Laplace transformations",
        status: "P",
      },
      {
        lectureNo: 30,
        date: "Wednesday, Dec 18, 2024",
        topic: "Ex #7. 3",
        status: "A",
      },
    ],
  };

  return (
    <div className="p-6 bg-[#2C2F48] bg-opacity-50  text-white rounded-lg shadow-lg border border-white/25">
      <h2 className="text-[2vw] font-extrabold text-center mb-6 ">
        Class Proceedings
      </h2>




      {/* Course Info Section */}
      <div className="p-3 md:p-6 mb-4 md:mb-8 bg-[#192841] rounded-lg shadow-md border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <p className=" font-medium text-gray-300">
              <span className="font-bold text-green-400 text-[1vw]">Course:</span>{" "}
             <span className="text-[1vw]">{classData.course}</span> 
            </p>
            <p className=" font-medium text-gray-300">
              <span className="font-bold text-green-400 text-[1vw]">Faculty:</span>{" "}
             <span className="text-[1vw]">{classData.faculty}</span> 
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <div className="text-center py-1 md:py-3 rounded-lg bg-[#102A44] shadow-md border border-white">
              <p className="text-gray-400 text-[1vw]">Present</p>
              <p className="text-[1.5vw] font-bold text-green-400">
                {classData.presents}
              </p>
            </div>
            <div className="text-center py-1 md:py-3 rounded-lg bg-[#102A44] shadow-md border border-white">
              <p className=" text-gray-400 text-[1vw]">Absent</p>
              <p className="font-bold text-red-500 text-[1.5vw]">
                {classData.absents}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-1 md:h-2 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500"
            style={{ width: classData.percentage }}
          ></div>
        </div>
      </div>

      {/* Lectures Table */}
      <div className="overflow-hidden rounded-lg border border-white bg-[#192841] shadow-md">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#048C51]/35 text-white text-sm">
              <th className="p-3 text-left font-medium text-[1vw]">Lecture#</th>
              <th className="p-3 text-left font-medium text-[1vw]">Date</th>
              <th className="p-3 text-left font-medium text-[1vw]">Topics</th>
              <th className="p-3 text-left font-medium text-[1vw]">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#048C51] text-[1vw]">
            {classData.lectures.map((lecture, index) => (
              <tr
                key={lecture.lectureNo}
                className={`hover:bg-green-600/15 ${
                  index === 0 ? " text-white" : ""
                }`}
              >
                <td className="p-3 text-[1vw]">{lecture.lectureNo}</td>
                <td className="p-3 text-[1vw]">{lecture.date}</td>
                <td className="p-3 text-[1vw]">{lecture.topic}</td>
                <td className="p-3 text-[1vw]">
                  <span
                    className={`inline-flex items-center justify-center w-3 h-3 md:w-8 md:h-8 rounded-full ${
                      lecture.status === "P"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {lecture.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassProceedings;
