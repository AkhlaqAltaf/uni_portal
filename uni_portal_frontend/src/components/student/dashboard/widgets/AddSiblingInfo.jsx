import React, { useState } from "react";

const AddSiblingInfo = () => {
  const [formData, setFormData] = useState({
    regNoNumber: "",
    regNoPrefix: "FA01",
    program: "BBA",
    name: "",
    fatherName: "",
    relation: "",
    fatherNIC: "",
  });

  const regNoPrefixes = ["FA01", "SP01", "FA02", "SP02"];
  const programs = ["BBA", "BS(CS)", "BS(SE)", "BS(AI)", "BEE"];
  const relations = ["Brother", "Sister", "Cousin", "Other"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      regNoNumber: "",
      regNoPrefix: "FA01",
      program: "BBA",
      name: "",
      fatherName: "",
      relation: "",
      fatherNIC: "",
    });
  };

  return (
    <div className="p-6 sm:p-8 bg-white/30 backdrop-blur-lg rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-white/20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
        Add Sibling Information
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Reg No */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Reg No:
            </label>
            <div className="flex space-x-2">
              <select
                name="regNoPrefix"
                value={formData.regNoPrefix}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {regNoPrefixes.map((prefix) => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="regNoNumber"
                value={formData.regNoNumber}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Father Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Father Name:
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>

          {/* Relation */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Relation:
            </label>
            <select
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            >
              <option value="">-----</option>
              {relations.map((relation) => (
                <option key={relation} value={relation}>
                  {relation}
                </option>
              ))}
            </select>
          </div>

          {/* Father NIC */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Father NIC:
            </label>
            <input
              type="text"
              name="fatherNIC"
              value={formData.fatherNIC}
              onChange={handleChange}
              placeholder="e.g. 12345-6789012-3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-sm text-gray-500">No Guest Information Found</span>
          <div className="space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddSiblingInfo;
