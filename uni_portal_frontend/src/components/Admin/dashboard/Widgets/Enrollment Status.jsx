import React, { useState, useEffect } from "react";

const EnrollmentStatus = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("All");

  useEffect(() => {
    const fetchEnrollmentData = async () => {
      setLoading(true);
      try {
        const data = [
          { id: 1, name: "John Doe", program: "CS", status: "Enrolled" },
          { id: 2, name: "Jane Smith", program: "IT", status: "Pending" },
          { id: 3, name: "Alice Johnson", program: "SE", status: "Rejected" },
        ];
        setEnrollments(data);
        setFilteredEnrollments(data);
      } catch (error) {
        console.error("Error fetching enrollment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollmentData();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterData(query, selectedProgram);
  };

  const handleStatusChange = (id, newStatus) => {
    const updatedEnrollments = enrollments.map((enrollment) =>
      enrollment.id === id ? { ...enrollment, status: newStatus } : enrollment
    );
    setEnrollments(updatedEnrollments);
    filterData(searchQuery, selectedProgram);
  };

  const handleProgramChange = (program) => {
    setSelectedProgram(program);
    filterData(searchQuery, program);
  };

  const filterData = (query, program) => {
    let filtered = enrollments.filter((enrollment) =>
      enrollment.name.toLowerCase().includes(query.toLowerCase())
    );
    if (program !== "All") {
      filtered = filtered.filter((enrollment) => enrollment.program === program);
    }
    setFilteredEnrollments(filtered);
  };

  if (loading) {
    return <div>Loading enrollment data...</div>;
  }

  return (
    <div className="p-4 bg-[#1d2241] shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Enrollment Status</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by student name"
          className="p-2 border-2 border-[#06814f] bg-[#183c46] rounded w-full"
        />
        <select
          value={selectedProgram}
          onChange={(e) => handleProgramChange(e.target.value)}
          className="p-2 border-2 border-[#06814f] bg-[#183c46] text-white rounded"
        >
          <option value="All">All Programs</option>
          <option value="CS">CS</option>
          <option value="IT">IT</option>
          <option value="SE">SE</option>
        </select>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="border-2 border-[#06814f] bg-[#134c48] text-white">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Program</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEnrollments.map((enrollment, index) => (
            <tr key={enrollment.id} className="text-white">
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{enrollment.name}</td>
              <td className="border border-gray-300 p-2">{enrollment.program}</td>
              <td className="border border-gray-300 p-2">{enrollment.status}</td>
              <td className="border border-gray-300 p-2">
                <select
                  value={enrollment.status}
                  onChange={(e) =>
                    handleStatusChange(enrollment.id, e.target.value)
                  }
                  className="p-1 border-2 border-[#06814f] bg-[#183c46] rounded"
                >
                  <option value="Enrolled">Enrolled</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentStatus;
