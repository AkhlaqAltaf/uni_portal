import React, { useState } from 'react';

const AddSiblingInfo = () => {
    const [formData, setFormData] = useState({
        regNoNumber: '',
        regNoPrefix: 'FA01',
        program: 'BBA',
        name: '',
        fatherName: '',
        relation: '',
        fatherNIC: '',
    });

    const regNoPrefixes = ['FA01', 'SP01', 'FA02', 'SP02'];
    const programs = ['BBA', 'BS(CS)', 'BS(SE)', 'BS(AI)', 'BEE'];
    const relations = ['Brother', 'Sister', 'Cousin', 'Other'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleCancel = () => {
        setFormData({
            regNoNumber: '',
            regNoPrefix: 'FA01',
            program: 'BBA',
            name: '',
            fatherName: '',
            relation: '',
            fatherNIC: '',
        });
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Add Sibling Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Reg No:</label>
                        <div className="flex space-x-2">
                            <select
                                name="regNoPrefix"
                                value={formData.regNoPrefix}
                                onChange={handleChange}
                                className="w-1/4 border rounded px-2 py-1"
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
                                className="w-1/4 border rounded px-2 py-1"
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
                                className="w-1/4 border rounded px-2 py-1"
                                required
                            />
                        </div>
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded px-2 py-1"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Father Name:</label>
                        <input
                            type="text"
                            name="fatherName"
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="w-full border rounded px-2 py-1"
                            required
                        />
                    </div>

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Relation:</label>
                        <select
                            name="relation"
                            value={formData.relation}
                            onChange={handleChange}
                            className="w-full border rounded px-2 py-1"
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

                    
                    <div>
                        <label className="block text-sm font-medium mb-1">Father NIC:</label>
                        <input
                            type="text"
                            name="fatherNIC"
                            value={formData.fatherNIC}
                            onChange={handleChange}
                            placeholder="e.g. Personal, Parents cell no"
                            className="w-full border rounded px-2 py-1"
                            required
                        />
                    </div>
                </div>

                
                <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">No Guest Information Found</span>
                    <div className="space-x-2">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="bg-gray-300 px-4 py-2 rounded text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded text-sm"
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
