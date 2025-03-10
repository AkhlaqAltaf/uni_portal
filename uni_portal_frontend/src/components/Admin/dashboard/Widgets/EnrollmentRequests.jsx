import React, { useState } from 'react';

const EnrollmentRequests = () => {
  // State for storing requests
  const [requests, setRequests] = useState([
    { studentName: 'John Doe', courseName: 'React Development', status: 'Pending' },
    { studentName: 'Jane Smith', courseName: 'Data Science', status: 'Pending' },
    { studentName: 'Mark Lee', courseName: 'Machine Learning', status: 'Pending' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter requests based on the search query
  const filteredRequests = requests.filter(
    (request) =>
      request.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Approve a request
  const handleApprove = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Approved';
    setRequests(updatedRequests);
  };

  // Reject a request
  const handleReject = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].status = 'Rejected';
    setRequests(updatedRequests);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#1d2241] rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-white">Enrollment Requests</h2>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-4 bg-[#193344] border-2 border-[#06814f]  text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Search Field for Requests */}
      <div className="mt-6 mb-4">
        <label className="block text-sm font-medium text-white">Search Enrollment Requests</label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 mt-1 bg-[#193344] border-2 border-[#06814f] rounded-md"
          placeholder="Search by student name or course name"
        />
      </div>

      {/* Displaying Enrollment Requests */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-4">Requests</h3>
        {filteredRequests.length === 0 ? (
          <p className="text-white">No requests found.</p>
        ) : (
          <table className="min-w-full table-auto text-white border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-[#193344] border-2 border-[#06814f] text-left">Student Name</th>
                <th className="px-4 py-2 bg-[#193344] border-2 border-[#06814f] text-left">Course Name</th>
                <th className="px-4 py-2 bg-[#193344] border-2 border-[#06814f] text-left">Status</th>
                <th className="px-4 py-2 bg-[#193344] border-2 border-[#06814f] text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request, index) => (
                <tr key={index} className="even:bg-gray-100">
                  <td className="px-4 py-2 bg-[#193344] border-2 border-[#06814f]">{request.studentName}</td>
                  <td className="px-4 py-2 bg-[#193344] border-2 border-[#06814f]">{request.courseName}</td>
                  <td className="px-4 py-2 bg-[#193344] border-2 border-[#06814f]">{request.status}</td>
                  <td className="px-4 py-2 bg-[#193344] border-2 border-[#06814f]">
                    {request.status === 'Pending' ? (
                      <>
                        <button
                          onClick={() => handleApprove(index)}
                          className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(index)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EnrollmentRequests;
