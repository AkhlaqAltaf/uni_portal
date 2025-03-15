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
    <div className="p-3 md:p-6 border-[1px] border-white/35 text-white rounded-lg shadow">
      <h2 className="text-[2vw] font-bold mb-3 md:mb-6">Add Sibling Information</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6">
        {/* Reg No */}
        <div>
          <label className="block text-[1vw] font-medium mb-2">Reg No:</label>
          <div className="flex space-x-2">
            <select
              name="regNoPrefix"
              value={formData.regNoPrefix}
              onChange={handleChange}
              className="w-1/3 p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
            >
              {regNoPrefixes.map((prefix) => (
                <option className="text-black text-[1vw]" key={prefix} value={prefix}>
                  {prefix}
                </option>
              ))}
            </select>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-1/3 p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
            >
              {programs.map((program) => (
                <option className="text-black text-[1vw]" key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="regNoNumber"
              value={formData.regNoNumber}
              onChange={handleChange}
              className="w-1/3 p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
              required
            />
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block font-medium mb-2 text-[1vw]">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
            required
          />
        </div>

        {/* Father Name */}
        <div>
          <label className="block  font-medium mb-2 text-[1vw]">Father Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
            required
          />
        </div>

        {/* Relation */}
        <div>
          <label className="block  font-medium mb-2 text-[1vw]">Relation:</label>
          <select
            name="relation"
            value={formData.relation}
            onChange={handleChange}
            className="w-full p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
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
          <label className="block  font-medium mb-2 text-[1vw]">Father NIC:</label>
          <input
            type="text"
            name="fatherNIC"
            value={formData.fatherNIC}
            onChange={handleChange}
            placeholder="e.g. 12345-6789012-3"
            className="w-full p-2 border border-[#05945626] bg-[rgba(5,148,86,0.15)] rounded focus:outline-none text-[1vw]"
            required
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mt-3 md:mt-6">
          <span className="text-[1vw] text-gray-400">No Guest Information Found</span>
          <div className="space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-2 py-1 md:px-4 md:py-2 text-[1vw] bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-1 md:px-4 md:py-2 text-[1vw] bg-[#048C51] text-white rounded-lg hover:opacity-90 focus:outline-none"
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
