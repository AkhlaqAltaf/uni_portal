import React, { useState } from 'react';

const PerformanceReport = () => {
  const [search, setSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [data] = useState([
    { id: '1', name: 'John Doe', department: "Computer Science", gpa: 3.8, attendance: 95, status: 'Pass' },
    { id: '2', name: 'Jane Smith', department: "Software Engineering", gpa: 2.5, attendance: 85, status: 'Fail' },
    { id: '3', name: 'Sam Wilson', department: "Mathematics", gpa: 3.2, attendance: 90, status: 'Pass' },
  ]);

  const departments = [...new Set(data.map(student => student.department))];

  const filteredData = data.filter(
    (student) =>
      (student.name.toLowerCase().includes(search.toLowerCase()) || student.id.includes(search)) &&
      (selectedDepartment === '' || student.department === selectedDepartment)
  );

  return (
    <div className="p-6 bg-[#0e153b] min-h-screen">
      <div className="max-w-7xl mx-auto bg-[#1d2241] shadow-md rounded-lg">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-white">University Performance Report</h1>
          <p className="text-sm text-white">Overview of student performance for the semester</p>
        </div>

        {/* Search and Dropdown */}
        <div className="p-4 flex gap-4">
          <input
            type="text"
            placeholder="Search by Student ID or Name"
            className="w-full px-4 py-2 border-2 border-[#06814f] bg-[#183c46] rounded-lg "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="px-4 py-2 text-white border-2 border-[#06814f] bg-[#183c46] rounded-lg"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Performance Table */}
        <div className="p-4">
          <table className="w-full border-collapse  bg-[#183c46]">
            <thead className="bg-[#183c46] border-2 border-[#06814f]">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm text-white">Student ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm text-white">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm text-white">Department</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm text-white">GPA</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm text-white">Attendance (%)</th>
                <th className="border border-gray-300 px-4 py-2 text-center text-sm text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((student, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-[#193344]' : 'bg-[#164046]'} hover:bg-[#193344]`}>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-white">{student.id}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-white">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm text-white">{student.department}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-white">{student.gpa}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm text-white">{student.attendance}%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center text-sm">
                      <span className={`px-2 py-1 rounded text-white ${student.status === 'Pass' ? 'bg-green-500' : 'bg-red-500'}`}>{student.status}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-600 py-4">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;
