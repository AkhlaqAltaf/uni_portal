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
      {
        lectureNo: 29,
        date: "Thursday, Dec 12, 2024",
        topic: "Laplace Inverse ex 7.2",
        status: "P",
      },
      {
        lectureNo: 28,
        date: "Wednesday, Dec 11, 2024",
        topic: "Laplace transformations ex #7. 1",
        status: "P",
      },
      {
        lectureNo: 27,
        date: "Thursday, Dec 05, 2024",
        topic: "Undamped and Damped motion",
        status: "P",
      },
      {
        lectureNo: 26,
        date: "Wednesday, Dec 04, 2024",
        topic: "Ex #5. 1",
        status: "P",
      },
      {
        lectureNo: 25,
        date: "Thursday, Nov 28, 2024",
        topic: "Applications of higher order DE",
        status: "P",
      },
      {
        lectureNo: 24,
        date: "Wednesday, Nov 27, 2024",
        topic: "Cauchy Euler Equations",
        status: "P",
      },
      {
        lectureNo: 23,
        date: "Thursday, Nov 21, 2024",
        topic: "Ex #4. 6",
        status: "P",
      },
      {
        lectureNo: 22,
        date: "Wednesday, Nov 20, 2024",
        topic: "Variation of parameters",
        status: "P",
      },
      {
        lectureNo: 21,
        date: "Thursday, Nov 14, 2024",
        topic: "Ex #4. 4 complete",
        status: "A",
      },
    ],
  };

  return (
    <div className="p-8 backdrop-blur-sm bg-white/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800 ">
        Class Proceedings
      </h2>

      {/* Course Info Card */}
      <div className="mb-8 backdrop-blur-sm bg-white/40 rounded-xl p-6 border border-white/20 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800">
                Course:
              </span> {classData.course}
            </p>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800 ">
                Faculty:
              </span> {classData.faculty}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <p className="text-sm text-gray-600">Present</p>
              <p className="text-2xl font-bold text-green-600">{classData.presents}</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20">
              <p className="text-sm text-gray-600">Absent</p>
              <p className="text-2xl font-bold text-red-600">{classData.absents}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200/50 rounded-full h-2 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800  transition-all duration-500"
            style={{ width: classData.percentage }}
          ></div>
        </div>
      </div>

      {/* Lectures Table */}
      <div className="overflow-hidden rounded-xl border border-white/20 backdrop-blur-sm bg-white/40">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-800 via-purple-800 to-slate-800  text-white">
              <th className="px-6 py-3 text-left text-sm font-semibold">Lecture#</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Topics</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/50">
            {classData.lectures.map((lecture) => (
              <tr
                key={lecture.lectureNo}
                className="transition-colors duration-200 hover:bg-white/50"
              >
                <td className="px-6 py-4 text-sm text-gray-700">
                  {lecture.lectureNo}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {lecture.date}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {lecture.topic}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      lecture.status === "P"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
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