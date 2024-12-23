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
    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
        Class Proceedings
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-lg font-semibold text-gray-700">
            <strong>Course:</strong> {classData.course}
          </p>
          <p className="text-lg font-semibold text-gray-700">
            <strong>Faculty Member:</strong> {classData.faculty}
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center mt-4">
          <p className="text-md font-medium text-gray-600">
            <strong>Total Classes:</strong> {classData.totalClasses}
          </p>
          <p className="text-md font-medium text-gray-600">
            <strong>Presents:</strong> {classData.presents}
          </p>
          <p className="text-md font-medium text-gray-600">
            <strong>Absents:</strong> {classData.absents}
          </p>
          <p className="text-md font-medium text-gray-600">
            <strong>Percentage:</strong> {classData.percentage}
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-4 overflow-hidden shadow-sm">
          <div
            className="bg-green-500 h-full rounded-full"
            style={{ width: classData.percentage }}
          ></div>
        </div>
      </div>
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <tr>
            <th className="px-4 py-3 text-left">Lecture#</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Topics</th>
            <th className="px-4 py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {classData.lectures.map((lecture, index) => (
            <tr
              key={lecture.lectureNo}
              className={`${
                index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
              } hover:bg-blue-200`}
            >
              <td className="px-4 py-3 text-gray-700">{lecture.lectureNo}</td>
              <td className="px-4 py-3 text-gray-700">{lecture.date}</td>
              <td className="px-4 py-3 text-gray-700">{lecture.topic}</td>
              <td
                className={`px-4 py-3 text-center font-bold ${
                  lecture.status === "P" ? "text-green-600" : "text-red-600"
                }`}
              >
                {lecture.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassProceedings;
