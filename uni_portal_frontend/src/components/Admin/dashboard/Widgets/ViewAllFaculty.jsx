import React, { useState } from 'react';

const ViewAllFaculty = () => {
  const [search, setSearch] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  
  const facultyData = [
    { id: 'F101', name: 'Dr. Alice Johnson', department: 'Computer Science', email: 'alice.johnson@univ.edu' },
    { id: 'F102', name: 'Dr. Bob Smith', department: 'Mathematics', email: 'bob.smith@univ.edu' },
    { id: 'F103', name: 'Dr. Carol Davis', department: 'Physics', email: 'carol.davis@univ.edu' },
    { id: 'F104', name: 'Dr. David Wilson', department: 'Chemistry', email: 'david.wilson@univ.edu' },
  ];
  
  const departments = ['All', ...new Set(facultyData.map(faculty => faculty.department))];

  const filteredFaculty = facultyData.filter(
    (faculty) => 
      (selectedDepartment === 'All' || faculty.department === selectedDepartment) &&
      (faculty.name.toLowerCase().includes(search.toLowerCase()) ||
      faculty.id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6 bg-[#1d2241] rounded-lg min-h-screen">
      <div className="max-w-7xl mx-auto bg-[#193344] border-2 border-[#06814f] shadow-md rounded-lg">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-white">Faculty Management</h1>
          <p className="text-sm text-white">View and manage all faculty details.</p>
        </div>

        {/* Search and Dropdown Filters */}
        <div className="p-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by Faculty ID or Name"
            className="w-full md:w-1/2 px-4 py-2 bg-[#193344] border-2 border-[#06814f]  rounded-lg focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-1/2 px-4 py-2 bg-[#193344] border-2 border-[#06814f] rounded-lg text-white"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Faculty Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-[#193344] border-2 border-[#06814f]">
            <thead className="bg-[#193344] ">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium  text-white">Faculty ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium  text-white">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium  text-white">Department</th>
                <th className="px-4 py-2 text-left text-sm font-medium  text-white">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-[#164046]' : 'bg-[#164046]'} hover:bg-[#164046]`}
                  >
                    <td className="px-4 py-2 text-sm text-white">{faculty.id}</td>
                    <td className="px-4 py-2 text-sm text-white">{faculty.name}</td>
                    <td className="px-4 py-2 text-sm text-white">{faculty.department}</td>
                    <td className="px-4 py-2 text-sm text-white">{faculty.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-gray-600 py-4">
                    No faculty found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllFaculty;
