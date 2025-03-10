import React, { useState } from 'react';

const AssignCourses = () => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [assignedCourses, setAssignedCourses] = useState([]);

  const facultyData = [
    { id: 'F101', name: 'Dr. Alice Johnson' },
    { id: 'F102', name: 'Dr. Bob Smith' },
    { id: 'F103', name: 'Dr. Carol Davis' },
    { id: 'F104', name: 'Dr. David Wilson' },
  ];

  const courses = ['Mathematics 101', 'Physics 201', 'Chemistry 301', 'Computer Science 101'];
  const departments = ['Computer Science', 'Computer Engineering', 'Civil Engineering', 'Business'];
  const sections = ['A', 'B', 'C', 'D'];
  const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const handleAssignCourse = () => {
    if (selectedFaculty && selectedCourse && selectedDepartment && selectedSection && selectedSemester) {
      const facultyName = facultyData.find(faculty => faculty.id === selectedFaculty).name;

      // 🔹 Check if the same faculty is already assigned to the same course, section, and semester
      const isAlreadyAssigned = assignedCourses.some(
        assignment =>
          assignment.facultyName === facultyName &&
          assignment.course === selectedCourse &&
          assignment.section === selectedSection &&
          assignment.semester === selectedSemester
      );

      if (isAlreadyAssigned) {
        alert('This faculty is already teaching this course in the selected section and semester.');
        return;
      }

      // ✅ Add new assignment
      const newAssignment = {
        facultyName,
        course: selectedCourse,
        department: selectedDepartment,
        section: selectedSection,
        semester: selectedSemester,
      };

      setAssignedCourses([...assignedCourses, newAssignment]);

      // 🔄 Reset selections after assigning
      setSelectedFaculty('');
      setSelectedCourse('');
      setSelectedDepartment('');
      setSelectedSection('');
      setSelectedSemester('');
    } else {
      alert('Please select all fields.');
    }
  };

  return (
    <div className="p-6 bg-[#1d2241]  rounded-lg min-h-screen">
      <div className="max-w-7xl mx-auto bg-[#183c46] border-2 border-[#06814f] shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-white mb-6">Assign Course to Faculty</h1>

        {/* Faculty Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">Select Faculty</label>
          <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)} className="w-full p-2 text-white bg-[#144c49] border-2 border-[#06814f] rounded">
            <option value="">Select Faculty</option>
            {facultyData.map(faculty => <option key={faculty.id} value={faculty.id}>{faculty.name}</option>)}
          </select>
        </div>

        {/* Course Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">Select Course</label>
          <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="w-full p-2 text-white bg-[#144c49] border-2 border-[#06814f] rounded">
            <option value="">Select Course</option>
            {courses.map((course, index) => <option key={index} value={course}>{course}</option>)}
          </select>
        </div>

        {/* Department Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">Select Department</label>
          <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} className="w-full p-2 text-white bg-[#144c49] border-2 border-[#06814f] rounded">
            <option value="">Select Department</option>
            {departments.map((dept, index) => <option key={index} value={dept}>{dept}</option>)}
          </select>
        </div>

        {/* Section Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">Select Section</label>
          <select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} className="w-full p-2 text-white bg-[#144c49] border-2 border-[#06814f] rounded">
            <option value="">Select Section</option>
            {sections.map((sec, index) => <option key={index} value={sec}>{sec}</option>)}
          </select>
        </div>

        {/* Semester Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-2">Select Semester</label>
          <select value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)} className="w-full p-2 text-white bg-[#144c49] border-2 border-[#06814f] rounded">
            <option value="">Select Semester</option>
            {semesters.map((sem, index) => <option key={index} value={sem}>{sem}</option>)}
          </select>
        </div>

        {/* Assign Button */}
        <div className="flex justify-end gap-4">
          <button onClick={handleAssignCourse} className="px-4 py-2 bg-[#144c49] border-2 border-[#06814f] text-white rounded">Assign Course</button>
        </div>

        {/* Assigned Courses Table */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white mb-4">Assigned Courses</h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="text-white">
                <th className="border px-4 py-2">Faculty</th>
                <th className="border px-4 py-2">Course</th>
                <th className="border px-4 py-2">Department</th>
                <th className="border px-4 py-2">Section</th>
                <th className="border px-4 py-2">Semester</th>
              </tr>
            </thead>
            <tbody>
              {assignedCourses.map((assignment, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-[#144c49]' : ' '}>
                  <td className="border text-white px-4 py-2">{assignment.facultyName}</td>
                  <td className="border text-white px-4 py-2">{assignment.course}</td>
                  <td className="border text-white px-4 py-2">{assignment.department}</td>
                  <td className="border text-white px-4 py-2">{assignment.section}</td>
                  <td className="border text-white px-4 py-2">{assignment.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AssignCourses;
