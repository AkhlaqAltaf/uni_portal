import React from "react";

const Schedule = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Class Schedule</h2>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Course</th>
            <th className="py-2 px-4">Instructor</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data, replace with dynamic data */}
          <tr>
            <td className="border py-2 px-4">9:00 AM - 10:00 AM</td>
            <td className="border py-2 px-4">Mathematics 101</td>
            <td className="border py-2 px-4">Dr. Smith</td>
          </tr>
          <tr>
            <td className="border py-2 px-4">10:30 AM - 11:30 AM</td>
            <td className="border py-2 px-4">History 201</td>
            <td className="border py-2 px-4">Prof. Johnson</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
