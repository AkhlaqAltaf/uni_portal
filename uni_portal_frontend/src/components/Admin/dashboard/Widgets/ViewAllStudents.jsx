import React, { useState, useEffect } from "react";

const ViewAllStudents = () => {
  const [students, setStudents] = useState([]); // Stores student data
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [itemsPerPage] = useState(10); // Items per page
  const [selectedDepartment, setSelectedDepartment] = useState(""); // Selected department filter

  // Simulate fetching data from API
  useEffect(() => {
    const fetchStudents = async () => {
      const data = [
        { id: 1, name: "John Doe", rollNo: "202301", program: "BSc CS", department: "Computer Science", semester: "3A", Batch: "SP-22" },
        { id: 2, name: "Jane Smith", rollNo: "202302", program: "BSc Maths", department: "Mathematics", semester: "5B", Batch: "FA-24" },
        { id: 3, name: "Alice Brown", rollNo: "202303", program: "BSc CS", department: "Computer Science", semester: "2C", Batch: "SP-23" },
        { id: 4, name: "Fahad", rollNo: "202305", program: "BSc SE", department: "Software Engineering", semester: "8D", Batch: "SP-21" },
        // Add more student data...
      ];
      setStudents(data);
    };
    fetchStudents();
  }, []);

  // Get unique departments for dropdown
  const departments = [...new Set(students.map(student => student.department))];

  // Filter students based on search query and department
  const filteredStudents = students.filter(
    (student) =>
      (selectedDepartment === "" || student.department === selectedDepartment) &&
      (student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Calculate pagination details
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-[#0e153b] rounded-lg min-h-screen">
      <h1 className="text-2xl font-semibold text-white mb-4">View All Students</h1>

      {/* Department Dropdown */}
      <div className="mb-4">
        <select
          className="px-4 py-2 border-2 border-[#06814f] text-white bg-[#193344]  rounded-lg shadow-sm w-full sm:w-1/3"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or roll no"
          className="px-4 py-2 border-2 border-[#06814f] bg-[#193344] rounded-lg shadow-sm w-full sm:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto border-2 border-[#06814f] shadow-lg">
        <table className="min-w-full bg-white rounded-lg">
          <thead className="bg-[#134c48] text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Roll No</th>
              <th className="px-4 py-2 text-left">Program</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Semester</th>
              <th className="px-4 py-2 text-left">Batch</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((student, index) => (
                <tr
                  key={student.id}
                  className={`${index % 2 === 0 ? "bg-[#164147]" : "bg-[#164147]"} hover:bg-gray-100`}
                >
                  <td className="px-4 py-2">{index + 1 + indexOfFirstItem}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.rollNo}</td>
                  <td className="px-4 py-2">{student.program}</td>
                  <td className="px-4 py-2">{student.department}</td>
                  <td className="px-4 py-2">{student.semester}</td>
                  <td className="px-4 py-2">{student.Batch}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 px-4 py-6">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4">
        {Array.from({ length: Math.ceil(filteredStudents.length / itemsPerPage) }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 mx-1 rounded-md ${
              currentPage === i + 1 ? "bg-[#134c48] text-white" : "bg-gray-200"
            }`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ViewAllStudents;
