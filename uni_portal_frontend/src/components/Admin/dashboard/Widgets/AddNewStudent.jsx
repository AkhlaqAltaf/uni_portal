import React, { useState } from "react";

const AddNewStudent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enrollmentNumber: "",
    department: "",
    program: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mock API call
    try {
      console.log("Sending student data:", formData);
      setMessage("Student added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enrollmentNumber: "",
        department: "",
        program: "",
      });
    } catch (error) {
      setMessage("Failed to add student. Please try again.");
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="p-6 bg-[#1d2241] rounded-lg  shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Add New Student</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-[#06814f] bg-[#183c46] text-white rounded-md shadow-sm "
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-[#06814f] bg-[#183c46] text-white rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-[#06814f] bg-[#183c46] text-white rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-[#06814f] bg-[#183c46] text-white rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="enrollmentNumber" className="block text-sm font-medium text-white">
              Enrollment Number
            </label>
            <input
              type="text"
              id="enrollmentNumber"
              name="enrollmentNumber"
              value={formData.enrollmentNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md shadow-sm border-2 border-[#06814f] bg-[#183c46] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-white">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-[#06814f] bg-[#183c46] text-white rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="program" className="block text-sm font-medium text-white">
              Program
            </label>
            <input
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="mt-1 block w-full border-2 border-[#06814f] bg-[#183c46] text-white rounded-md shadow-sm"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-[#183c46] text-white font-semibold rounded-md hover:border-2 border-[#06814f]"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewStudent;
